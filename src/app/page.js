"use client";

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CardMovie from './components/CardMovie';
const ApiKey=process.env.NEXT_PUBLIC_API_KEY;
const Home = () => {
  const [movies,setMovies]=useState([]);
  const searchParam=useSearchParams();
  const genre=searchParam.get('genre') 
  const fetchMovies=()=>{
    
    axios.get(`https://api.themoviedb.org/3/${genre==='fetchTrending'?`trending/movie/week`:`movie/top_rated`}?api_key=${ApiKey}`).then((response)=>{
      setMovies(response.data.results);
      console.log(response.data.results)
    }).catch((error)=>console.error(error))
  }
  useEffect(()=>{
     fetchMovies();
  },[genre])
  return (
    <div className='grid grid-cols-4 space-x-5 space-y-2'>
      {
        movies.map((movie)=>{
          return(
           <div key={movie.id}>
             <CardMovie image={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
             }`}
             title={movie.original_title}
             description={movie.overview.slice(0,100)}
             likes={movie.vote_count}
             date={movie.release_date}
             />
              
           </div> 
          );
        })
      }
     
    </div>
  )
}

export default Home