import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreator';
import TodoListUI from './AntTodoListUI';
import axios from 'axios';

// 容器组件 
class AntTodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // 订阅store
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}/>
        )
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);

        // 添加了thunk中间件， 可以在action中请求数据
        // const action = getTodoList();
        // console.log(action)
        // store.dispatch(action);

        // axios.get('./todolist.json')
        //     .then((res) => {
        //         const data = res.data;
        //         const action = initListAction(data);
        //         console.log(action);
        //         store.dispatch(action);
        //     });
    }

    handleInputChange(event) {
        // 手动设置action
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: event.target.value
        // };

        // 使用actionCreator获得action
        const action = getInputChangeAction(event.target.value); 

        // 将action分发到store
        store.dispatch(action);
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM,
        //     value: this.state.inputValue
        // }

        const action = getAddItemAction(this.state.inputValue);
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index: index
        // };
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default AntTodoList;