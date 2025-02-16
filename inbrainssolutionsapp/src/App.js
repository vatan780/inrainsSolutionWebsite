import './App.css';
import ContactForm from './pages/contactForm/ContactForm';
import Poker from './pages/games/poker/Poker';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Home></Home> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/poker' element={<Poker/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
