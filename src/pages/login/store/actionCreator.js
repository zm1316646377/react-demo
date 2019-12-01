import axios from 'axios';
import { actionTypes } from './';

export const createLoginAction = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
        .then((res) => {
            dispatch(createChangeLoginAction());
        }).catch((err) => {

        });
    }
};
 
export const createLogoutAction = () => ({
    type: actionTypes.LOGOUT_ACTION,
    value: false
});

const createChangeLoginAction = () => ({
    type: actionTypes.CHANGE_LOGIN_ACTION,
    value: true
});