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
import Footer from './Footer'

const Home = () => {

    const [clicked, setClicked] = useState("Home");
    const [more, setMore] = useState(false);
    const [home, setHome] = useState(false);

    return (
        <div>

            {/* Nav */}
            <div className='flex mt-10 mx-5 lg:mx-14'>
                {/* logo */}
                <div>
                    <img src={Bg} className='' />
                    <img src={Logo} className='absolute top-10 lg:top-12 left-8 lg:left-28 w-6 lg:w-14' />
                    <p className='absolute top-10 lg:top-14 left-16 lg:left-44 text-sm lg:text-2xl text-green-600 font-semibold' >GIIP</p>
                </div>
                <div>
                    <img src={Nav} />
                    <div className='flex items-center justify-between lg:pl-24 gap-10 absolute top-14'>
                        <p className='text-white font-mon-light-six text-2xl leading-normal cursor-pointer' onClick={() => setClicked("Home")}>Home</p>
                        <p className='text-white font-mon-light-six text-2xl leading-normal cursor-pointer' onClick={() => setClicked("Resources")}>Resources</p>
                        <p className='text-white font-mon-light-six text-2xl leading-normal cursor-pointer' onClick={() => setClicked("More")}>More</p>
                    </div>
                    <img src={PolW} className={`absolute pol top-24 ${clicked === "Resources" ? 'pol-resource' : clicked === "More" && 'pol-more'}`} />
                </div>
                <div>
                    <img src={Bgg} />
                    <p className='absolute top-10 lg:top-14 right-8 lg:right-36 text-xs lg:text-2xl text-green-600 font-semibold' >Contact Us</p>
                </div>
            </div>

            {clicked === "Home" ? <LandingPage />  : clicked === "Resources" ? <Resources /> : clicked === "More" && <More /> }

            {/* Footer */}
            {
                clicked === "Home" ? <Footer /> : clicked === "Resources" && <Footer />
            }
        </div>
    )
}

export default Home
