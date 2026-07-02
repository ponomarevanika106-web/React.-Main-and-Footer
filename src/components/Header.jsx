import React from "react";

function Header({ movie }) {
  return (
    <header className="header">
      <h1>{movie.title}</h1>
      <img className="movie-poster" src={movie.image} alt={movie.title} />
    </header>
  );
}

export default Header;