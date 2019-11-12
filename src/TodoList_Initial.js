// 第一章到第四章的内容

import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem_Initial';
import axios from 'axios'; // HTTP库


// import {TodoItem1} from './TodoItem';

// import Test from './Test';

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
        // 给事件处理方法绑定this，函数内的this指向TodoList组件
        // 不在控件上绑定是因为会降低性能
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            // Fragment ：react占位符， 包裹return内的标签，
            // 但是在渲染UI的时候不会不会额外添加标签，就是Fragment之间的内容
            <Fragment>
                <div>
                    {
                        // JSX注释格式
                    }
                    {/* JSX注释格式 */} 
                    <label htmlFor = 'insertArea'>输入内容:</label>
                    <input
                        id = 'insertArea'
                        className = 'input'
                        value = {this.state.inputValue} 
                        onChange={this.handleInputChange} />
                        {/* ref={(input) => {this.input = input}}/> React 不推荐使用ref引用 */}
                    <button onClick = {this.handleBtnClick}>提交</button>
                </div>
                {/* <ul ref={(ul) => {this.ul = ul}}> */}
                <ul>
                    {
                        this.getTodoItem()
                        // this.state.list.map((item, index) => {
                        //     return (
                        //         <TodoItem 
                        //             content = {item} 
                        //             index = {index}
                        //             deleteItem = {this.handleItemDelete}/>

                        //         // <li key = {index} 
                        //         //     onClick = {this.handleItemDelete.bind(this, index)}
                        //         //     // 外部的大括号代表js表达式，里面的打括号代表一个js对象, 不转义html标签
                        //         //     dangerouslySetInnerHTML={{__html:item}}>
                        //         // </li>
                        //     )
                        // })
                    }
                </ul>
                {/* <Test content = {this.state.inputValue} /> */}
            </Fragment>
        )
    }

    // 一般将ajax请求放在componentDidMount里，可以使用charles模拟数据请求，charles配置查看note.txt
    // componentDidMount() {
    //     axios.get('/api/todolist')
    //     .then((res) => {
    //         this.setState(() => ({
    //             list: [...res.data]
    //         }));
    //     }).catch(() => {
    //         alert('error')
    //     });
    // }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                // 不要用index作为key, 不稳定，不能代表元素
                <TodoItem 
                    key={index}
                    content = {item} 
                    index = {index}
                    deleteItem = {this.handleItemDelete}/>
            )
        })
    }

    handleInputChange(event) {
        const value = event.target.value;
        // const value = this.input.value; input元素加了ref之后使用这种方式获取value
        this.setState(() => (
            {
                inputValue: value
            }
        ));

        // this.setState(() => {
        //     return {
        //         inputValue: event.target.value
        //     }
        // });

        // this.setState({
        //     inputValue: event.target.value
        // });
    }

    handleBtnClick() {
        this.setState((prevState) => (
            {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        ), () => {
            // console.log(this.ul.querySelectorAll('div').length);
        });

        // console.log(this.ul.querySelectorAll('div').length);
        // this.setState({
        //     // ... 展开运算符
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // });
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list: list
            }
        });

        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // });
    }
}

export default TodoList;