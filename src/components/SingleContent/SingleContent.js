import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SigleContent.css";
function SingleContent({
  id,
  title,
  poster,
  vote_average,
  release_date,
  media_type,
}) {
  return (
    <div className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type == "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{release_date}</span>
      </span>
    </div>
  );
}

export default SingleContent;
