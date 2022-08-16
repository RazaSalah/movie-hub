import * as React from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";

function Genres({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) {
  const API_KEY = "bd95210b0fc359499095f827f48634cf";

  // in this method the genres for the movie will be add

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  // in this method the genres for the movie will be removed

  const removeGenres = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchedGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
    );
    setGenres(data.genres);
    // console.log(data.genres);
  };

  // console.log(genres);
  React.useEffect(() => {
    fetchedGenres();

    // for this whenever we are changing the page we need the filter to be removed
    // this line will be as unmounting
    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div style={{ padding: " 6px 0" }}>
      {/* converting the received data into array format */}
      {Array.from(selectedGenres).map((g) => (
        <Chip
          key={g.id}
          label={g.name}
          style={{ margin: 2, placeItems: "center" }}
          color="primary"
          size="small"
          clickable
          onDelete={() => removeGenres(g)}
        />
      ))}
      {Array.from(genres).map((g) => (
        <Chip
          key={g.id}
          label={g.name}
          style={{ margin: 2, placeItems: "center" }}
          color="secondary"
          size="small"
          clickable
          onClick={() => handleAdd(g)}
        />
      ))}
    </div>
  );
}

export default Genres;
