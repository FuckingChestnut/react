/* eslint-disable no-console */
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    classList: [],
    classDetail: null,
});
export default handleActions({
    // 获取班级列表
    fetchClassList_SUCCESS: (state, action) => {
        console.log('this is fetchClassList_SUCCESS.');
        return state.set('classList', action.payload);
    },
    // 获取班级详情
    fetchClassDetail_SUCCESS: (state, action) => {
        console.log('this is fetchClassDetail_SUCCESS.');
        return state.set('classDetail', action.payload);
    },
}, initState);
