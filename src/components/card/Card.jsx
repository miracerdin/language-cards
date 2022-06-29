import cardStyle from "./Card.module.scss";
import { useState } from "react";

const Card = ({ name, img, options }) => {
  const [paragraf, setParagraf] = useState(true);

  return (
    <div
      className={cardStyle.parentCard}
      onClick={() => setParagraf(!paragraf)}
    >
      {paragraf ? (
        <div className={cardStyle.cards}>
          <img src={img} className={cardStyle.image} />
          <h4>{name}</h4>
        </div>
      ) : (
        <ul className={cardStyle.liste}>
          {options.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Card;
