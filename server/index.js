import express from 'express'
import cors from 'cors'
import { PORT } from './config/env.js'
import indexRoutes from './routes/index.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use(indexRoutes)
app.use(tasksRoutes)

app.listen(PORT,()=>{
    console.log('server on port',PORT)
})