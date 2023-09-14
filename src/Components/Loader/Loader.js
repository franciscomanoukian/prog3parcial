import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = ({ loading }) => {
  if (!loading) {
    return null; // No mostrar el Loader si loading es falso
  }

  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#2C5364", "#DDDDDD"]}
      />
      <div className="spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;
