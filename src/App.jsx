import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  actors = [
    "Том Гарді",
    "Мішель Вільямс",
    "Різ Ахмед",
    "Скотт Гейз",
  ];

  render() {
    return (
      <>
        <Header />
        <Main actors = {this.actors} />
        <Footer />
      </>
    );
  }
}

export default App;
