const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router()
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/classList', (req, res) => {
    const result = require('./resource/classList')
    res.json(result);
    res.end()
});

server.use('/classDetail', (req, res) => {
    const result = require('./resource/classDetail')
    res.json(result);
    res.end()
});

server.use(router)

server.listen(3000, () => {
    console.log(
        'Mock server is running on http://localhost:3000',
        '\n-----------------------------------------------'
    )
})
