import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import  { useEffect , useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/itemListContainer';
import NavBarReact from './components/NavBar';
import ItemDetailContainer from './components/itemDetailContainer';
import Carrito from './components/Cart';

import 'firebase/performance';

export default function App() {
  const [count] = useState(0);
 
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return(
    <>
   
<BrowserRouter>

<NavBarReact />
<Routes>
 
<Route path="/" element={<ItemListContainer greeting="hola" />}></Route>


<Route
        path="/categoryId/:id"
        element={<ItemListContainer/>}
    />
    <Route exact path="/ItemId/:id" element={<ItemDetailContainer/>}></Route>
    <Route exact path="/cart" element={<Carrito/>}></Route>
   
   </Routes>
  
 </BrowserRouter>
 </>
  )

}