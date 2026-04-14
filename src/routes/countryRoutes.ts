import { Router } from 'express'
import countryController from '../controllers/countryController'

const router = Router()

router.get('/countries', countryController.getCountries)

export default router