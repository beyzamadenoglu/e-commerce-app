// ProductDetailPage.tsx
import React from 'react';
import ProductDetailCard from '@/components/ProductDetail/productDetailCard';
import ProductDetails from '@/components/ProductDetail/productDetails';

import styles from './ProductDetail.module.scss';

const ProductDetailPage = () => {
  return (
    <div className={styles.page}>
      <ProductDetailCard />
      <ProductDetails />
    </div>
  );
}

export default ProductDetailPage;
