import React, { Component } from "react";

class Header extends Component {
  render() {
    const { movie } = this.props;

    return (
      <header className="header">
        <h1>{movie.title}</h1>
        <img
          className="movie-poster"
          src={movie.image}
          alt={movie.title}
        />
      </header>
    );
  }
}

export default Header;