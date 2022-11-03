import { SET_IS_LOGIN, SET_IS_LOGOUT } from './constants';

const initState = {
    isLogin: false,
    countProductInCart: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            };
        case SET_IS_LOGOUT:
            return {
                ...state,
                isLogin: action.payload,
            };
        default:
            throw new Error('Invalid action!');
    }
}

export { initState };
export default reducer;
