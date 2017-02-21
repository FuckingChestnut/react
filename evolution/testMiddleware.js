import 'whatwg-fetch'

export default () => {
  return (next) => {
    return (action) => {
      const payload = action.payload
      const API = payload[REST_API]
      const { endpoint, headers } = API
      const { method, body } = API
      const api = fetch(config.server + endpoint, {
        method,
        body,
        headers,
        ...config.credentials
      })
      const parseJSON = response =>
        response.text().then((text) => {
          const contentType = response.headers.get('content-type')
          if (text && contentType && contentType.indexOf('application/json') >= 0) {
            return JSON.parse(text)
          }
          return text
        })
      const checkStatus = (response) => {
        if (response.status === 200) {
          return parseJSON(response)
        }
        return response.text().then(
          (text) => {
            const error = text ? JSON.parse(text) : {}
            return Promise.reject({ ...error, status: response.status })
          }
        )
      }
      return next({
        ...action,
        payload: api.then(checkStatus),
        meta: {
          ...action.meta,
          API_ACTION: { ...API, API_REQUEST_START: true }
        }
      })
    }
  }
}