import { apiKey, apiUrl } from "../../api";

export const fetchPopularPeople = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch popular people: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data || !data.results) {
      throw new Error("Invalid API response");
    }
    return {
      results: data.results,
      total_results: data.total_results, // make sure the API returns this
      total_pages: data.total_pages,
    };
  } catch (error) {
    console.error("Error fetching people:", error);
    throw new Error(`Error fetching people: ${error.message}`);
  }
};
