import {useEffect} from "react"

import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (id) =>{


     // fetch trailer video and updating the store with trailer video data
     const dispatch = useDispatch();
  const getMovieVideos = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTIONS)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
    const json =  await data.json(); 
    //console.log(json.results);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));    
  }



  useEffect(()=>{
      getMovieVideos();
  },[]);
};


export default useMovieTrailer;