import { Member } from "./member";
import { Product } from "./product";


/** REACT APP STATE **/
export interface AppRootState {
    homePage: HomePageState;
}


/** HOMEPAGE **/
export interface HomePageState {
    popularDrinks: Product[];
    dessertMenu: Product[];
    topUsers: Member[];
}

/** PRODUCTS PAGE **/

/** ORDERS PAGE **/