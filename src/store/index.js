import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import todoSaga from './saga';

// thunk中间件使得redux的action可以为一个函数
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

// 添加redux-thunk中间件
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// );

const store = createStore(
    reducer, 
    enhancer
);
sagaMiddleware.run(todoSaga);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 使Chrome redux插件生效

export default store;