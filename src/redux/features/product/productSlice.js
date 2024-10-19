import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProduct, getCategories } from "./productThunk";

const name = "Product";

const initialState = {
    products: [],
    categories: [],
    product: null,
    selectedCategory: null, 
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name,
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload; 
        },
        clearSelectedCategory: (state) => {
            state.selectedCategory = null; 
        },
    },
    extraReducers: (builder) => {
        // get All Product
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // get one Product
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                console.log(action.payload, "payload");
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // get Categories
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            });
    },
});

export const { setSelectedCategory, clearSelectedCategory } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;   
