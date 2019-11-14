import React, { Component } from 'react';
import store from './store/index.js';
import { connect } from 'react-redux'

// 无状态组件 没有生命周期函数 可以提高性能
const TodoList = function(props) {
    const { inputValue, list, changeInputValue, handleBtnClick, handleDelete} = props;

    return (
        <div>
                <div>
                    <input value = { inputValue } onChange = { changeInputValue }/>
                    <button onClick = { handleBtnClick }>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key = {index} onClick = {() => { handleDelete(index)} }>{item}</li>
                        })
                    }
                </ul>
            </div>
    );
}

// class TodoList extends Component {
    
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { inputValue, list, changeInputValue, handleBtnClick, handleDelete} = this.props;

//         return (
//             <div>
//                 <div>
//                     <input value = { inputValue } onChange = { changeInputValue }/>
//                     <button onClick = { handleBtnClick }>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li key = {index} onClick = {() => { handleDelete(index)} }>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// 将store中的数据映射到组件的props里
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(event) {
            const action = {
                type: 'change_input_value',
                value: event.target.value
            };
            dispatch(action);
        },
        handleBtnClick() {
            const action = {
                type: 'add_todo_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_todo_item',
                index: index
            };
            dispatch(action);
        }
    }
}

// 连接Provider connect 传递UI组件 返回的是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;