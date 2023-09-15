
import React from "react";
import loading from "../../assets/loading.gif";


function Loader() {
  return (
    <div  className="containerLoader">
    <img src={loading} alt="Loading..." />
    </div>
  );
}

export default Loader;
