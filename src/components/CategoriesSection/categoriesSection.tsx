'use client'

import React from 'react';
import CategoriesCard from '../CategoriesCard/categoriesCard';
import styles from './CategoriesSection.module.scss';


type CategoryType = {
    id: number;
    name: string;
    image: string;
  };

type PropType = {
    categories: CategoryType[];
  };

const CategoriesSection: React.FC<PropType> = ({ categories }) => {
  return (
    <div className={styles.categoriesSection}>
      <h2 className={styles.sectionTitle}>Categories</h2>
      <div className={styles.cardsContainer}>
        {categories.slice(0,5)?.map((category:any) => (
          <CategoriesCard id={category?.id} image={category.image} text={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
