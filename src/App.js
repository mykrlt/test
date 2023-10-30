import './App.css';
import { Route, Routes } from "react-router-dom";
import {HomePage} from './components/register/Register';
import {Serials} from './components/serials/Serials';
import {Profile} from './components/profile/Profile';
import Navigation from './components/navigation/Nav';


function App() {
  return (
    <div>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/serials' element={<Serials/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </div>
  );
}

export default App;
