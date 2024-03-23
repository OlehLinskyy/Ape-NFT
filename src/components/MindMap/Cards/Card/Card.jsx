import css from './Card.module.css';
import { ReactComponent as UpLeft } from '../../../../assets/up-left-arrow.svg';

function Card({ data }) {
  return (
    <li>
      {data.link ? (
        <a href={data.link} className={`${css.card} ${data.link && css.link}`}>
          <UpLeft />
          <h4>{data.title}</h4>
        </a>
      ) : (
        <div className={`${css.card} ${data.link && css.link}`}>
          <p className="description">{data.text}</p>
          <h4>{data.title}</h4>
        </div>
      )}
    </li>
  );
}
export default Card;