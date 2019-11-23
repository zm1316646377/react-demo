//  import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
 import { reducer as headerReducer } from '../common/header/store';

//  将全局的store对象封装成immutable对象
const reducer = combineReducers({
    header: headerReducer
});

 export default reducer;