import axios from "axios";

const client = axios.create({
  baseURL: process.env.IMDB_API_URL,
  params: {
    api_key: process.env.IMDB_API_KEY,
  },
});

export const searchMovies = async (query: string) => {
  try {
    const response = await client.get("/search/movie", {
      params: {
        query,
      },
    });
    if (response.data && response.data.results) {
      return response.data.results;
    }
    console.log("Could not find any movies");
  } catch (error) {
    console.log(error);
    return [];
  }
};
