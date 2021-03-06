import actions from "./actions";

const initialState = {
    token:null,
    refresh_token:null,
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
