import React from 'react';
import styles from './CarItem.module.css';
import { Link } from 'react-router-dom';

const CarItem = ({ name, img, price, id, backButton }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return (
    <div className={styles.cart}>
      <div className={styles.cart__mainImg}>
        {' '}
        <img
          src={img}
          alt={name}
        />
      </div>
      <h2>{name}</h2>
      <p>{formatter.format(price)}</p>
      {backButton ? (
        <Link
          className='btn'
          to='/'>
          Back
        </Link>
      ) : (
        <Link
          className='btn'
          to={`/car/${id}`}>
          More
        </Link>
      )}
    </div>
  );
};

export default CarItem;
