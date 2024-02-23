import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login'
import Admin from './components/Admin'
import Adminlogin from './components/Adminlogin'
import Home from './components/Home'
import Marks from './components/Marks';
import Profile from './components/Profile.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/logout' element={<Login/>}></Route>
      <Route path='/marks' element={<Marks/>}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
