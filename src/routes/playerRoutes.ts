import { Router } from 'express'
import playerController from '../controllers/playerController';

const router = Router()

router.get('/players', playerController.getPlayers)
router.get("/players/featured", playerController.getFeaturedPlayers)
router.get("/players/:id", playerController.getPlayerById);

export default router