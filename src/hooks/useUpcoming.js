import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpComing } from '../utils/movieSlice';

const useUpcoming = () =>{
      // Fetch data from API and update store
  const dispatch = useDispatch();
  const getUpComingMovie = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      const json = await data.json();
      dispatch(addUpComing(json.results));
      
  } 
  useEffect(()=>{
    getUpComingMovie();
  },[])
};

export default useUpcoming;