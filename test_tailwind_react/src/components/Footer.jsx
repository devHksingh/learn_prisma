// import { PiFacebookLogoBold,FaGithub  ,FaInstagram,FaXTwitter,FaYoutube  } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
// function Footer() {
//   return (
    // <footer>
    //     <div className="container max-w-[80rem]">
    //         <div>
    //             <div><span>Logo</span></div>
    //             <div><p>Making the world a better place through constructing elegant hierarchies.</p></div>
    //             <div>
    //             <PiFacebookLogoBold />
    //             <FaInstagram />
    //             <FaXTwitter />
    //             <FaGithub />
    //             <FaYoutube />
    //             </div>
    //         </div>
    //         <div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //             <div></div>
    //         </div>
    //         <div>
    //             <span> </span>
    //         </div>
    //     </div>
    // </footer>
//   )
// }

// export default Footer



function Footer() {
    return (
        <footer>
        <div className="container max-w-[80rem] flex flex-col justify-center">
            <div className="space-y-4 mt-2 mb-2">
                <div><span>Logo</span></div>
                <div><p>Making the world a better place through constructing elegant hierarchies.</p></div>
                <div className="flex gap-6 justify-start">
                    <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400"><FaFacebook /></a>
                    <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaInstagram /></a>
                    <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaXTwitter /></a>
                    <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaSquareGithub /></a>
                    <a href="" className="cursor-pointer text-2xl text-slate-600 hover:text-slate-400 "><FaYoutube /></a>
                    
                </div>
            </div>
            <div className="flex justify-between">
                <div className="space-y-4 mt-4">
                    <h2 className="text-white font-semibold text-lg">Solutions</h2>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:text-slate-200">Marketing</a></li>
                        <li><a href=""className="hover:text-slate-200">Analytics</a></li>
                        <li><a href=""className="hover:text-slate-200">Commerce
                        </a></li>
                        <li><a href=""className="hover:text-slate-200">Insights</a></li>
                        
                    </ul>
                </div>
                <div className="space-y-4 mt-4">
                    <h2 className="text-white font-semibold text-lg">Support</h2>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:text-slate-200">Pricing</a></li>
                        <li><a href="" className="hover:text-slate-200">Documentation</a></li>
                        <li><a href="" className="hover:text-slate-200">Guides
                        </a></li>
                        <li><a href="" className="hover:text-slate-200">API Status
                        </a></li>
                        
                    </ul>
                </div>
                <div className="space-y-4 mt-4">
                    <h2 className="text-white font-semibold text-lg">Support</h2>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:text-slate-200">Pricing</a></li>
                        <li><a href="" className="hover:text-slate-200">Documentation</a></li>
                        <li><a href="" className="hover:text-slate-200">Guides
                        </a></li>
                        <li><a href="" className="hover:text-slate-200">API Status
                        </a></li>
                        
                    </ul>
                </div>
                <div className="space-y-4 mt-4">
                    <h2 className="text-white font-semibold text-lg">Support</h2>
                    <ul className="space-y-2">
                        <li><a href="" className="hover:text-slate-200">Pricing</a></li>
                        <li><a href="" className="hover:text-slate-200">Documentation</a></li>
                        <li><a href="" className="hover:text-slate-200">Guides
                        </a></li>
                        <li><a href="" className="hover:text-slate-200">API Status
                        </a></li>
                        
                    </ul>
                </div>
            </div>
            <div className="mt-4 mb-4  border-t-2 border-slate-400 pt-4 pb-2">
                <span>© 2020 Your Company, Inc. All rights reserved. </span>
            </div>
        </div>
    </footer>
    )
  }
  
export default Footer