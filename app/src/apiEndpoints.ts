const apiEndpoints = {
  getMoviesByCity: (cityId: string) => `/v1/movies/city/${cityId}`,
  getCities: '/v1/cities',  
  getCinemahallsByCity: (cityId: string) => `/v1/cinemahall/${cityId}`,
  getCinemahallsByCityAndMovie: (cityId: string, movieId: string) => `/v1/cinemahall/${cityId}/movies/${movieId}`,
  getMoviesByCinemaHall: (cinemaHallId: string) => `/v1/movies/cinemahall/${cinemaHallId}`,
  getMovieDetails: (movieId: string) => `/v1/movies/moviedetail/${movieId}`, // New endpoint
};

export default apiEndpoints;
