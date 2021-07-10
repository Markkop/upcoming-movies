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

  const clientDistPath = path.join(__dirname, '..', '..', 'upcoming-movies-client', 'build')
  app.use(express.static(path.join(clientDistPath)))
  app.get('/', function (request, response) {
    response.sendFile(path.join(clientDistPath, 'index.html'))
  })

  app.get('/favicon.svg', function (request, response) {
    response.sendFile(path.join(clientDistPath, 'favicon.svg'))
  })

  app.use('/movies', movies)

  app.use(middlewares.notFound)
  app.use(middlewares.errorHandler)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
  })
} catch (error) {
  console.error(error)
}