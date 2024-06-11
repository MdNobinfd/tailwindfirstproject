import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";



const Header = () => {
  return (
    <>
    <header className=' py-[15px] bg-[#282828] text-white'>
      <div className="container container-sm mx-auto lg:flex">
        <div className=" items-center flex justify-center  lg:w-[20%]">
        <div className=" text-[20px] "><IoMailOutline /></div>
        <div className=""><a className=' text-[12px] leading-[18px] font-normal font-popin' href="#" >mail@yourcompany.com</a></div>
      </div>
      <div className="items-center flex justify-center  lg:w-[20%]">
        <div className=""><FaPhoneVolume /></div>
        <div className=""><a className=' text-[12px] leading-[18px] font-normal font-popin' href="#">+896 120 5889 (Toll free)</a></div>
      </div>
      <div className="w-full lg:w-[60%]">
        <div className="flex justify-center lg:justify-end gap-2 lg:gap-[19px]">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
           </div>
      </div>
      </div>
      
    </header>
    </>
  )
}

export default Header