import axios from "axios";
import { apiKey } from "../../../api";

export const getCrew = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch movie details: ${error.message}`);
    throw error;
  }
};
