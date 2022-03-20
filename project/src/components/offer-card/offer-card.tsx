import classNames from 'classnames';
import Rating from '../rating/rating';
import Price from '../price/price';
import { generatePath, Link } from 'react-router-dom';
import FavoriteButton from '../favorite-button/favorite-button';
import { AppRoute, OFFERTYPE_TO_LABEL } from '../../const';
import { Offer } from '../../types/offer';

import './style.css';
import React, { useCallback } from 'react';

type OfferCardProps = {
  className: string,
  offer: Offer,
  onOfferCardMouseEnter?: (offerId: number) => void,
  onOfferCardMouseOut?: () => void
}

function OfferCard({ className, offer, onOfferCardMouseEnter, onOfferCardMouseOut }: OfferCardProps) {
  const { id, isPremium, isFavorite, rating, price, type, title, previewImage } = offer;
  const classNameCard = classNames({
    [`${className}__place-card place-card`]: className === 'cities',
    [`${className}__card place-card`]: className !== 'cities',
  });
  const classNameImageWrapper = `${className}__image-wrapper place-card__image-wrapper`;
  const classNameInfo = `${className}__card-offer place-card__offer`;
  const offerRoute = generatePath(AppRoute.Room, {
    id: `${id}`,
  });

  const handleOfferCardMouseEnter = useCallback(() => {
    onOfferCardMouseEnter?.(id);
  }, [id, onOfferCardMouseEnter]);

  return (
    <article className={classNameCard} onMouseEnter={handleOfferCardMouseEnter} onMouseLeave={onOfferCardMouseOut}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={classNameImageWrapper}>
        <Link to={offerRoute}>
          <img className="place-card__image" src={previewImage} alt="Place" />
        </Link>
      </div>
      <div className={classNameInfo}>
        <div className="place-card__price-wrapper">
          <Price amount={price} className='place-card' />
          <FavoriteButton id={id} className='place-card' isFavorite={isFavorite} size={{width: 18, height: 19}} />
        </div>
        <Rating className='place-card' rating={rating} />
        <h2 className="place-card__name">
          <Link to={offerRoute}>{title}</Link>
        </h2>
        <p className="place-card__type">{OFFERTYPE_TO_LABEL[type]}</p>
      </div>
    </article>);
}

export default React.memo(OfferCard);
