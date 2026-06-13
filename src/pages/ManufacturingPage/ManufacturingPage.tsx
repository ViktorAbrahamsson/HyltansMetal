import { Helmet } from 'react-helmet-async';
import styles from './ManufacturingPage.module.scss';

const steps = [
  {
    number: '01',
    title: 'Modellen förbereds',
    description:
      'Allt börjar med en modell av det föremål som ska gjutas. Modellen kan vara i trä, plast eller ett befintligt föremål. Den formar sandavtrycket som sedan används vid gjutningen.',
  },
  {
    number: '02',
    title: 'Sanden packas',
    description:
      'Fin gjutsand packas noggrant för hand runt modellen i en gjutform. Varje form är unik och används bara en gång – en tradition vi behållit sedan 1926.',
  },
  {
    number: '03',
    title: 'Bronsen smälts',
    description:
      'Brons värms i vår ugn till cirka 1200 grader Celsius tills den är helt flytande. Temperaturen och tidpunkten för gjutningen är avgörande för slutresultatet.',
  },
  {
    number: '04',
    title: 'Gjutningen',
    description:
      'Den glödande bronsen hälls varsamt in i sandformen. Metallen fyller varje detalj i avtrycket och stelnar till den form som modellen gav.',
  },
  {
    number: '05',
    title: 'Rensning och finish',
    description:
      'När bronsen svalnat bryts sandformen upp och gjutgodset rensas från sand och gjutkanaler. Sedan slipas och poleras föremålet för hand till önskat utseende.',
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <Helmet>
        <title>Tillverkning – Hyltans Metall</title>
      </Helmet>

      {/* Intro block */}
      <section className={`block manufacturing-block ${styles['mfg-intro']}`}>
        <div className="container container-sm">
          <p className="label">Processen</p>
          <h1 className={styles['mfg-intro__h1']}>Sandgjutning i brons</h1>
          <p className={styles['mfg-intro__lead']}>
            Sandgjutning är en av världens äldsta metallbearbetningsmetoder. Hos oss
            utförs varje steg för hand, med metoder som beprövats i hundratals år och
            förfinats under tre generationer.
          </p>
        </div>
      </section>

      {/* Steps section */}
      <section className={`block block--paper steps-block ${styles['mfg-steps']}`}>
        <div className="container container-sm">
          <ol className={styles['mfg-steps__list']}>
            {steps.map((step) => (
              <li key={step.number} className={styles['mfg-step']}>
                <span
                  className={styles['mfg-step__numeral']}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className={styles['mfg-step__body']}>
                  <div className={styles['mfg-step__stamp-row']}>
                    <span className="batch-stamp">Steg {step.number}</span>
                  </div>
                  <h2 className={styles['mfg-step__title']}>{step.title}</h2>
                  <p className={styles['mfg-step__desc']}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
