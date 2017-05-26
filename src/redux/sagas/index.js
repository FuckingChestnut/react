/* eslint-disable no-console,consistent-return,no-param-reassign */
import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

import fetchAction from 'src/redux/sagas/sagaUtils';
import * as mainActions from 'src/redux/actions/mainActions';

function* fetchClassList() {
    const action = yield takeEvery('fetchClassList');
    const nextAction = yield call(fetchAction, action);
    if (nextAction.payload instanceof Error) {
        return;
    }
    yield put(mainActions.fetchClassDetail(nextAction.payload));
}

function* fetchClassDetail() {
    const action = yield takeEvery('fetchClassDetail');
    yield call(fetchAction, action);
}

export default function* sagas() {
    yield all([
        fork(fetchClassList),
        fork(fetchClassDetail),
    ]);
}
