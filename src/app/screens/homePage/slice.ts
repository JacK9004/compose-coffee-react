import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";


const initialState: HomePageState = {
    popularDrinks: [],
    dessertMenu: [],
    topUsers: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setPopularDrinks: (state, action) => {
            state.popularDrinks = action.payload;
        },
        setDessertMenu: (state, action) => {
            state.dessertMenu = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

export const { setPopularDrinks, setDessertMenu, setTopUsers } = 
    homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;

export default HomePageReducer;