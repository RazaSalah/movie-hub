import * as React from "react";
import axios, { Axios } from "axios";
import { TextField, Button, Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import "../Trending/Trending.css";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

function Search() {
  // the search will be based on the type either
  // tv or movie that's why we are passing zero
  const [type, setType] = React.useState(0);
  const [searchText, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [content, setContent] = React.useState([]);
  const [pageNum, setPageNum] = React.useState();
  const API_KEY = "bd95210b0fc359499095f827f48634cf";

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#ffffff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      // .then((response) => {
      //   console.log("response", response.data);
      // });

      setContent(data.results);
      setPageNum(data.total_pages);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            id="filled-search"
            label="Search"
            className="searchBox"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>

        <Tabs
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          textColor="primary"
          indicatorColor="primary"
          style={{ paddingBottom: 5 }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
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
              media_type={type ? "tv" : "movie"}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {pageNum > 1 && <CustomPagination setPage={setPage} pageNum={pageNum} />}
    </div>
  );
}

export default Search;
