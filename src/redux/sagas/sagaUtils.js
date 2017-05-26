import { call, put } from 'redux-saga/effects';

import fetchHelper from 'src/reduxHelper/fetchHelper';

function* fetchAction(action) {
    const nextAction = yield call(fetchHelper, action);
    yield put(nextAction);
    return nextAction;
}

export default { fetchAction };
