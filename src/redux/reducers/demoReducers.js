import {handleActions} from 'redux-actions'
import immutable from 'immutable'

const initState = immutable.fromJS({
    name: 'pengchuan'
});
export default handleActions({
    alert: (state, action) => {
        console.log('this is alert.', action);
        return state;
    },
    alert_SUCCESS: (state, action) => {
        console.log('this is alert_success.', action);
        return state;
    },
    alert_FAIL: (state, action) => {
        console.log('this is alert_fail.', action);
        return state;
    }
}, initState);