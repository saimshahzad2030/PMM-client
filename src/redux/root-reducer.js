import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart-reducer'
import cardReducer from './reducers/card-reducer'
import shippingReducer from './reducers/shipping-reducer'
import orderReducer from './reducers/order-reducer'
import bankReducer from './reducers/bank-reducer'
import walletReducer from './reducers/wallet-reducer'
import favouriteReducer from './reducers/favourite-reducer'
import addressReducer from './reducers/address.reducer'
import loginSectionReducer from './reducers/loginSection'
export default combineReducers({
    userInfo: cartReducer,
    userShippings: shippingReducer,
    userOrders: orderReducer,
    userAddresses: addressReducer,
    userCart: cartReducer,
    userBank: bankReducer,
    userCards: cardReducer,
    userWallet: walletReducer,
    userFavourites: favouriteReducer,
    loginSection:loginSectionReducer
})