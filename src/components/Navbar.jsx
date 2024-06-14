import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  let [show, setShow] = useState(false)
  let handleShow = () =>{
    setShow(!show)
  }
  return (
    <>
    <nav className='bg-[#F40404] py-[30px]'>
      <div className=" container mx-auto flex justify-between items-center">
        <div className="">
          <img className='max-w-[192px]' src={logo} alt="" />
        </div>
        <div className="text-center">
          <ul className={`lg:flex lg:bg-transparent lg:static lg:translate-x-0 py-4 lg:py-0 lg:gap-[47px]  items-center font-popin text-[16px] text-white leading-[24px] font-semibold ${show == true ? "ease-in-out duration-300  absolute bg-[green]  left-[0px] w-full top-[198px]" : "ease-in-out bg-black duration-300 absolute   left-[-1500px]  w-full top-[198px]"}`}>
            <li className=' hover:text-black ease-in-out py-3 lg:py-0 duration-300 cursor-pointer'>Home</li>
            <li className=' hover:text-black ease-in-out py-3 lg:py-0 duration-300 cursor-pointer'>About</li>
            <li className=' hover:text-black ease-in-out py-3 lg:py-0 duration-300 cursor-pointer'>service</li>
            <li className=' hover:text-black ease-in-out py-3 lg:py-0 duration-300 cursor-pointer'>Galley</li>
            <li className=' hover:text-black ease-in-out py-3 lg:py-0 duration-300 cursor-pointer'>Blog</li>
            <button className=' py-[13px] px-[31px] border-2 border-white-500 hover:bg-white hover:text-black ease-in-out duration-300'>CONTACT</button>
          </ul>
        </div>
        <div className=" cursor-pointer text-[40px] text-white lg:hidden" onClick={handleShow}>
          {show == true ? <ImCross /> : <FaBars />}
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
