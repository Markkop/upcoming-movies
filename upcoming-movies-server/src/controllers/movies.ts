import { NextFunction, Request, Response } from 'express'
import moviesService from '../services/movies'

async function list (request: Request, response: Response, next: NextFunction) {
  try {
    const movies = await moviesService.getUpcoming()
    response.json({
      status: 'success',
      message: 'Upcoming movies list has been acquired.',
      data: { list: movies }
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default {
  list
}