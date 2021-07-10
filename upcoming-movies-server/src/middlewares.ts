function notFound (request, response) {
  response.status(404).json({
    message: `Not Found - ${request.originalUrl}`
  })
}

function errorHandler (error, _, response) {
  response.status(505).json({
    message: error.message,
    stack: error.stack
  })
}

export default {
  notFound,
  errorHandler
}