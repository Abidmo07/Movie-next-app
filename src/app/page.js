"use client";

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CardMovie from './components/CardMovie';
import Link from 'next/link';

const ApiKey = process.env.NEXT_PUBLIC_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchParam = useSearchParams();
  const genre = searchParam.get('genre') || 'fetchTrending';
  const [loading, setLoading] = useState(false);

  const fetchMovies = () => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/${genre === 'fetchTrending' ? 'trending/movie/week' : 'movie/top_rated'}?api_key=${ApiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false)); 
  };

  useEffect(() => {
    fetchMovies();
  }, [genre]);

  return (
    <div className="min-h-screen p-6 transition-colors duration-300 dark:bg-gray-900 bg-white dark:text-white text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6">Trending & Top Rated Movies</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link href={`movie/${movie.id}`} key={movie.id} className="rounded-lg p-4 shadow-md transition transform hover:scale-105 
                dark:bg-gray-800 bg-gray-200">
              <CardMovie
                image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                title={movie.original_title}
                description={movie.overview.slice(0, 100) + "..."}
                likes={movie.vote_count}
                date={movie.release_date}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
