import axios from "axios";

const baseURL = "https://yts.mx/api/v2/list_movies.json?quality=3D	"

export const fetchMovieList = () => axios.get(baseURL)