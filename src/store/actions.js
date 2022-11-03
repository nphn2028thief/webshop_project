import { SET_IS_LOGIN, SET_IS_LOGOUT, SET_COUNT_PRODUCT_IN_CART } from './constants';

export const setIsLogin = (payload) => ({
    type: SET_IS_LOGIN,
    payload,
});

export const setIsLogout = (payload) => ({
    type: SET_IS_LOGOUT,
    payload,
});

export const setCountProductInCart = (payload) => ({
    type: SET_COUNT_PRODUCT_IN_CART,
    payload,
});
