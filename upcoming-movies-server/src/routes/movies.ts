import express from 'express'
import moviesController from '../controllers/movies'

const router = express.Router()
router.get('/list', moviesController.list)

export default router