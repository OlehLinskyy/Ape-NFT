import css from './Hero.module.css';
import useMediaQuery from 'helpers/useMediaQuery';
import heroApeMobile from '../../assets/png/hero-ape-mobile.png';
import heroApeMobile2x from '../../assets/png/hero-ape-mobile-2x.png';
import heroApeTablet from '../../assets/png/hero-ape-tablet.png';
import heroApeTablet2x from '../../assets/png/hero-ape-tablet-2x.png';
import heroApeDesctop from '../../assets/png/hero-ape-desctop.png';
import heroApeDesctop2x from '../../assets/png/hero-ape-desctop-2x.png';

function Hero() {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isTablet = useMediaQuery('(max-width:1279px)');
  return (
    <section id="hero" className={css.hero}>
      <div className={css.hero_container}>
        <p className={css.subtitle}>diD yOu seE iT ?</p>
        <h1>
          <span>yacht</span> <span>apes</span>
        </h1>
        <p className={css.subtitle}>Apes aRe eveRywhere</p>
        <img
          src={
            isMobile ? heroApeMobile : isTablet ? heroApeTablet : heroApeDesctop
          }
          srcset={
            isMobile
              ? `${heroApeMobile} 1x, ${heroApeMobile2x} 2x`
              : isTablet
              ? `${heroApeTablet} 1x, ${heroApeTablet2x} 2x`
              : `${heroApeDesctop} 1x, ${heroApeDesctop2x} 2x`
          }
          alt="heroApe"
        />
        <div className={css.action_block}>
          {!isMobile && (
            <p className={css.description}>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
          )}
          <button
            className={css.button}
            onClick={() => {
              const mintElem = document.getElementById('mint');
              const top = mintElem?.offsetTop || 0;
              window.scrollTo({
                top: top,
                behavior: 'smooth',
              });
            }}
          >
            meet apes
          </button>
        </div>
        {isMobile && (
          <p className={css.description}>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        )}
      </div>
    </section>
  );
}
export default Hero;
