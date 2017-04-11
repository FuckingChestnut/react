const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router()
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/json', (req, res) => {
    // delay(1000)
    const result = {name: 'pengchuan'}
    res.jsonp(result)
    res.end()
})

server.use('/string', (req, res) => {
    // delay(1000)
    const result = 123
    res.jsonp(result)
    res.end()
})

server.use(router)

server.listen(3000, () => {
    console.log('JSON server in running on http://localhost:3000')
})

const delay = ms => {
    const target = Date.now() + ms
    while (target > Date.now()) {
    }
}
