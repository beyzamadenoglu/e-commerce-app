import React from 'react';
import styles from './Loading.module.scss';

const LoadingPage: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default LoadingPage;
