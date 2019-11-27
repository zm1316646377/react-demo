import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const createChangeSearchFocusedAction = (focused) => {
    return {
        type: actionTypes.CHANGE_FOCUSED_VALUE_ACTION,
        focused: focused
    }
}

export const createGetTrendingSearchListAction = () => {
    return (dispatch) => {
        // 会从 public/api/headerList.json中获取数据
        axios.get('/api/headerlist.json')
        .then((res) => {
            const data = res.data;
            const action = createChangeTrendingSearchListAction(data.data);
            dispatch(action);
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const createChangeMouseEnterAction = (value) => ({
    type: actionTypes.CHANGE_MOUSE_ENTER_ACTION,
    mouseIn: value
});

export const createChangePageAction = () => ({
    type: actionTypes.CHANGE_PAGE_ACTION
});

const createChangeTrendingSearchListAction = (data) => ({
    type: actionTypes.CHANGE_TRENDING_SEARCH_LIST,
    list: fromJS(data),
    totalPage: Math.ceil(data.length / 6)
});
