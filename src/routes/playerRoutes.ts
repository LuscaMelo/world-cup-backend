import { Router } from 'express'
import playerController from '../controllers/playerController'

const router = Router()

router.get('/players', playerController.getPlayers)
router.get("/players/:id", playerController.getPlayerById);

export default router