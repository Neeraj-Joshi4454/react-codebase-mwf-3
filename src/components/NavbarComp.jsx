import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
    
      <nav className="shadow shadow-gray-400 h-[10vh] w-[100vw] bg-black text-white flex justify-center items-center">
        <ul className="h-[10vh w-[50%] gap-8 flex justify-center items-center">
          <li className="hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"> <NavLink to="/">Home</NavLink> </li>
          
          <li className="hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"> <NavLink to="/services">Services</NavLink> </li>
          
          <li className="hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"> <NavLink to="/about">About</NavLink> </li>
          
          <li className="hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"> <NavLink to="/state">State</NavLink> </li>

          <li className="hover:bg-white hover:text-black p-2 rounded-md cursor-pointer"> <NavLink to="/api">API</NavLink> </li>
          
        </ul>
      </nav>
    
    </>
  )
}

export default NavbarComp;