import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Favoritos from "./Components/Favoritos/Favoritos";
import DetallePeli from "./Components/DetallePeli/DetallePeli";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/detPelicula/:id" component={DetallePeli}/>
            <Route path="/favoritos" component={Favoritos}/>
            <Route path="/notfound" component={NotFound}/>
          </Switch>

      <Footer/>
    </div>
  );
}

export default App;
