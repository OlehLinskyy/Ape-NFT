import css from './Card.module.css';

function Card({ data, id, handlePickAnswer, showId }) {
  function handleClick() {
    handlePickAnswer(id);
  }
  return (
    <li>
      <button
        onClick={handleClick}
        className={`${css.button} ${showId === id && css.button_active}`}
      >
        <div className={css.card}>
          <div className={css.img_container}>
            <img
              src={data.img}
              srcset={`${data.img} 1x, ${data.img2x} 2x`}
              alt={data.title}
            />
          </div>
          <div className={css.key}>[ {id} ]</div>
          <div>
            <h5>{data.title}</h5>
            <div className={css.answer}>
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      </button>
    </li>
  );
}

export default Card;
