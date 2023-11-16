import React, { useState } from 'react'
import Nav from '../../assets/nav.png'
import Bg from '../../assets/logo-bg.png'
import Bgg from '../../assets/bg-1.png'
import Logo from '../../assets/logo.png'
import Map from '../../assets/map.png'
import Energy from '../../assets/energy.png'
import Health from '../../assets/health.png'
import Infra from '../../assets/infra.png'
import Mining from '../../assets/mining.png'
import Tou from '../../assets/tourism.png'
import Agric from '../../assets/agric.png'
import Chart from '../../assets/line.png'
import world from '../../assets/l-1 (1).png'
import Charrt from '../../assets/charrt.png'
import cal from '../../assets/l-2.png'
import charts from '../../assets/l-3.png'
import Giip from '../../assets/giip.png'
import PolW from '../../assets/pol-white.png'
import { FaAngleDown } from "react-icons/fa";
import { IoChevronUpSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import LandingPage from '../comp/LandingPage'
import Resources from '../comp/Resources'
import More from '../comp/More'

const Footer = () => {
    return (
        <div>
            <div>
                <div className='button-giip h-80'>
                    <div className=''>
                        <div className='flex items-center justify-center gap-2 pt-10'>
                            <img src={Giip} className='w-10 lg:w-20' />
                            <p className='font-mon text-white leading-5 uppercase text-xs lg:text-sm'>Gombe State <br /> Investment</p>
                        </div>
                        {/* icons */}
                        <div className='flex justify-center items-center mt-5 gap-8 lg:gap-14'>
                            <span className='bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl'><AiFillInstagram className='text-giip text-md lg:text-lg' /></span>
                            <span className='bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl'><FaTwitter className='text-giip text-md lg:text-lg' /></span>
                            <span className='bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl'><FaFacebookF className='text-giip text-md lg:text-lg' /></span>
                            <span className='bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl'><MdMail className='text-giip text-md lg:text-lg' /></span>
                        </div>

                        {/* links */}
                        <div className='flex items-center justify-center gap-8 lg:gap-14 mt-14'>
                            <span className='font-mon-light-six text-white text-small-extra lg:text-lg'>About us</span>
                            <span className='font-mon-light-six text-white text-small-extra lg:text-lg'>Terms of Services</span>
                            <span className='font-mon-light-six text-white text-small-extra lg:text-lg'>Contact Us</span>
                            <span className='font-mon-light-six text-white text-small-extra lg:text-lg'>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
