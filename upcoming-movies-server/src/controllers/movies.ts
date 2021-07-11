import { NextFunction, Request, Response } from 'express'
import moviesService from '../services/movies'

async function upcoming (request: Request, response: Response, next: NextFunction) {
  try {
    const requestPage = request.query.page || 1
    const { list, totalPages, page } = await moviesService.getUpcoming(Number(requestPage))
    response.json({
      status: 'success',
      message: 'Upcoming movies list has been acquired.',
      data: { 
        list,
        totalPages,
        page
      }
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

async function search (request: Request, response: Response, next: NextFunction) {
  try {
    const requestPage = request.query.page || 1
    const query = request.query.query
    const { list, totalPages, page } = await moviesService.findMovies(String(query), Number(requestPage))
    response.json({
      status: 'success',
      message: 'Movies found',
      data: { 
        list,
        totalPages,
        page
      }
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default {
  upcoming,
  search
}