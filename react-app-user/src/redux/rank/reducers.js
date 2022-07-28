import actions from "./actions";

const initialState = {
    id:null,
    name:null,
    rule_frontline:null,
    rule_downline:null,
    rule_one_level_below:null,
    rule_one_level_below_node:null,
    bonus_direct:null,
    bonus_pass_up:null,
    bonus_peer:null,
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
