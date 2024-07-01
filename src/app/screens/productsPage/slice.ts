import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";


const initialState: ProductsPageState = {
    coffee: null,
    chosenProduct: null,
    products: [],
};

const productsPageSclice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {
        setCoffee: (state, action) => {
            state.coffee = action.payload;
        },
        setChosenProduct: (state, action) => {
            state.chosenProduct = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setCoffee, setChosenProduct, setProducts } =
    productsPageSclice.actions;

const ProductsPageReducer = productsPageSclice.reducer;
export default ProductsPageReducer