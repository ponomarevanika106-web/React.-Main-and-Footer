import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import venomImg from "./assets/venom.png";


function App() {
  const [movies] = useState([
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
  ]);

  const movie = movies[0];

  return (
    <>
      <Header movie={movie} />
      <Main movie={movie} />
      <Footer />
    </>
  );
}

export default App;