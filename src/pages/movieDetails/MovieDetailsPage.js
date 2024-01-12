import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { DetailSkeleton } from "./DetailSkeleton";
import { DetailMovie } from './DetailMovie';

export const MovieDetailsPage = () => {
  const params = useParams();
  const {data:movie, error, isLoading, setUrl} = useFetch();

  useEffect(() => {
    const movieId = params.id;
    const URL = `${process.env.REACT_APP_API_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
    setUrl(URL);
  });

  return (
    <main>
      { isLoading && <DetailSkeleton />}
      { movie && <DetailMovie movie={movie} /> }
    </main>
  )
}