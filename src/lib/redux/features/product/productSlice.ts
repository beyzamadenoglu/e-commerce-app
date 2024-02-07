import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store'

interface Product {
  id: string; 
  title: string;
  price: number;
  description: string;
  category: number;
  images: string[];
  name?: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { setProducts, addProduct, deleteProduct, updateProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
