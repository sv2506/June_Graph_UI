import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
// import TryButton from './components/tryButton';
import UploadPage from './components/uploadPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        {/* <Route path="button" element={ <TryButton/> } /> */}
        <Route path="page" element={ <UploadPage/> } />
      </Routes>
    </div>
  );
}

export default App;
