import { Request, Response } from "express"

function notFound (request: Request, response: Response) {
  response.status(404).json({
    message: `Not Found - ${request.originalUrl}`
  })
}

function errorHandler (error: Error, request: Request, response: Response) {
  response.status(505).json({
    message: error.message,
    stack: error.stack
  })
}

export default {
  notFound,
  errorHandler
}