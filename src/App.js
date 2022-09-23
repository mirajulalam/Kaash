import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Light from './Components/Light';
import More from './Components/More';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import Talk from './Components/Talk';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/talk' element={<Talk/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/light' element={<Light/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
