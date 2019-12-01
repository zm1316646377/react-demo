import axios from 'axios';
import { fromJS } from 'immutable';
import { actionTypes } from './';

export const createGetHomeDataAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            const data = res.data.data;
            const action = createSetHomeDataAction(data);
            dispatch(action);
        }).catch((err) => {
            
        });
    }
}

export const createLoadMoreListAction = (page) => {
    return (dispatch) => {
        axios.get('/api/moreList.json?page=' + page)
            .then((res) => {
                const data = res.data.data;
                const action = createAddArticleListAction(data, page + 1);
                dispatch(action);
            }).catch((err) => {

            });
    }
}

export const createToggleTopShowAction = (value) => ({
    type: actionTypes.TOGGLE_TOP_SHOW_ACTION,
    value: value
})

const createSetHomeDataAction = (data) => {
    return {
        type: actionTypes.SET_HOME_DATA_ACTION,
        topicList: fromJS(data.topicList),
        articleList: fromJS(data.articleList),
        recommendList: fromJS(data.recommendList)
    }
}

const createAddArticleListAction = (data, nextPage) => {
    return {
        type: actionTypes.ADD_ARTICLE_LIST_ACTION,
        articleList: fromJS(data),
        page: nextPage
    }
}