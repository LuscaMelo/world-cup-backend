import { Router } from 'express'
import groupController from '../controllers/groupController.js'

const router = Router()

router.get('/groups', groupController.getGroups)

export default router