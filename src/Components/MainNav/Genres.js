import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'

function Genres({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    
    
    const fetchGenres = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=245899b79f7e8746e6b5be1e38c67991&language=en-US`
        );
        console.log("===>", data);
        setGenres(data.genres);
        
      };
      useEffect(() => {
        fetchGenres();
      }, []);
      
      console.log("Selected=",selectedGenres);
      console.log('genres----',genres);
      
  return (
    <div style={{padding:"6px 0"}}>
        {selectedGenres?.map((g)=>
            <Chip style={{margin:4,backgroundColor:'white'}}
            size="small"
            clickable
            key={g.id}
            label={g.name}
            onDelete={() => handleRemove(g)}
            

            />
        )}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="secondary"
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
        
    </div>
  )
}

export default Genres