import { combineReducers } from "redux";
import FaqReducer from "./FaqReducer";
import MenuReducer from "./MenuReducer";
import FullMenu from "./FullMenu";
import PaymentReducer from "./PaymentReducer";
import Cart from "./Cart";


export default combineReducers({
    faq : FaqReducer,
    menu : MenuReducer,
    fullMenu : FullMenu,
    cart : Cart,
    pay : PaymentReducer
});
