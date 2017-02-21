import { createAction } from 'redux-actions'

import 'whatwg-fetch'

/**
 * the third packaging
 * request success callback creator
 */
const resolveCallbackCreator = (resolveCallback, rejectCallback) => {
  return (response) => {
    if (response.status === 200) {
      resolveCallback(response);
    } else {
      rejectCallback(response);
    }
  }
}
//request fail callback
const rejectCallback = (error) => {
  console.warn(error);
  return false;
}

//promise object creator
export const apiCreator = (inputUrl, fetchOption = {}) => {
  return (resolve, reject) => {
    const tempPromise = fetch(inputUrl, fetchOption);
    tempPromise.then(resolve, reject);
    return tempPromise;
  }
}

// create an action which payload attribute is a promise object
export const createPromiseAction = (actionType, inputAPI) => {
  const payloadCreator = (...argus) => {
    const resolveCallback = (response) => {
      return response;
    }
    const tempPromise = inputAPI(resolveCallback, rejectCallback);
    return tempPromise;
  }
  const metaCreator = (...argus) => {
    return argus;
  }
  const tempAction = createAction(actionType, payloadCreator, metaCreator)
  return tempAction;
}

// example
// const tempApi = apiCreator("http://www.baidu.com");
// const tempPromiseAction = createPromiseAction("getInformation", tempApi);
