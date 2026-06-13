import { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';

interface Ember {
  x: number;
  y: number;
  r: number;
  vy: number;
  sway: number;
  phase: number;
  speed: number;
  twinkle: number;
  color: string;
}

const COLORS = ['#FFB066', '#E2B05E', '#D9A24B', '#B07A2E'];
const COUNT = 70;

export default function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = (anywhere: boolean): Ember => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : height + 10,
      r: 0.6 + Math.random() * 1.7,
      vy: 0.18 + Math.random() * 0.55,
      sway: 10 + Math.random() * 30,
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.7,
      twinkle: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const embers: Ember[] = Array.from({ length: COUNT }, () => spawn(true));

    let t = 0;
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y -= e.vy;
        if (e.y < -12) embers[i] = spawn(false);

        const x = e.x + Math.sin(t * e.speed + e.phase) * e.sway * 0.12;
        // flicker + fade out toward the top third
        const flicker = 0.55 + 0.45 * Math.sin(t * 2.2 + e.twinkle);
        const heightFade = Math.min(1, Math.max(0, e.y / (height * 0.35)));
        const alpha = 0.7 * flicker * heightFade;
        if (alpha <= 0.01) continue;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = e.color;
        ctx.shadowColor = e.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    if (reducedMotion) {
      // one static, dimmer frame — no animation
      t = 1;
      drawFrame();
      return () => window.removeEventListener('resize', resize);
    }

    let raf = 0;
    let running = true;
    const loop = () => {
      if (!running) return;
      t += 1 / 60;
      drawFrame();
      raf = requestAnimationFrame(loop);
    };

    // pause the loop while the hero is scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (visible && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    observer.observe(canvas);
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles['hero__embers']} aria-hidden="true" />;
}
