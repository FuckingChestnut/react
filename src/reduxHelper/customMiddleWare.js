import fetchHelper from './fetchHelper'

const isApiAction = value => value.payload.INFO_TYPE === 'API';

export default ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (!isApiAction(action)) {
                return next(action)
            }
            const actionName = action.type
            const actionMeta = action.meta
            const {INFO_DATA, INFO_OPTION} = action.payload
            action.payload = fetchHelper( INFO_OPTION, INFO_DATA)
                .then(response => {
                    // 状态码判断
                    console.log(response)
                    return response
                })
                .then(response => {
                    return response.json();
                })
                .then(resolve => {
                    console.info('resolve', resolve);
                    dispatch({
                        type: `${actionName}_SUCCESS`,
                        payload: resolve,
                        meta: actionMeta
                    })
                })
                .catch(error => {
                    console.info('reject', error);
                    dispatch({
                        type: `${actionName}_FAIL`,
                        payload: error,
                        meta: actionMeta
                    })
                })
            return next(action)
        }
    }
}