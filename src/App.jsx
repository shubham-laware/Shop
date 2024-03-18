import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ProfileSettings from './Components/ProfileSettings'
import Media from './Components/Media'
import Product from './Components/ProductPage/Product'
import Cart from './Components/Cart/Carts'
import ReturnPolicy from './Components/ReturnPolicy'
import Orders from './Components/Orders';
import AddItem from './Components/AddItem';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<ProfileSettings/>}  />
    <Route path='/media' element={<Media/>} />   
    <Route path='/product' element={<Product/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/returnpolicy' element={<ReturnPolicy/>} />  
    <Route path='/add-product' element={<AddItem/>}/>
    <Route path='/orders' element={<Orders/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
