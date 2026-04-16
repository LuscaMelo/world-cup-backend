import { Router } from 'express'
import { globalSearch } from '../controllers/searchController';

const router = Router()

router.get('/search', globalSearch)

export default router