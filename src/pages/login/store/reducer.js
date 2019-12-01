import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
    login: false,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN_ACTION:
            return state.set('login', action.value);
        case actionTypes.LOGOUT_ACTION:
            return state.set('login', action.value);
        default:
             return state;
    }
}