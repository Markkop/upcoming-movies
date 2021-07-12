import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.join(__dirname,'..','..', '.env'),
})
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import movies from './routes/movies'
import middlewares from './middlewares'

const PORT = process.env.PORT || 8080

try {
  const app = express()

  app.use(cors())
  app.use(logger('dev'))
  app.use(express.json())

  const clientDistPath = path.join(__dirname, '..', '..', 'upcoming-movies-client', 'build')
  app.use(express.static(path.join(clientDistPath)))
  app.get('/', function (request, response) {
    if (process.env.DEV_SERVER) {
      response.status(200).send('Ok')
    }
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