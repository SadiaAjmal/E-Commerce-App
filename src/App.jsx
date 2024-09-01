import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Footer from './Components/Footer';
import men_banner from '../src/assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'


function App() {


  return (
<div>

<BrowserRouter>
  <Navbar/>

  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
    <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
    <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>

  </Routes>
  <Footer/>

</BrowserRouter>
</div> 
  )
}

export default App;



