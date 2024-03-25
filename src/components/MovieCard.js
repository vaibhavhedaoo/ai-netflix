import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-52 pr-4">
        <img alt="Movie card" 
        height= "100px"
        src={IMG_CDN+ posterPath}
        />
    </div>
  )
}

export default MovieCard