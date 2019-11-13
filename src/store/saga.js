import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType';
import { initListAction } from './actionCreator';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('./todolist.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (error) {
        
    }

    // axios.get('./todolist.json')
    //         .then((res) => {
    //             const data = res.data;
    //             const action = initListAction(data);
    //             console.log(action);
    //             put(action);
    //         });
}

// ES generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;