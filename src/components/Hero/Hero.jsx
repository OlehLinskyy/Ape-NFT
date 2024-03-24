import css from './Hero.module.css';
import useMediaQuery from 'helpers/useMediaQuery';
import heroApeMobile from '../../assets/hero-ape-mobile.png';
import heroApeTablet from '../../assets/hero-ape-tablet.png';
import heroApeDesctop from '../../assets/hero-ape-desctop.png';

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
