import './App.css';
import Header from "./components/header/component";
import Footer from './components/footer/component';
import Home from './components/home/component';
import About from './components/aboutUs/component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
