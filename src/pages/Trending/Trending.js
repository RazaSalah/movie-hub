import * as React from "react";
import axios from "axios";
import "./Trending.css";

import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

function Trending() {
  const [page, setPage] = React.useState(1);
  const [content, setContent] = React.useState([]);
  const API_KEY = "bd95210b0fc359499095f827f48634cf";

  // fetching the data from the api
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`
    );
    console.log(data.results);
    setContent(data.results);
  };

  // in this method we are calling and sending the information , for the page we need to send the page in order to get the other movies
  React.useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);
  return (
    <div>
      <span className="pageTitle"> Trending Today</span>

      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              vote_average={c.vote_average}
              release_date={c.release_date || c.first_air_date}
              media_type={c.media_type}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
