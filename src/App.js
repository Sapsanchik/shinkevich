import './App.css';
import Home from './Components/Home';
import Price from './Components/Price';
import About from './Components/About';
import Work from './Components/Work';
import Contacts from './Components/Contacts';
import Nav from './Components/nav/Nav';


function App() {
  return (
    <div className="App">
      <Home />
      <Price />
      <About />
      <Work />
      <Contacts />
      <Nav />

    </div>
  );
}

export default App;
