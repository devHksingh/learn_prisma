// import React from 'react'

function Header() {
  return (
    <header>
        <nav className=' flex justify-between p-2 w-full'>
            <div className="bg-red-400"><a href="">Logo</a></div>
            <div className="bg-blue-400 hidden md:block">
                <ul className="flex justify-around gap-4 px-2">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
            <div className="bg-orange-400">
                <a href="">SignIn</a>
                <a href="">SignUp</a>
            </div>
        </nav>
    </header>
  )
}

export default Header