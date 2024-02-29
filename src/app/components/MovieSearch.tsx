"use client";
import { useState } from "react";
import { searchMovies } from "../services/movie.service";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    await searchMovies(query).then((response) => {
      setMovies(response);
    });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie: IMovie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
