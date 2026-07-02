import React, { Component } from "react";
import venomImg from "./assets/venom.png";
import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Venom",
        image: venomImg,
        plot: "Журналіст Едді Брок стає носієм симбіота Венома.",
        actors: [
          "Tom Hardy",
          "Michelle Williams",
          "Riz Ahmed"
        ],
        country: "USA",
        studio: "Sony Pictures",
        genre: "Action",
        year: 2018
      }
    ]
  };

  render() {
    const movie = this.state.movies[0];

    return (
      <>
        <Header movie={movie} />
        <Main movie={movie} />
        <Footer />
      </>
    );
  }
}

export default App;