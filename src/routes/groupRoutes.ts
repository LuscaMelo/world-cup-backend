import { Router } from 'express'
import groupController from '../controllers/groupController'

const router = Router()

router.get('/groups', groupController.getGroups)
router.get('/groups/featured', groupController.getFeaturedGroups)

export default router