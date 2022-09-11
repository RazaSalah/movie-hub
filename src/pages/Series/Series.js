import * as React from "react";
import SingleContent from "../../components/SingleContent/SingleContent.js";
import axios from "axios";
import "../Trending/Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination.js";
import Genres from "../../components/Genres/Genres.js";
import useGenres from "../../components/hooks/UseGenres";

function Series() {
  const [page, setPage] = React.useState(1);
  // the data will be received in array format
  const [content, setContent] = React.useState([]);
  const [numOfPage, setNumOfPage] = React.useState();
  const [genres, setGenres] = React.useState([]);
  const [selectedGenres, setSelectedGenres] = React.useState([]);
  const genresURL = useGenres(selectedGenres);
  console.log(selectedGenres);
  const API_KEY = "bd95210b0fc359499095f827f48634cf";

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&sort_by=popularity.desc&page=${page}&with_genres=${genresURL}`
    );
    console.log(data.results);
    setContent(data.results);
    setNumOfPage(data.total_pages);
  };

  React.useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
  }, [genresURL, page]);

  return (
    <div>
      <span className="pageTitle">TV Series</span>
      <Genres
        type="tv"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />

      <div className="trending">
        {content &&
          content.map((m) => (
            <SingleContent
              key={m.id}
              id={m.id}
              title={m.title || m.name}
              poster={m.poster_path}
              vote_average={m.vote_average}
              release_date={m.release_date || m.first_air_date}
              // here we don't have the media info in the api
              media_type="tv"
            />
          ))}
      </div>
      {/* only id the number of pages more than one it will be displayed to the user */}
      {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPage={numOfPage} />
      )}
    </div>
  );
}

export default Series;
