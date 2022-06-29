import cardStyle from "./Card.module.scss";
import { useState, useEffect } from "react";

const Card = ({ name, img, options }) => {
  const [paragraf, setParagraf] = useState(true);
  const [mouseover, setMouseover] = useState(false);

  const handleClick = () => {
    setParagraf(!paragraf);
  };
  useEffect(() => {
    if (paragraf == false) {
      const timer = setTimeout(() => setParagraf(!paragraf), 5000);
    }
  }, [paragraf]);

  return (
    <div className={cardStyle.parentCard} onClick={handleClick}>
      {paragraf ? (
        <div
          className={mouseover ? cardStyle.imagechange : cardStyle.cards}
          onMouseOut={() => setMouseover(!mouseover)}
          onMouseOver={() => setMouseover(!mouseover)}
        >
          <img src={img} className={cardStyle.image} />
          <h4>{name}</h4>
        </div>
      ) : (
        <ul className={cardStyle.liste}>
          {options.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Card;
