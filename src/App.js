import React, { Component } from "react";
import "./App.css";
import { Articles, CurrentDate, Footer, Header, NavBar, TopArticles } from "./Components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CurrentDate />
        <NavBar />
        <TopArticles />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
