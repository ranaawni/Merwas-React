import React from "react";
import "./App.css";
import Navigation from "./components/nav";
import SecondNav from "./components/secondNav";
import Spanner from "./components/spanner";
import Featured from "./components/featured";
import Collections from "./components/collection";
import Escapes from "./components/escapes";
import Activities from "./components/activities";
import Store from "./components/store";
import Resturants from "./components/resturants";
import Beauty from "./components/beauty";
import House from "./components/home";
import Fitness from "./components/fitness";
import Automotive from "./components/automotive";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navigation />
      <SecondNav />
      <Spanner />
      <Featured />
      <Collections />
      <Escapes />
      <Activities />
      <Store />
      <Resturants />
      <Beauty />
      <House />
      <Fitness />
      <Automotive />
      <Footer />
    </div>
  );
}

export default App;
