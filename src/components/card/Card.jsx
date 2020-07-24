import React from 'react';
import cn from 'classnames';

const Card = ({ card }) => {
  const { color, description } = card;

  const cardClassnames = cn('card', {
    [`card--${color}`]: true,
    'card--repeat': Object.values(card.repeating_days).some(Boolean),
  });

  const createEditButton = (name, isActive = true) => {
    const btnClassNames = cn('card__btn', {
      [`card__btn--${name}`]: true,
      'card__btn--disabled': !isActive,
    });
    return (
      <button type="button" className={btnClassNames} disabled={!isActive}>
        {name}
      </button>
    );
  };

  return (
    <article className={cardClassnames}>
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            {createEditButton('edit')}
            {createEditButton('archive', !card.is_archived)}
            {createEditButton('favorites', !card.is_favorite)}
          </div>

          <div className="card__color-bar">
            <svg
              className="card__color-bar-wave"
              width="100%"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 159 10"
            >
              <g fill="none" fillRule="nonzero" strokeLinecap="square" strokeWidth="5">
                <path
                  d="M4 4l9.257 2.463L21.367 4l7.927 2.463L38.736 4l9.117 2.463L56.103 4l8.685 2.463L73.472 4l8.684 2.463L90.84 4l8.684 2.463L108.208 4l8.684 2.463L125.576 4l8.684 2.463L142.943 4M146.423 4l9.257 2.463" />
              </g>
            </svg>
          </div>

          <div className="card__textarea-wrap">
            <p className="card__text">{description}</p>
          </div>

          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <div className="card__date-deadline">
                  <p className="card__input-deadline-wrap">
                    <span className="card__date">23 September</span>
                    <span className="card__time">16:15</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
