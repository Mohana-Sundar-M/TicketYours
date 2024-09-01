

const apiEndpoints = {
    getMoviesByCity: (cityId: string) => `/v1/movies/city/${cityId}`,
    getCities: '/v1/cities',  
   
  };
  
  export default apiEndpoints;
  