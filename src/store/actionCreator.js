import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionType";
import axios from 'axios';


// 使用actionCreator统一创建action
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
});

export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM,
    value: value
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    list: data
});

// 返回一个函数
// export const getTodoList = () => {
//     // 会自动接收dispatch这个函数作为参数
//     return (dispatch) => {
//         axios.get('./todolist.json')
//             .then((res) => {
//                 const data = res.data;

//                 const action = initListAction(data);
//                 dispatch(action); 

//                 // console.log(data);
//                 // const action = initListAction(data);
//                 // console.log(action);
//                 // store.dispatch(action);
//             });
//     }
// }

export const getInitList = () => ({
    type: GET_INIT_LIST
})