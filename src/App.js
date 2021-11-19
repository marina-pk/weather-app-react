import React from "react";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";
import Current from "./Current";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Current />
      </div>
      <Footer />
    </div>
  );
}
