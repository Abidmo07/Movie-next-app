"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ApiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}`
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (movieId) {
      handleMovieDetails();
    }
  }, [movieId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {loading ? (
        <div className="animate-pulse w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="mt-4 h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="mt-2 h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        </div>
      ) : movie ? (
        <div className="max-w-4xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow-lg">
          {/* Movie Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-96 object-cover rounded-md"
          />

          {/* Movie Info */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Released: {movie.release_date}
            </p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-xl font-bold">{movie.vote_average.toFixed(1)}</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                ({movie.vote_count} votes)
              </span>
            </div>

            {/* Overview */}
            <p className="mt-4 text-gray-700 dark:text-gray-300">{movie.overview}</p>

            {/* Genres */}
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-xl">Movie not found.</p>
      )}
    </div>
  );
}
