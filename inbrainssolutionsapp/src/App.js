import './App.css';
import ContactForm from './pages/contactForm/ContactForm';
import Poker from './pages/games/poker/Poker';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeanStack from './pages/Technology/MeanStack';
import MearnStack from './pages/Technology/MearnStack';
import SnackLadder from './pages/games/snackLadder/SnackLadder';
import SocialMediaMarketing from './pages/SocialMedia/SocialMediaMarketing';

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
        <Route path='/mearnStack' element={<MearnStack/>}/>
        <Route path='/snackLadder' element={<SnackLadder/>}/>
        <Route path='/socialMediaMarketing' element={<SocialMediaMarketing/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
