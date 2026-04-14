import express from 'express'
import groupRoutes from './routes/groupRoutes'
import teamRoutes from './routes/teamRoutes'
import playerRoutes from './routes/playerRoutes'

const app = express()

app.use(express.json())
app.use(groupRoutes)
app.use(teamRoutes)
app.use(playerRoutes)

app.get('/', (req, res) => {
  res.send('World Cup API')
})

export default app