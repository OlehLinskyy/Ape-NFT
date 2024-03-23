import css from './Banner.module.css';
import useMediaQuery from 'helpers/useMediaQuery';

function Banner({ children }) {
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
