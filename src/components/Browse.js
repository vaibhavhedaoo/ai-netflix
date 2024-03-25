import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';



const Browse = () => {
useNowPlayingMovies();
usePopular();
useTopRated();
useUpcoming();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
          - Cards * n
      */}
    </div>
  )
}

export default Browse