import { Router } from 'express'
import galleryController from '../controllers/galleryController'

const router = Router()

router.get('/gallery', galleryController.getGalleryImages)

export default router