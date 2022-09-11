import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SigleContent.css";
import ContentModal from "../ContentModal/ContentModal";
function SingleContent({
  id,
  title,
  poster,
  vote_average,
  release_date,
  media_type,
}) {
  return (
    <ContentModal media_type={media_type} id={id}>
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
        {media_type == "tv" ? "TV Series" : "movie"}
        <span className="subTitle">{release_date}</span>
      </span>
    </ContentModal>
  );
}

export default SingleContent;
