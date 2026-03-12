import express from 'express'
import groupRoutes from './routes/groupRoutes.js'
import teamRoutes from './routes/teamRoutes.js'
import playerRoutes from './routes/playerRoutes.js'

const app = express()

app.use(express.json())
app.use(groupRoutes)
app.use(teamRoutes)
app.use(playerRoutes)

app.get('/', (req, res) => {
  res.send('Initial endpoint')
})

export default app