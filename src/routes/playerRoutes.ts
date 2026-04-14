import { Router } from 'express'
import playerController from '../controllers/playerController.js'

const router = Router()

router.get('/players', playerController.getPlayers)

export default router