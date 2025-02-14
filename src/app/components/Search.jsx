"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"; // React Icons
import { useRouter } from "next/navigation";
const ApiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function Search() {
    const [search,setSearch]=useState("");
    const [results, setResults] = useState([]);
    const router=useRouter();
    const handleSearch=()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${ApiKey}`).then((response)=>{
            console.log(response.data.results);
            setResults(response.data.results);
        }).catch((error)=>console.error(error))
    }
    useEffect(()=>{
       handleSearch();
    },[search])
  return (

    <div className="relative w-full max-w-lg mx-auto  ">
      {/* Search Input */}
      <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full p-2 shadow-md focus-within:ring-2 focus-within:ring-blue-500">
        <AiOutlineSearch className="h-5 w-5 text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 outline-none px-3"
          onChange={(e)=>{
             setSearch(e.target.value)
          }}
          value={search}
        />
        <button onClick={()=>{
            setSearch("");
        }} className="text-gray-500 mr-2">
          <AiOutlineClose className="h-5 w-5" />
        </button>
      </div>

      {/* Search Results Dropdown */}
      {results &&  <div className="absolute top-12 left-0 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
        {results.map((movie)=>{
            return(
                <div
                key={movie.id}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => router.push(`/movie/${movie.id}`)}
              >
                {movie.title}
              </div>
            );
        })}
    </div>
}
      {!results &&         <p className="text-center p-3 text-gray-500">No results found</p>
      }
    </div>
  );
}
