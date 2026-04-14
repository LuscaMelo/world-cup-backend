import { Router } from 'express'
import stadiumController from '../controllers/stadiumController'

const router = Router()

router.get('/stadiums', stadiumController.getStadiums)

export default router