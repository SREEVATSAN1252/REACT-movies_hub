import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGenres from '../../CustomHooks/useGenre';
import CustomPagination from '../MainNav/CustomPagination';
import Genres from '../MainNav/Genres';
import SingleContent from '../SingleContent/SingleContent';

const Series = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const genreURL  = useGenres(selectedGenres);
  console.log("ggggg",genreURL);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`
    );

    setMovies(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, [page,selectedGenres]);
 
  return (
    <div>
        <span className='pageTitle'>
            Series
        </span>
        <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="movie">
        {movies &&
          movies.map((t) => (
            <SingleContent
              key={t.id}
              name={t.tittle || t.original_title || t.original_name}
              poster={t.poster_path}
              id={t.id}
              date={t.first_air_date || t.release_date}
              mediaType="tv"
              rating={t.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />

    </div>
  )
}

export default Series