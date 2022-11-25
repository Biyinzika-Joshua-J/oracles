import {useEffect, useState} from 'react';
import Home from './pages/home.js';
import Navbar from './layouts/navbar/navbar.js';
import Footer from './layouts/footer/footer.js';
import './App.css';


const apiKey = '097f4b188d76be6149494abdaf2c5253';


function App() {


  return (
   <>
     <Navbar/>
      <Home/>
    <Footer/>
   </>
  );
}

export default App;
