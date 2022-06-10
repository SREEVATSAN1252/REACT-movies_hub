import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "./MainNav/CustomPagination";

import SingleContent from "./SingleContent/SingleContent";
import "./Trending.css";
const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1)

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log("===>", data);
    setTrending(data.results);
    console.log("/??", trending);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  console.log("++++>",page);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {trending &&
          trending.map((t) => (
            <SingleContent
              key={t.id}
              name={t.tittle || t.original_title || t.original_name}
              poster={t.poster_path}
              id={t.id}
              date={t.first_air_date || t.release_date}
              mediaType={t.media_type}
              rating={t.vote_average}
            />
          ))}
          
      </div>
      <CustomPagination setPage = {setPage}/>
    </div>
  );
};

export default Trending;
