import React from "react";
import notFound from "./notFound.css";
import error404 from "../../assets/404.gif"

function NotFound() {
  return (
    <main>
      <h3>404 Page not found!</h3>
    <div className="error404">
    <img clssName="img404" src={error404} alt="No favorites found" />
    </div>
    </main>
  );
}

export default NotFound;
