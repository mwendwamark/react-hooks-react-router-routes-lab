import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return( 
  <div>
    {/*{code here}*/}
    <NavBar />
    <Switch>
      {/* <Route exact path="/" component={NavBar} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/actors" component={Actors} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/movies" component={Movies} />
    </Switch>
    </div>);
}

export default App;
