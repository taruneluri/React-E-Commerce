import {ShoppingBasketIcon, ShoppingCart, User} from "lucide-react"
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { setSearchTerm } from "../features/Products/ProductSlice";

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>state.product.searchTerm);
  
  //cart 
  const cartItems = useSelector((state)=> state.cart.items);
  const itemCount = cartItems.reduce((total,item)=> total + item.quantity ,0 );

  const handelUser = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className='bg-white shadow-md'>
        <>
            <div className='py-4 shadow-md'>
                <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative'>
                    <div className='flex gap-4 '>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ's</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                    </div>
                    <div className={`${ isOpen ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4" : "hidden" }`}>
                      <li><Link to="/"> Sign</Link></li>
                      <li><Link to="/"> My Account</Link></li>
                      
                    </div>
                    <User size={40} className="bg-gray-200 p-2 text-black rounded cursor-pointer" onClick={handelUser} />
                </ul>

            </div>
            <nav className="flex justify-between items-center container mx-auto md:py-6 py-8 px-2"> 
              <div className="flex items-center">
                <Link to="/" className="bg-gray-700 py-2 px-4 rounded cursor-pointer text-white">Lucide</Link>
              </div>
              <form className="w-1/2 sm:block hidden">
                  <input type="text" placeholder="Search Product"  className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-3 px-3 w-full" value={searchTerm} onChange={(e)=>dispatch(setSearchTerm(e.target.value))} />
              </form>
              <div className="relative">
                <Link to={"/cart"}>
                <ShoppingCart  size={54} className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full" />
                {itemCount > 0 && (<span className="absolute -top-2 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 items-center justify-center flex">{itemCount}</span>)}
              </Link>
              </div>
            </nav>
        </>

    </header>
  )
}

export default Navbar