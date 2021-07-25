import PopularMovies from "./PopularMovies"
import NavBar from "./NavBar"
import RatedMovies from "./RatedMovies"
import React from "react";
import {Route, Switch, Redirect} from "react-router-dom"

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/favourite-movies" />
        </Route>
        <Route path="/favourite-movies" >
          <PopularMovies />
        </Route>
        <Route path="/top-rated-movies" >
          <RatedMovies />
        </Route>

      </Switch>
    </>
  );
}

export default App;
