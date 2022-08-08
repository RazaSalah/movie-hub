import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router";

function Nav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value == 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/Movies");
    } else if (value === 2) {
      navigate("/Series");
    } else if (value === 3) {
      navigate("/Search");
    }
  }, [value]);

  return (
    <BottomNavigation
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#39445a",
        boxShadow: "0px 1px 5px black",
        zIndex: 100,
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}

export default Nav;
