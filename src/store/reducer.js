// reducer: 负责管理数据
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType';

const defaultState = {
    inputValue: '123',
    // list: ['jenny', 'kathy']
    list: []
}

// reducer可以接收state， 但是不能修改state

// state: store里上一次的state
export default (state = defaultState, action) => {
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    } 
    
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(action.value);
        // newState.list = [...newState.list, action.value];
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    console.log(state, action);
    return state;
}