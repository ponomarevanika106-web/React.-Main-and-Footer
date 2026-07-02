import { Component } from 'react';
import venomImg from "../assets/venom.png";

class Main extends Component {
  actors = [
  { id: 'act-1', name: "Том Гарді" },
  { id: 'act-2', name: "Мішель Вільямс" },
  { id: 'act-3', name: "Різ Ахмед" },
  { id: 'act-4', name: "Скотт Гейз" },
];

actors = this.props.actors
  render() {
    return (
      <main className="main">
        <h2>Інформація про фільм</h2>

        <img src={venomImg} alt="Постер фільму Веном" className="movie-poster" />

        <h3>Сюжет</h3>
        <p className="storyline">
          Журналіст Едді Брок стає носієм інопланетного симбіота Венома.
          Разом вони змушені співіснувати та боротися проти небезпечних ворогів,
          які загрожують людству.
        </p>

       <ul className="actors-list">
      {this.actors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );

        <h3>Загальна інформація</h3>
        <div className="info-block">
          <p>Країна: США</p>
          <p>Студія: Sony Pictures</p>
          <p>Жанр: Фантастика, бойовик, пригоди</p>
          <p>Рік випуску: 2018</p>
        </div>
      </main>
    );
  }
}
export default Main;
