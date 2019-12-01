import { actionTypes } from './';
import { fromJS } from 'immutable';

// state封装成immutable对象
const defaultState = fromJS({
    title: '',
	content: ''
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_DETAIL_DATA:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default:
            return state;
    }
}