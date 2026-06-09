import { Helmet } from 'react-helmet-async';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Om oss – Hyltans Metall</title>
      </Helmet>

      <section className="block about-page-block">
        <div className="container container-sm">
          <p className="label">Sedan 1926</p>
          <h1 className={styles.page_title}>Om oss</h1>

          <div className={styles.content}>
            <p>
              Hyltans Metall AB grundades 1926 i Gnosjö – en stad känd för sin
              företagsamhet och hantverkstradition. Det som började som ett litet
              gjuteri har under tre generationer vuxit till ett familjeföretag med
              djupa rötter i bygden och ett unikt kunnande om sandgjutning i brons.
            </p>

            <h2>Tre generationer av stolthet</h2>
            <p>
              Hantverket har förts vidare från far till son, med respekt för de
              metoder som alltid fungerat. Vi gjuter brons precis som det gjordes
              när företaget startades – med noggrant packad sand, ett öga för
              detaljen och ett brinnande intresse för materialet.
            </p>

            <h2>Gnosjöandan i varje gjutning</h2>
            <p>
              Gnosjö är känt för sin industriella historia och sin anda av att
              lösa problem med egna händer. Den mentaliteten genomsyrar allt vi gör.
              Vi tar oss an utmaningar som andra hänvisar vidare, och vi hittar
              lösningar som håller i generationer.
            </p>

            <h2>Handgjort i Sverige</h2>
            <p>
              Varje föremål vi gjuter är unikt. Från det att sanden packas runt
              gjutformen till det att det färdiga bronsföremålet slipas och poleras –
              allt görs för hand, i vår verkstad i Gnosjö. Det är vår garanti för
              kvalitet och det är vad som skiljer oss från massproducerade alternativ.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
