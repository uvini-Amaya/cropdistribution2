import "./App.css";
// import Button from './Components/Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation Bar/Navigation';
import { Route,Routes,Navigate } from 'react-router-dom';
import AboutUs from "../src/pages/AboutUs/Aboutus";
import Homepage from "../src/pages/Homepage/Homepage";
import Login from "../src/pages/Log/Login/Login";
import SignUp from "../src/pages/Log/SignUp/SignUp";
// import SignUpSeller from "../src/pages/Log/SignUp/SignUpSeller";
// import Footer from "../src/Components/Footer/Fotter";
import Search from './Components/Search/Search';
// import Carousel from "../src/Components/Carousel/Carousel";

// import { startTransition } from 'react';


import Login2 from "../src/pages/Log/Login/login2";
import Calculator from "./pages/Calculator/Calculator";








function App() {



  return (
    <div className="App">
      <Navigation/>
    
     <br/>
     
      <br/>
     
      <Routes>
        <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
        <Route path={'/home'} element={<Homepage/>} key={'home'}/>
        <Route path={'/aboutus'} element={<AboutUs/>} key={'aboutus'}/>
        <Route path={'/signup'} element={<SignUp/>} key={'signup'}/>
        {/* <Route path={'/signupseller'} element={<SignUpSeller/>} key={'signupseller'}/> */}
        <Route path={'/login'} element={<Login/>} key={'login'}/>
        {/* <Route path={'/login2'} element={<Login2/>} key={'login2'}/> */}
        <Route path={'/search'} element={<Search/>} key={'search'}/>
        <Route path={'/calculator'} element={<Calculator/>} key={'calculator'}/>
      </Routes> 

      <br/>

      {/* <Carousel/>
      <Footer/> */}
    </div>
  );
}

export default App;