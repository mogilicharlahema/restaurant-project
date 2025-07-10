import React, { useState } from "react";
import Main from "../main/main";


function Home2() {
  const [page, setPage] = useState(0);
  return (
    <>
     
      {page === 0 ? <Main setPage={setPage} /> : null}
 
    
    </>
  )
}

export default Home2;
