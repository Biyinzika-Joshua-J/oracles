import {useEffect, useState} from 'react';
import Home from './pages/home.js';
import Navbar from './layouts/navbar/navbar.js';
import Footer from './layouts/footer/footer.js';
import { Modal } from './components/ui/modal.js';
import './App.css';





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
