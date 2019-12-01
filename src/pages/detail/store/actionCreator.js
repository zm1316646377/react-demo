import axios from 'axios';
import { actionTypes } from './';

export const createGetDetailDataAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
        .then((res) => {
            const result = res.data.data;
            const action = createSetDetailDataAction(result);
            dispatch(action);
        })
        .catch((err) => {

        });
    }
}

const createSetDetailDataAction = (data) => ({
    type: actionTypes.SET_DETAIL_DATA,
    title: data.title,
    content: data.content
})