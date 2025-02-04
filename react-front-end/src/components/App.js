import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports
import Nav from "./Nav";
import Map from "./Map/Map";
import Home from "./Home";
import Buildings from "./Buildings/Buildings";
import Building from "./Buildings/Building";
import BuildingsByRating from "./Buildings/BuildingsByRating";
import BuildingAmenities from "./Buildings/BuildingAmenities";
import Favourites from "./Favourites/Favourites";
import CreateFav from "./Favourites/FavouriteButton";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/buildings/ratings" component={BuildingsByRating} />
          <Route path="/buildings/:buildingId" component={Building} />
          <Route path="/buildings" component={Buildings} />
          <Route path="/:id/building_amenities" component={BuildingAmenities} />
          <Route path="/:userId/favourites" component={Favourites} />
          <Route path="/:id/favourites" component={CreateFav} />
        </Switch>
      </div>
    </Router>
  );
}
