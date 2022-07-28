import actions from "./actions";

const initialState = {
    country:null,
    country_name:null,
    created_at:null,
    email:null,
    full_name:null,
    id:null,
    jwt_expired_at:null,
    phone:null,
    status:null,
    timezone:null,
    timezone_offset:null,
    username:null,
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
