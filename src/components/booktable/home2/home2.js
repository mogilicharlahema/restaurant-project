import React, { useState } from "react";
import Main from "../main/main";
// import Book from "../book/book";

function Home2() {
  const [page, setPage] = useState(0);
  return (
    <>
     
      {page === 0 ? <Main setPage={setPage} /> : null}
      {/* {page === 1 ? <Book setPage={setPage} /> : null} */}
    
    </>
  )
}

export default Home2;
