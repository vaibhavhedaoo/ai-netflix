import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const storemovies = useSelector((store) => store.movies);
  
  return (
    <div className=" bg-black">
      <div className="-mt-96 relative z-20 pl-12 pr-12">      
      <MovieList title={"Now Playing"} movies={storemovies.nowPlayignMovies}/>      
      <MovieList title={"Popular"} movies={storemovies.popular}/>
      <MovieList title={"Top Rated"} movies={storemovies.topRated}/>
      <MovieList title={"Upcoming Movies"} movies={storemovies.upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer