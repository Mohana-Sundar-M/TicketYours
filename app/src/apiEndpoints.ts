const apiEndpoints = {
  getMoviesByCity: (cityId: string) => `/v1/movies/city/${cityId}`,
  getCities: '/v1/cities',
  getCinemahallsByCity: (cityId: string) => `/v1/cinemahall/${cityId}`,
  getCinemahallsByCityAndMovie: (cityId: string, movieId: string) => `/v1/cinemahall/${cityId}/movies/${movieId}`,
  getMoviesByCinemaHall: (cinemaHallId: string) => `/v1/movies/cinemahall/${cinemaHallId}`,
  getMovieDetails: (movieId: string) => `/v1/movies/moviedetail/${movieId}`,
  getShowtimesByScreen: (screenId: string) => `/v1/showtimes/${screenId}`,
  getShowtimesByDate: (screenId: string, date: string) => `/v1/showtimesbydate/${screenId}?date=${date}`,
  getAvailableShowtimes: (movieId: string, cityId: string) => `/v1/showtimes/${movieId}/city/${cityId}/availableShowtimes`,
  getCinemahallsWithShowtimes: (movieId: string, cityId: string) =>
    `/v1/showtimes/${movieId}/city/${cityId}/cinemahallswithselectedquery`,
  getScreensByCinemaHall: (cinemaHallId: string) => `/v1/cinemahall/screen/${cinemaHallId}`,
  getTheatreLayout: (showtimeId: string, screenId: string) => `/v1/get-theatre-layout/${showtimeId}/screen/${screenId}`,
  requestOtp: '/v1/requestotp', // Endpoint to send OTP to mobile number
  verifyOtp: '/v1/verifyotp', // Endpoint to verify the OTP
};

export default apiEndpoints;
