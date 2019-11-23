// import { CHANGE_FOCUSED_VALUE_ACTION } from './actionTypes';
import * as actionTypes from './actionTypes';

export const changeSearchFocusedAction = (focused) => {
    return {
        type: actionTypes.CHANGE_FOCUSED_VALUE_ACTION,
        focused: focused
    }
}
