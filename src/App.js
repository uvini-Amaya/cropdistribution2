import './App.css';
// import Button from './Components/Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation Bar/Navigation';
import { Route,Routes,Navigate } from 'react-router-dom';
import AboutUs from "../src/pages/AboutUs/Aboutus";
import Homepage from "../src/pages/Homepage/Homepage";
import Login from "../src/pages/Log/Login/Login";
import SignUp from "../src/pages/Log/SignUp/SignUpFarmer";
// import Carousel from "../src/Components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <Carousel/> */}
      <br/>
    <AboutUs/>
      <br/>
      <Routes>
        <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
        <Route path={'/home'} element={<Homepage/>} key={'home'}/>
        <Route path={'/aboutus'} element={<AboutUs/>} key={'aboutus'}/>
        <Route path={'/signup'} element={<SignUp/>} key={'signup'}/>
        
        <Route path={'/login'} element={<Login/>} key={'login'}/>
      </Routes> 
    </div>
  );
}

export default App;
