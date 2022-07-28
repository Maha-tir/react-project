import actions from "./actions";

const initialState = {
    bot_expired_at:null,
    bot_expired_month:null,
    bot_price:null,
    address:null,
    currency_id:null,
    plugin_id:null,
    loading: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
