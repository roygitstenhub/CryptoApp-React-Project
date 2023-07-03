import { ColorModeSwitcher } from './ColorModeSwitcher';
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Coin from './components/Coin';
import Exchange from './components/Exchange';
import CoinDetails from './components/CoinDetails';
import Home from './components/Home';
import Footer from './components/Footer'
// import CardsCoin from './components/CardsCoin';




function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Coin' element={<Coin/>}></Route>
          <Route path='/Exchange' element={<Exchange/>}></Route>
          <Route path='/Coin/:id' element={<CoinDetails/>}></Route>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
