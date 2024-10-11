// import React from 'react'
import {Link,NavLink} from 'react-router-dom'

// function NavBar() {
//   return (
    
        // <nav className='flex content-center justify-between w-full p-5 text-sm md:text-base'>
        //     <div className="content-center px-2 "><a href="">Logo</a></div>
        //     <div className="hidden md:block">
        //         <ul className="flex justify-around gap-4 px-2 py-3">
        //             <li><a href="">Home</a></li>
        //             <li><a href="">About</a></li>
        //             <li><a href="">Blogs</a></li>
        //             <li><a href="">Contact</a></li>
        //             <li><a href="">Services</a></li>
        //         </ul>
        //     </div>
        //     <div className="content-center space-x-4 ">
        //         <a href="" className="px-2 py-3 font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">SignIn</a>
        //         <a href="" className="px-2 py-3 font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">SignUp</a>
        //     </div>
        // </nav>
    
//   )
// }

// export default NavBar


const NavBar = () => {
    return (
        <nav className='flex content-center justify-between w-full p-5 text-sm md:text-base'>
        <div className="content-center px-2 "><a href="">Logo</a></div>
        <div className="hidden md:block">
            <ul className="flex justify-around gap-4 px-2 py-3">
                <li><NavLink to={'/'} 
                className={({isActive})=>
                `text-gray-200 font-semibold duration-200 ${isActive ?"text-orange-400 border-b border-blue-600 py-1":""} hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`
                }
                >Home</NavLink></li>
                <li><NavLink to={'/about'} 
                className={({isActive})=>
                `text-gray-200 font-semibold duration-200 ${isActive ?"text-orange-400 border-b border-blue-600 py-1":""} hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}
                >About</NavLink></li>
                <li><NavLink to={'/login'}  className={({isActive})=>
                `text-gray-200 font-semibold duration-200 ${isActive ?"text-orange-400 border-b border-blue-600 py-1":""} hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}>Blogs</NavLink></li>
                <li><NavLink to={'/contact'}  className={({isActive})=>
                `text-gray-200 font-semibold duration-200 ${isActive ?"text-orange-400 border-b border-blue-600 py-1":""} hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}>Contact</NavLink></li>
                <li><NavLink to={'/services'}  className={({isActive})=>
                `text-gray-200 font-semibold duration-200 ${isActive ?"text-orange-400 border-b border-blue-600 py-1":""} hover:text-gray-400 hover:border-b hover:border-orange-400 hover:py-1`}>Services</NavLink></li>
            </ul>
        </div>
        <div className="content-center space-x-4 ">
            <Link to={'/login'} className="px-2 py-3 font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">SignIn</Link>
            <Link to={'/signup'} className="px-2 py-3 font-semibold text-black bg-orange-400 rounded-lg hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">SignUp</Link>
        </div>
    </nav>
    )
  }
  
export default NavBar