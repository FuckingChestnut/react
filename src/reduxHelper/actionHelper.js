import {createAction} from 'redux-actions'

const fetchOption = {
    method: 'POST'
}
const text = response => {
    return response.text().then(resolve => {
        return resolve
    })
}

// apiOption = {
//     url: 'http://www.baidu.com',
//     method: 'jsonp'
// }
export const createApiAction = (actionName, apiOption) => {
    const payloadCreator = (...args) => {
        return {
            INFO_TYPE: 'API',
            INFO_OPTION: apiOption,
            args
        };
    };
    const metaCreator = (...args) => {
        return args;
    };
    return createAction(actionName, payloadCreator, metaCreator);
};

export const createNormalAction = (inputType) => {
    const payloadCreator = (...args) => {

    }
    const metaCreator = (...args) => {

    }
    createAction('alert', payloadCreator, metaCreator);
}