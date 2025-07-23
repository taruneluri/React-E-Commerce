import React from 'react'
import image from "../assets/images/laptop1.png"
import { Link, useParams } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/Cart/cartSlice'

const ProductDetails = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.items.find((p)=>p.id === parseInt(id)));

  if(!product){
    return <div className='container mx-auto px-4 py-8'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-4'>Product No Found</h2>
        <Link to="/React-E-Commerce" className='text-blue-600 hover:text-blue-800'>Return to Home</Link>

      </div>
    </div>
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div>
        <Link to="/React-E-Commerce" className='mb-8 inline-block'> Back to Products</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='shadow-md p-4 rounded w-[600px] items-center'>
            <img src={product.image} alt="" className='w-3/4 ml-15' />
          </div>
          <div>
            <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-6'>{product.description}</p>
            <div className='mb-6'>
              <span className='text-3xl font-bold'> $ {product.price}</span>
            </div>
            <div className='mb-6'>
              <h3 className='font-semibold mb-2'>Category</h3>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm '>{product.category}</span>
            </div>
            <button className='w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center hover:bg-zinc-300' onClick={() => dispatch(addToCart(product))} > <ShoppingCart/>  Add to Cart</button>
        
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails