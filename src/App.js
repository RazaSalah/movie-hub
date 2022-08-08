import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { Container } from "@mui/material";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
function App() {
  return (
    <>
      <Header />

      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/Movies" element={<Movies />} exact />
            <Route path="/Series" element={<Series />} exact />
            <Route path="/Search" element={<Search />} exact />
          </Routes>
        </Container>
      </div>
      <Nav />
    </>
  );
}

export default App;
