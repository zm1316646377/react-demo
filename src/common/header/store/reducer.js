import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// state封装成immutable对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_FOCUSED_VALUE_ACTION:
            // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
            return state.set('focused', action.focused);
        case actionTypes.CHANGE_TRENDING_SEARCH_LIST:
            return state.merge({
                list: action.list,
                totalPage: action.totalPage
            });
            // return state.set('list', action.list).set('totalPage', action.totalPage);
        case actionTypes.CHANGE_MOUSE_ENTER_ACTION:
            return state.set('mouseIn', action.mouseIn);
        case actionTypes.CHANGE_PAGE_ACTION:
            let page = state.get('page') + 1;
            if (page > state.get('totalPage')) {
                page = 1;
            }
            return state.set('page', page)
        default:
            return state;
    }
}