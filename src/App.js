import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Carrito from './components/Cart';
import 'firebase/performance';
import CardWidget from './components/CardWidget';
import { CartProvider } from './components/context/CartContext';
import NavBar from './components/NavBar'
import Compras from './components/Compras';
import Orders from './components/Orders';
export default function App() {
 
  return(
   
    <CartProvider>
      <BrowserRouter>
<NavBar/>

<Routes>
 
<Route path="/" element={<ItemListContainer greeting="hola" />}></Route>


<Route
        path="/categoryId/:id"
        element={<ItemListContainer/>}
    />
    <Route exact path="/ItemId/:id" element={<ItemDetailContainer/>}></Route>
    <Route exact path="/cart" element={<Carrito/>}></Route>
    <Route exact path="/test" element={<CardWidget/>}></Route>
    <Route exact path="/compras" element={<Compras/>}></Route>
    <Route exact path="/orders" element={<Orders/>}></Route>
   </Routes>
  
      </BrowserRouter>
 </CartProvider>
  )

}