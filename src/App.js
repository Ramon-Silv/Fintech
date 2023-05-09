import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Vantagens from './Components/Vantagens';
import Duvidas from './Components/Duvidas';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Cadastro from './Components/Cadastro';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>

              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Vantagens' element={<Vantagens/>}/>
                  <Route path='/Duvidas' element={<Duvidas/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Cadastro' element={<Cadastro/>}/>
              </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;