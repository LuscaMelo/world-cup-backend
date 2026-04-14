import { Router } from 'express'
import teamController from '../controllers/teamController.js'

const router = Router()

router.get('/teams', teamController.getTeams)

export default router