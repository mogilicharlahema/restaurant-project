



import React, { useState } from "react";
import Navbar from "../navbar";
// import Main from "../main";
import Main from "../main/main";
import Book from "../book/book";
import ThankYou from "../thankyou";

function Home2() {
  const [page, setPage] = useState(0);
  return (
    <>
      <Navbar/>
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou setPage={setPage} /> : null}
    </>
  )
}

export default Home2;
