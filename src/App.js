import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Toronto" />
      </div>
      <Footer />
    </div>
  );
}
