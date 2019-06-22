import React from 'react';
import { cardData } from '../../data';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

console.log(Card)

// Make sure to include PropTypes.

Card.propTypes = {
  cards: PropTypes.arrayOf(

    PropTypes.shape({
      headline: PropTypes.string,
    })

  )
}

export default Card;
