import logo from './assets/graphUILogo.png';
import './App.css';
import TryButton from './components/tryButton';

function App() {
  return (
    <div className="app-container">
      <div className="logo-and-title">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">GraphUI</h1>
      </div>
      <div className="description">
        <p>
          Introducing GraphUI, your go-to app for hassle-free JSON file management. With GraphUI,
          working with .json files has never been easier. Our cutting-edge technology effortlessly
          parses your JSON data, presenting it in a visually intuitive and organized manner.
          Whether you're a developer or simply dealing with JSON content, GraphUI streamlines your experience
          by transforming raw data into a user-friendly graphical interface. No more sifting through complicated
          JSON text. Now you can effortlessly navigate nested objects and arrays with just a few clicks.
          Simplify your JSON interactions today with GraphUI and unlock a whole new level of efficiency and convenience.
        </p>
        <TryButton to="/UploadPage" />
      </div>
    </div>
  );
}

export default App;
