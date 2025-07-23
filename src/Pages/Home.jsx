import React from 'react'
import ProductGrid from '../Component/ProductGrid';
import Footer from '../Component/Footer';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/Products/ProductSlice';

const Home = () => {
  const dispatch = useDispatch();
  const categories = ["All","Graphic Cards","Laptop","Monitor","Tablet"];
  return (
    <div>
      <div className='bg'></div>
      <div className='container mx-auto my-10 px-2 '>
        <div className='flex gap-4'>
          {categories.map((category) => {
            return(<button key={category} onClick={()=> dispatch(setSelectedCategory(category))} className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in'>{category}</button>);
          })}
          </div>
        <ProductGrid />  
      </div>
      <Footer />
    </div>
  )
}

export default Home