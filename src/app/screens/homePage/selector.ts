import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";


const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDrinks = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDrinks
);

export const retrieveDessertMenu = createSelector(
    selectHomePage,
    (HomePage) => HomePage.dessertMenu
);

export const retrieveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
);
