import React, { Component } from "react";

class Main extends Component {
  render() {
    const { movie } = this.props;

    return (
      <main className="main">
        <h2>Сюжет</h2>
        <p className="storyline">{movie.plot}</p>

        <h3>Актори</h3>
        <ul className="actors-list">
          {movie.actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>

        <h3>Загальна інформація</h3>
        <div className="info-block">
          <p>Країна: {movie.country}</p>
          <p>Студія: {movie.studio}</p>
          <p>Жанр: {movie.genre}</p>
          <p>Рік: {movie.year}</p>
        </div>
      </main>
    );
  }
}

export default Main;
