import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store'

import * as serviceWorker from './serviceWorker';


const App = (
    // Provider 帮助将store提供给子组件
    <Provider store = {store}>
        <TodoList/>
    </Provider>
);

// 将<TodoList>挂载到root节点下，root节点为public/index.html的id为root的元素，
// public/index.html是工程的模版文件
ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
