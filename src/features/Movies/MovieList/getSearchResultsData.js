import axios from "axios";
import { apiKey } from "../../../api";

export const getSearchResults = async (page, searchQuery) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${page}&api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch search results: ${error.message}`);
        throw error;
    }
};