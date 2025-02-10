"use client";
import React from "react";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();
  
  return (
    <div className={`   max-w-4xl mx-auto p-6 transition-colors duration-300 ${
      theme === "dark" ? "text-gray-200  " : "text-gray-800 "
    }`}>
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">About IMDb Clone</h1>
      <p className="text-lg mb-4">
        Welcome to our IMDb Clone! This platform is designed for movie lovers, 
        providing information on the latest films, TV shows, and actors.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-400 mt-6">Features</h2>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Browse and search for movies and TV shows</li>
        <li>View detailed information, ratings, and cast</li>
        <li>Dark mode support for a better viewing experience</li>
      </ul>

      <h2 className="text-2xl font-semibold text-yellow-400 mt-6">Technologies Used</h2>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Next.js for server-side rendering and routing</li>
        <li>Tailwind CSS for a sleek and responsive design</li>
        <li>TMDb API for movie data</li>
      </ul>

      <h2 className="text-2xl font-semibold text-yellow-400 mt-6">Our Goal</h2>
      <p className="text-lg mt-2">
        Our goal is to provide a fast, simple, and modern movie discovery experience. 
        Stay tuned for more updates and features!
      </p>
    </div>
  );
}
