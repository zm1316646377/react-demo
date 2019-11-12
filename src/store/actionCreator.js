import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionType";

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