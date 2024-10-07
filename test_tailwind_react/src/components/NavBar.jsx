// import React from 'react'

function NavBar() {
  return (
    
        <nav className=' flex justify-between p-5 w-full content-center text-sm md:text-base'>
            <div className=" px-2 content-center"><a href="">Logo</a></div>
            <div className=" hidden md:block">
                <ul className="flex justify-around gap-4 px-2 py-3">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
            <div className=" space-x-4 content-center ">
                <a href="" className="px-2 py-3 rounded-lg bg-orange-400 text-black font-semibold hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">SignIn</a>
                <a href="" className="px-2 py-3 rounded-lg bg-orange-400 text-black font-semibold hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">SignUp</a>
            </div>
        </nav>
    
  )
}

export default NavBar