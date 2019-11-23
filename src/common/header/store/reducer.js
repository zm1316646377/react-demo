// import { CHANGE_FOCUSED_VALUE_ACTION } from './actionTypes';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// state封装成immutable对象
const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if (action.type === actionTypes.CHANGE_FOCUSED_VALUE_ACTION) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = action.focused;
        // return newState;
        // return {
        //     focused: action.focused
        // }
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', action.focused);
    } 

    return state;
}