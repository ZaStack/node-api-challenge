const express = require('express')
const server = express();
server.use(express.json())

const projectsRouter = require('./routers/projectsRouter')
const actionsRouter = require('./routers/actionsRouter')

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: "I'll be damned, a working server."})
})

module.exports = server