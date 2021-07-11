import express from 'express'
import moviesController from '../controllers/movies'

const router = express.Router()
router.get('/upcoming', moviesController.upcoming)
router.get('/search', moviesController.search)

export default router