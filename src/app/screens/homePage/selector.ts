import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";


const selectHomePage = (state: AppRootState) => state.homePage;

export const retrivePopularDrinks = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDrinks
);

export const retriveDessertMenu = createSelector(
    selectHomePage,
    (HomePage) => HomePage.dessertMenu
);

export const retriveTopUsers = createSelector(
    selectHomePage,
    (HomePage) => HomePage.topUsers
);
