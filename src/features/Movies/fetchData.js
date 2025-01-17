import { apiKey } from "../../api";

export const fetchPopularMovies = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch popular movies: ${response.statusText}`);
    }
    const data = await response.json();

    if (!data || !data.results || !data.total_pages) {
      throw new Error("Invalid API response");
    }
    console.log("API data:", data);

    return {
      results: data.results,
      total_pages: data.total_pages,
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error(`Error fetching movies: ${error.message}`);
  }
};
