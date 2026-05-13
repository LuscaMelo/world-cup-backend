import { Router } from 'express'
import teamController from '../controllers/teamController'

const router = Router()

router.get('/teams', teamController.getTeams)
router.get('/teams/featured', teamController.getFeaturedTeams)
router.get("/teams/slug/:slug", teamController.getTeamBySlug);

export default router