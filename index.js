import express from 'express';
import projectsRouter from './routes/projects.routes.js'
import projectsRouterAPI from './api/routes/projects-api.routes.js'
import clientsRouterAPI from './api/routes/clients-api.routes.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use('/api', express.json())

app.use('/', projectsRouter)
app.use('/api', projectsRouterAPI)
app.use('/api', clientsRouterAPI)


app.listen(2222)