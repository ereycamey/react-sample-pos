import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addtocart from './pages/Addtocart';
import Product from './pages/Product';
import About from './pages/About';
import ViewProduct from './pages/ViewProduct';
import GetStarted from './pages/GetStarted';

const App = () => {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<GetStarted/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/add" element={<Addtocart/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products/:id" element={<ViewProduct/>}/>
      </Routes>
    </Router>
 
  );
}

export default App;