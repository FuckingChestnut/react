import fetchJsonp from 'fetch-jsonp'

const isApiAction = value => value.payload.INFO_TYPE === 'API';
const fetchJsonpOption = {
    timeout: 5000,
    jsonpCallback: 'callback'
}

export default ({dispatch}) => {
    return (next) => {
        return (action) => {
            if (!isApiAction(action)) {
                return next(action)
            }
            const actionName = action.type
            const actionMeta = action.meta
            const actionOption = action.payload.INFO_OPTION
            action.payload = fetchJsonp(actionOption.url, fetchJsonpOption)
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