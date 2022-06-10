import { Badge } from "@mui/material";
import React from "react";
import ContentModal from "../../Model/Model";
import { img_300, unavailable } from "../Config";
import "./SingleContent.css";
const SingleContent = ({ name, id, poster, date, mediaType, rating }) => {
  return (
    
    <ContentModal mediaType={mediaType} id={id}>
      <Badge badgeContent={rating} color={rating>7?"primary":"secondary"}></Badge>
        <img className="poster" src={poster ? img_300 + poster : unavailable} />
        <b className="title">{name}</b>
        <span className="subtitle">
          {mediaType === "tv" ? "TV Series" : "Movie"}
          <span className="subtitle">{date}</span>
        </span> 
        
    </ContentModal>
    
  );
};

export default SingleContent;
