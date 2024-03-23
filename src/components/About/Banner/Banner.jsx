import css from './Banner.module.css';
import useMediaQuery from 'helpers/useMediaQuery';

function Banner({ children }) {
  const isMobile = useMediaQuery('(max-width:767px)');
  const isMedium = useMediaQuery('(max-width:1439px)');
  const numChildren = 3;
  return (
    <div className={css.line}>
    {Array.from({ length: numChildren }, (_, index) => (
      <div key={index}>{children}</div>
    ))}
  </div>
  );
}

export default Banner;
