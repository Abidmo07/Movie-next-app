import { FaHeart } from "react-icons/fa";

export default function MovieCard({image,title,description,likes,date}) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden w-full max-w-xs mx-auto transition transform hover:scale-105">
      {/* Movie Poster */}
      <img
        src={image}
        alt={title}
        className="w-full h-[150px] object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* Likes & Release Date */}
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-500" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
