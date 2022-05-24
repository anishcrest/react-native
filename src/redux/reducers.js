import { REHYDRATE } from 'redux-persist';

let initState = {
    loginData: {},
    userToken: null,
    provider: null,
    userCountryDetail: null,
    firbaseToken: null,
};

function ApptizerReducers(state = initState, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                loginData: action.res,
            };
        case 'LOG_OUT':
            return {
                ...state,
                loginData: {},
                userToken: null,
                userCountryDetail: null,
                firbaseToken: null,
                provider: null,
            };
        case 'USER_TOKEN':
            return {
                ...state,
                userToken: action.res,
            };
        case 'PROVIDER':
            return {
                ...state,
                provider: action.res,
            };
        case 'USER_COUNTRY_DETAIL':
            return {
                ...state,
                userCountryDetail: action.res,
            };
        case 'FIREBASE_TOKEN':
            return {
                ...state,
                firbaseToken: action.res,
            };
        case REHYDRATE:
            return {
                ...state,
                loginData:
                    action.payload && action.payload.loginData
                        ? action.payload.loginData
                        : {},
            };
        default:
            return {
                ...state,
            };
    }
}

export const reducer = ApptizerReducers;
