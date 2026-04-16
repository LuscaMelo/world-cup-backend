import { Router } from 'express'
import teamController from '../controllers/teamController'

const router = Router()

router.get('/teams', teamController.getTeams)
router.get('/teams/featured', teamController.getFeaturedTeams)

export default router