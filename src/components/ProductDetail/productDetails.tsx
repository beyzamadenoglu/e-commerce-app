import React from 'react';
import RatingComponent from './Rating'

import styles from './ProductDetail.module.scss';

const ProductDetails = () => {
  return (
    <div className={styles.details}>
      <div className={styles.name}>Product Name</div>
      <RatingComponent />
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
