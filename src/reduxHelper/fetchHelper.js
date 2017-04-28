import queryString from 'query-string'

const mixinUrl = (inputUrl, inputObject) => {
    if (!inputObject) {
        return inputUrl
    }
    const hasMark = !!location.search
    const parameters = queryString.stringify(inputObject)
    return `${inputUrl}${hasMark ? '&' : '?'}${parameters}`
}

export default (requestOption, requestData) => {
    let tempUrl
    const {url} = requestOption
    switch (requestOption.method) {
        case 'get':
            tempUrl = mixinUrl(url, requestData)
            break
    }
    return fetch(tempUrl, requestOption)
}