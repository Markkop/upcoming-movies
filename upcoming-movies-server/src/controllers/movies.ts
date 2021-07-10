import moviesService from '../services/movies'

async function list (_, response, next) {
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