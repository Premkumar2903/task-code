import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <nav className="flex items-center justify-between p-4 bg-orange-200 text-amber-950" >
                <h2 className="text-xl font-bold">Navbar</h2>

                <ul className="hidden md:flex gap-4 ">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/about' >About</Link></li>
                        <li><Link to='/users' >Users</Link></li>
                </ul>

                {isOpen && (
                    <ul className="absolute top-16 left-0 w-full flex flex-col bg-orange-200 gap-6 p-4 md:hidden">
                        <li><Link to='/' className="hover:text-blue-400" onClick={()=> setIsOpen(false)}>Home</Link></li>
                        <li><Link to='/about' className="hover:text-blue-400" onClick={()=> setIsOpen(false)}>About</Link></li>
                        <li><Link to='/users' className="hover:text-blue-400" onClick={()=> setIsOpen(false)}>Users</Link></li>
                    </ul>
                )}
                
                <div className="md:hidden">                 
                    <Hamburger toggled={isOpen} toggle={setIsOpen}/>
                </div>
            </nav>
        </>
    )
}

