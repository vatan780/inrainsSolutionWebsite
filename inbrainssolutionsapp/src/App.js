import './App.css';
import ContactForm from './pages/contactForm/ContactForm';
import Poker from './pages/games/poker/Poker';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeanStack from './pages/Technology/MeanStack';

function App() {
  return (
    <>
    {/* <Home></Home> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/poker' element={<Poker/>}/>
        <Route path='/meanStack' element={<MeanStack/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
