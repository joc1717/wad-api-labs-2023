export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c16c9e10d72369ab8a4f80688e22baa1&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };