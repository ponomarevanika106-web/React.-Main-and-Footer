import venomImg from "../assets/venom.png";
function Main() {
  const actors = [
    "Том Гарді",
    "Мішель Вільямс",
    "Різ Ахмед",
    "Скотт Гейз",
  ];

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

      <h3>Актори</h3>
      <ul className="actors-list">
        {actors.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>

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

export default Main;
