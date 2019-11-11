import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
import App from './App';
import * as serviceWorker from './serviceWorker';


// 将<TodoList>挂载到root节点下，root节点为public/index.html的id为root的元素，
// public/index.html是工程的模版文件
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
