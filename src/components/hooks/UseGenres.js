import React from "react";

function UseGenres(selectedGenres) {
  if (selectedGenres.length < 1) {
    return "";
  }

  const GenresID = selectedGenres.map((g) => g.id);
  return GenresID.reduce((acc, curr) => acc + "," + curr);
}

export default UseGenres;
