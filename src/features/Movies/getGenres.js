import axios from "axios";
import { apiKey } from "../../api";

export const getGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie genres: ${error.message}`);
    throw error(`Error fetching movie genres: ${error.message}`);
  }
};
