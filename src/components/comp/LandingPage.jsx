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

const LandingPage = () => {
    return (
        <div>
            <div>
                {/* text */}

                <div className='text-center mt-24 mx-10 lg:mx-0 lg:mt-32'>
                    <h1 className='text-giip text-md lg:text-5xl font-mon mt-1 lg:mt-8'>Discover Gombe: Where</h1>
                    <h1 className='text-giip text-md lg:text-5xl font-mon mt-1 lg:mt-8'>Opportunities Meet Investment</h1>
                    <h1 className='text-giip text-md lg:text-5xl font-mon mt-1 lg:mt-8'>Excellence</h1>

                    <p className='mt-3 lg:mt-10 text-gray-400 font-mon-light text-small lg:text-2xl font-medium'>Explore the Wealth of Opportunities And Embrace the Future.</p>

                    {/* button */}

                    <button className='button-giip py-3 lg:py-5 px-10 lg:px-24 rounded-2xl lg:rounded-3xl text-white text-xs lg:text-lg font-mon-light my-10'>Explore Gombe</button>

                    {/* map */}
                    <img src={Map} className='ml-0 lg:ml-24 mt-0 lg:mt-4 mb-8' />
                    <span className='search absolute right-40 px-10 py-4' style={{ top: '73rem' }}>
                        <IoSearch style={{ width: '40px', height: '40px', color: '#429823' }} />
                    </span>
                </div>


                {/* About */}
                <div>
                    <h1 className='text-center text-sm lg:text-3xl font-mon-light-six text-giip mb-5'>About Gombe</h1>

                    {/* slides */}
                    <div className='mb-20'>
                        slides
                    </div>

                    {/* about text */}
                    <div className='about-text about-text-bg text-justify'>
                        <p className='about-text-mobile font-mon-light text-neutral-500 text-3xl leading-loose mb-0 lg:mb-10'>
                            <span className='text-giip'>Gombe State</span> is a state in northeastern Nigeria,
                            bordered to the north and northeast by the states of Borno and Yobe,
                            to the south by Taraba State, to the southeast by Adamawa State,
                            and to the west by Bauchi State. Gombe is the state capital of Gombe state
                            and it was formed from a part of Bauchi State on 1 October 1996.
                            Of the 36 states in Nigeria, Gombe is the 21st largest in area and
                            the 32nd most populous, with an estimated population of about 3.25 million
                            as of 2016. The state bears a slogan <span className='text-giip'>"Jewel in the Savannah</span>
                        </p>
                    </div>

                    {/* button */}
                    <div className='text-center'>
                        <button className='button-giip py-2 lg:py-5 px-10 lg:px-24 rounded-2xl lg:rounded-3xl text-white text-xs lg:text-lg font-mon-light my-4 lg:my-10'>Learn More</button>
                    </div>

                    {/* main */}
                    <div className='main-section mb-10'>
                        <h1 className='text-center text-giip font-mon-light-six text-sm lg:text-4xl'>Main Investment Opportunities</h1>

                        {/* main pics */}
                        <div>
                            {/* first */}
                            <div className='flex items-center justify-center gap-2 lg:gap-6 mt-4 lg:mt-8'>
                                <img src={Energy} className=' w-1/4 lg:w-full' />
                                <img src={Infra} className=' w-1/4 lg:w-full' />
                                <img src={Health} className=' w-1/4 lg:w-full' />
                            </div>
                            {/* second */}
                            <div className='main-section-div flex items-center justify-center gap-2 lg:gap-6 lg:mt-8'>
                                <img src={Tou} className=' w-1/4 lg:w-full' />
                                <img src={Agric} className=' w-1/4 lg:w-full' />
                                <img src={Mining} className=' w-1/4 lg:w-full' />
                            </div>
                        </div>
                    </div>

                    {/* analysis */}
                    <div className='analysis-section'>
                        <h1 className='text-center text-giip font-mon-light-six text-sm lg:text-4xl'>Data Analysis</h1>

                        {/* months */}
                        <div className='select-bg mt-8 w-3/4 lg:w-2/5 py-3 lg:py-5 flex items-center justify-between px-5 lg:px-10 rounded-xl lg:rounded-2xl mx-auto'>
                            <p className='text-giip font-mon-light text-sm lg:text-lg'>Select Month</p>
                            <p className='text-giip font-mon-light text-md lg:text-2xl'><FaAngleDown /></p>
                        </div>

                        {/* analysis tabs */}
                        <div className='analysis-section mt-10 flex items-center justify-center gap-3 lg:gap-7'>
                            <div className='tabs-bg py-2 lg:py-5 rounded-xl w-1/3'>
                                <p className='text-giip font-mon-light-six text-center text-xs lg:text-3xl pb-2 lg:pb-8'>Actual</p>
                                <p className='text-giip font-mon-light text-center text-sm lg:text-4xl'>$400,000</p>
                            </div>
                            <div className='tabs-bg py-2 lg:py-5 rounded-xl w-1/3'>
                                <p className='text-giip font-mon-light-six text-center text-xs lg:text-3xl pb-2 lg:pb-8'>Forecast</p>
                                <p className='text-giip font-mon-light text-center text-sm lg:text-4xl'>$470,000</p>
                            </div>
                            <div className='tabs-bg py-2 lg:py-5 rounded-xl w-1/3'>
                                <p className='text-giip font-mon-light-six text-center text-xs lg:text-3xl pb-2 lg:pb-8'>Absolute</p>
                                <p className='text-giip font-mon-light text-center text-sm lg:text-4xl'>-$3,000</p>
                            </div>
                        </div>

                        {/* charts */}
                        <div className='charts-section mt-5 lg:mt-20'>
                            {/* chart image */}
                            <img src={Charrt} className=' w-2/3 mx-auto' />
                        </div>

                        {/* marketting */}
                        <div>
                            {/* texts */}
                            <div className='about-text mt-5 lg:mt-14'>
                                <h1 className='text-center text-giip font-mon-light-six text-sm lg:text-4xl'>Marketing And Outreach</h1>
                                <p className='text-center mt-2 lg:mt-5 text-gray-400 font-mon-light text-small-extra lg:text-xl font-medium'>We develop a marketing strategy to reach potential investors,</p>
                                <p className='text-center text-gray-400 font-mon-light text-small-extra lg:text-xl font-medium'> both locally and internationally.</p>
                            </div>

                            {/* card */}
                            <div className='card-section about-text mt-5 lg:mt-16'>
                                <div className='tabs-bg py-2 lg:py-5 rounded-xl'>
                                    <p className='text-giip font-mon-light-six text-center text-xs lg:text-3xl pb-2 lg:pb-8 pt-14'>What is your Industry</p>
                                    <div className='select-bg mt-8 w-3/4 lg:w-4/5 py-3 lg:py-5 flex items-center justify-between px-5 lg:px-10 rounded-xl lg:rounded-2xl mx-auto'>
                                        <p className='text-giip font-mon-light text-sm lg:text-lg'>Industry type</p>
                                        <p className='text-giip font-mon-light text-md lg:text-2xl'><IoChevronUpSharp /></p>
                                    </div>
                                    <div>
                                        <div className='bg-white mt-5 w-4/5 rounded-3xl border-2 mx-auto'>
                                            <div className='px-10 py-2 lg:py-5'>
                                                <p className='text-neutral-400 font-mon-light'>Energy</p>
                                            </div>
                                            <hr />
                                            <div className='px-10 py-2 lg:py-5'>
                                                <p className='text-neutral-400 font-mon-light'>Agriculture</p>
                                            </div>
                                            <hr />
                                            <div className='px-10 py-2 lg:py-5'>
                                                <p className='text-neutral-400 font-mon-light'>Education</p>
                                            </div>
                                            <hr />
                                            <div className='px-10 py-2 lg:py-5'>
                                                <p className='text-neutral-400 font-mon-light'>Transportation</p>
                                            </div>
                                            <hr />
                                            <div className='px-10 py-2 lg:py-5'>
                                                <p className='text-neutral-400 font-mon-light'>Health Care</p>
                                            </div>
                                            <hr />
                                            <div className='px-10 py-2 lg:py-5'>
                                                <p className='text-neutral-400 font-mon-light'>Infrastracture</p>
                                            </div>

                                        </div>

                                        {/* button */}
                                        <div className='text-center'>
                                            <button className='button-giip w-4/5 py-2 lg:py-5 px-10 lg:px-24 rounded-2xl lg:rounded-3xl text-white text-xs lg:text-lg font-mon-light my-4 lg:my-10'>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* articles */}

                        <div>
                            {/* texts */}
                            <div className='about-text mt-5 lg:mt-14'>
                                <h1 className='text-center text-giip font-mon-light-six text-sm lg:text-4xl'>Latest Articles</h1>
                            </div>

                            <div className='flex items-center justify-center gap-7 mt-6'>
                                <div>
                                    <img src={world} />
                                    <p className='text-giip font-mon-light-six text-small lg:text-lg mt-2'>MARKET NEWS</p>
                                    <h1 className='text-neutral-700 font-mon-light-six text-small-ex lg:text-xl leading-0 lg:leading-7'>Gombe Lunches its first Industrial Park Along Yalamtu Deba Road</h1>
                                    <p className='text-neutral-500 font-mon-light text-small-extra lg:text-xl mt-2'>Oct 24, 2023</p>
                                </div>
                                <div>
                                    <img src={cal} />
                                    <p className='text-giip font-mon-light-six text-small lg:text-lg mt-2'>MARKET NEWS</p>
                                    <h1 className='text-neutral-700 font-mon-light-six text-small-ex lg:text-xl leading-0 lg:leading-7'>Gombe Lunches its first Industrial Park Along Yalamtu Deba Road</h1>
                                    <p className='text-neutral-500 font-mon-light text-small-extra lg:text-xl mt-2'>Oct 24, 2023</p>
                                </div>
                                <div>
                                    <img src={charts} />
                                    <p className='text-giip font-mon-light-six text-small lg:text-lg mt-2'>MARKET NEWS</p>
                                    <h1 className='text-neutral-700 font-mon-light-six text-small-ex lg:text-xl leading-0 lg:leading-7'>Gombe Lunches its first Industrial Park Along Yalamtu Deba Road</h1>
                                    <p className='text-neutral-500 font-mon-light text-small-extra lg:text-xl mt-2'>Oct 24, 2023</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-7 mt-6'>
                                <div>
                                    <img src={world} />
                                    <p className='text-giip font-mon-light-six text-small lg:text-lg mt-2'>MARKET NEWS</p>
                                    <h1 className='text-neutral-700 font-mon-light-six text-small-ex lg:text-xl leading-0 lg:leading-7'>Gombe Lunches its first Industrial Park Along Yalamtu Deba Road</h1>
                                    <p className='text-neutral-500 font-mon-light text-small-extra lg:text-xl mt-2'>Oct 24, 2023</p>
                                </div>
                                <div>
                                    <img src={cal} />
                                    <p className='text-giip font-mon-light-six text-small lg:text-lg mt-2'>MARKET NEWS</p>
                                    <h1 className='text-neutral-700 font-mon-light-six text-small-ex lg:text-xl leading-0 lg:leading-7'>Gombe Lunches its first Industrial Park Along Yalamtu Deba Road</h1>
                                    <p className='text-neutral-500 font-mon-light text-small-extra lg:text-xl mt-2'>Oct 24, 2023</p>
                                </div>
                                <div>
                                    <img src={charts} />
                                    <p className='text-giip font-mon-light-six text-small lg:text-lg mt-2'>MARKET NEWS</p>
                                    <h1 className='text-neutral-700 font-mon-light-six text-small-ex lg:text-xl leading-0 lg:leading-7'>Gombe Lunches its first Industrial Park Along Yalamtu Deba Road</h1>
                                    <p className='text-neutral-500 font-mon-light text-small-extra lg:text-xl mt-2'>Oct 24, 2023</p>
                                </div>
                            </div>
                        </div>

                        {/* update */}

                        <div>
                            <div className="tabs-bg py-10 lg:py-20 mt-16 mb-24" style={{ borderRadius: '44px' }}>
                                <h1 className='text-center text-giip font-mon-light-six text-xs lg:text-3xl '>Don't Miss Any Update</h1>
                                <p className='text-center text-neutral-400 font-mon-light text-small lg:text-xl mt-2'>Subscribe To Our News Letter And Stay Updated About <br /> Gombe</p>
                                {/* button */}
                                <div className='text-center'>
                                    <button className='button-giip w-1/2 py-2 lg:py-5 px-10 lg:px-24 rounded-lg lg:rounded-3xl text-white text-xs lg:text-lg font-mon-light my-4 lg:my-10 uppercase'>Subscribe</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default LandingPage
