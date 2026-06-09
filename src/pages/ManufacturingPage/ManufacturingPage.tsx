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

      <section className="block manufacturing-block">
        <div className="container container-sm">
          <p className="label">Processen</p>
          <h1 className={styles.page_title}>Sandgjutning i brons</h1>
          <p className={styles.intro}>
            Sandgjutning är en av världens äldsta metallbearbetningsmetoder. Hos oss
            utförs varje steg för hand, med metoder som beprövats i hundratals år och
            förfinats under tre generationer.
          </p>
        </div>
      </section>

      <section className="block steps-block">
        <div className="container container-sm">
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.number} className={styles.step}>
                <span className={styles.step__number}>{step.number}</span>
                <div className={styles.step__content}>
                  <h2 className={styles.step__title}>{step.title}</h2>
                  <p className={styles.step__description}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
