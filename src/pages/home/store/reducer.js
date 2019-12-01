import { actionTypes } from './';
import { fromJS } from 'immutable';

// state封装成immutable对象
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.SET_HOME_DATA_ACTION:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList
            });
        case actionTypes.ADD_ARTICLE_LIST_ACTION:
            return state.merge({
                articleList: state.get('articleList').concat(action.articleList),
                articlePage: action.page
            });
        case actionTypes.TOGGLE_TOP_SHOW_ACTION:
            return state.set('showScroll', action.value);
        default:
            return state;
    }
}