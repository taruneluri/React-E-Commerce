import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-slate-900 shadow-md'>

        <div className='container mx-auto px-4'>
            <div className='min-h-16 '>
                <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                    <h2 className='text-4xl text-white font-bold'>Subscribe Our Newsletter</h2>
                    <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'> 
                        <input type="text" placeholder='Enter Your Email' className='bg-gray-200 py-4 px-4 rounded shadow-md w-full focus:outline-none'/>
                        <button className='bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <div className='bg-slate-800 text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-5'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi possimus incidunt atque? Ullam totam ipsa illum obcaecati, tempora provident rem fugiat vitae beatae error temporibus similique, dolorem mollitia magnam id.</p>
                        <div className='flex items-center mt-5 gap-6'>
                            <Facebook  size={30} className='bg-white text-black rounded-md p-2 cursor-pointer '/>
                            <Twitter  size={30} className='bg-white text-black rounded-md p-2 cursor-pointer '/>
                            <Linkedin  size={30} className='bg-white text-black rounded-md p-2 cursor-pointer '/>
                            <Youtube  size={30} className='bg-white text-black rounded-md p-2 cursor-pointer '/>

                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/about">About</Link> </li>
                            <li> <Link to="/faqs">FAQs</Link> </li>
                            <li> <Link to="/contact">Contact</Link> </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Category</h2>
                        <ul>
                            <li> <Link to="/">Monitors</Link> </li>
                            <li> <Link to="/about">GPUs</Link> </li>
                            <li> <Link to="/faqs">Laptops</Link> </li>
                            <li> <Link to="/contact">Power Supply</Link> </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Address</h2>
                        <p>69 England Square South ft. , New York , NY 10012 , United States</p>
                        <p>+12345 678 90</p>
                        <p>+12345 678 91</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto text-center py-4 text-white'>
            <p>Copyright &copy; 2025 Tarun Eluri</p>
        </div>

    </footer>
  )
}

export default Footer