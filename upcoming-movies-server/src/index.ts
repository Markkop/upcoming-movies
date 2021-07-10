import express from 'express'
import path from 'path'
import logger from 'morgan'
import cors from 'cors'
import movies from './routes/movies'
import middlewares from './middlewares'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080

try {
  const app = express()

  app.use(cors())
  app.use(logger('dev'))
  app.use(express.json())

  app.use('/movies', movies)

  app.use(middlewares.notFound)
  app.use(middlewares.errorHandler)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
  })
} catch (error) {
  console.error(error)
}