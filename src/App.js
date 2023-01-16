import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Carrito from './components/Cart/Cart';
import 'firebase/performance';
import CardWidget from './components/CartWidget/CardWidget';
import { CartProvider } from './components/context/CartContext';
import NavBar from './components/NavBar/NavBar'
import CheckOut from './components/CheckOut/CheckOut';
import ItemCounter from './components/ItemCounter/itemCounter';

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
    <Route exact path="/orders" element={<CheckOut/>}></Route>
    <Route exact path="/counter" element={<ItemCounter/>}></Route>
   </Routes>
  
      </BrowserRouter>
 </CartProvider>
  )

}
