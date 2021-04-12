import React from "react";
import "./App.css";
import Navigation from "./components/nav";
import SecondNav from "./components/secondNav";
import Spanner from "./components/spanner";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navigation />
      <SecondNav />
      <Spanner />
      <Footer />
    </div>
  );
}

export default App;
