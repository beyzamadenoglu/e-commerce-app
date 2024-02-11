import React from 'react';
import { Card, Image } from '@mantine/core';
import styles from './ProductDetail.module.scss';

const ProductDetailCard = ({ image, text }: any) => {
  return (
    <Card className={styles.card} shadow="sm" radius="md">
      <Image src={image} alt={text} className={styles.image} />
    </Card>
  );
}

export default ProductDetailCard;
