import React from "react";
import Pagination from "@mui/material/Pagination";

function CustomPagination({ setPage, numOfPage = 10 }) {
  // handle the pagination , whenever the page changes the scroll will be to the top of the new page
  const handlePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "15px",
        marginBottom: "10px",
      }}
    >
      <Pagination
        count={numOfPage}
        color="secondary"
        onChange={(e) => handlePage(e.target.textContent)}
      />
    </div>
  );
}

export default CustomPagination;
