import express from 'express'
import groupRoutes from './routes/groupRoutes'
import teamRoutes from './routes/teamRoutes'
import playerRoutes from './routes/playerRoutes'
import countryRoutes from './routes/countryRoutes'

const app = express()

app.use(express.json())
app.use(groupRoutes)
app.use(teamRoutes)
app.use(playerRoutes)
app.use(countryRoutes)

app.get('/', (req, res) => {
  res.send('World Cup API')
})

export default app