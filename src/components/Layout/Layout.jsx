'use client'
import React from 'react';
import Header from '@/components/Header/Header';

const withLayout = (WrappedComponent) => {
  return (props) => (
    <div>
      <Header />
      <main>
        <WrappedComponent {...props} />
      </main>
    </div>
  );
};

export default withLayout;
