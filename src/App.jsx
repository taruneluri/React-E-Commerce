import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import CartPage from "./Pages/CartPage"
import ProductDetails from "./Pages/ProductDetails" 
import Navbar from "./Component/Navbar"
import {Provider} from 'react-redux'
import {store} from "./App/Store";
function App() {

  return (
  
  <Provider  store={store} >
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/cart" element = {<CartPage/>} />
          <Route path="/product/:id" element = {<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
  </Provider>)
}

export default App
