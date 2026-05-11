import { Router } from 'express'
import playerController from '../controllers/playerController';

const router = Router()

router.get('/players', playerController.getPlayers)
router.get("/players/featured", playerController.getFeaturedPlayers)
router.get("/players/slug/:slug", playerController.getPlayerBySlug);

export default router