import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
