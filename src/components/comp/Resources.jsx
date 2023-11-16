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
import EN from '../../assets/energy-1.png'
import INF from '../../assets/inf.png'
import AG from '../../assets/ag.png'

const Resources = () => {
    return (
        <div>
            <div className='mb-36'>
                {/* texts */}
                <div>
                    <h1 className='text-giip text-2xl lg:text-5xl font-mon text-center mt-14 lg:mt-32'>Streamlined Investments</h1>
                    <p className='text-neutral-400 text-center  text-xs lg:text-2xl capitalize font-mon-light mt-2 lg:mt-6'>jon us on the journey to financial prosperity in Gombe state,
                        where <br /> your investment choices today shape the lifelong opportunities of <br /> tomorrow.</p>
                </div>

                {/* main pics */}
                <div className='about-text'>
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

                {/* info accessibility */}
                <div>
                    <h1 className='text-giip text-sm lg:text-4xl font-mon-light-six text-center mt-4 lg:mt-10'>Information Accessibility</h1>
                    {/* energy */}
                    <div>
                        <img src={EN} className='w-11/12 ml-6 lg:ml-16 mt-7' />
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-3xl my-6'><span className='text-giip'>Gombe State</span>, nestled in northeastern Nigeria, stands
                            as a regional powerhouse in the realm of energy resources,
                            with a particular emphasis on sustainable and renewable energy
                            solutions. This state is renowned for its abundant potential across
                            various sectors, making it an attractive destination for investors
                            seeking to capitalize on the region's promising energy landscape.</p>

                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'><span className='text-giip'>1. Renewable Energy Hub:</span> <br />
                            Gombe State has emerged as a burgeoning hub for renewable energy development, particularly in solar and wind power. Its geographical location in the Sahel region of Africa provides it with a unique advantage — an abundance of sunlight and consistent wind patterns. This geographical feature makes Gombe State a prime location for harnessing clean, sustainable energy from these sources.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'><span className='text-giip'>2. Gombe Solar Plant:</span> <br />
                            At the forefront of this renewable energy revolution stands the Gombe Solar Plant. This ambitious project, initiated by the state government, aims to tap into the region's solar potential. It is poised to generate a substantial amount of electricity, offering a promising avenue for investors interested in solar power infrastructure and development.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>3. Solar Farms and Wind Energy Projects:</span> <br />
                            Beyond the Gombe Solar Plant, there is a growing interest in establishing solar farms and wind energy projects across the state. These endeavors are well-aligned with Nigeria's national goals of diversifying its energy mix and reducing its reliance on fossil fuels.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>4. Natural Gas Reserves:</span> <br />
                            Gombe State also boasts known reserves of natural gas. This presents a significant opportunity for investors in the oil and gas sector, as the utilization of natural gas is expanding for electricity generation, industrial processes, and as a cleaner alternative to other fossil fuels.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>5. Government Incentives:</span> <br />
                            To encourage investments in the energy sector, the Gombe State government has been actively providing incentives, regulatory support, and a conducive business environment for energy-related projects. Potential investors can explore partnerships and incentives offered by the government, which aim to facilitate and expedite energy infrastructure projects.
                        </p>

                        <p className='about-text-res text-justify font-mon-light-six text-giip leading-loose text-xl mt-6'>
                            Gombe State, with its rich energy resources and commitment to sustainability, is undoubtedly
                            a promising frontier for forward-thinking energy investors.
                        </p>
                    </div>
                    {/* infrastructure */}
                    <div>
                        <img src={INF} className='w-11/12 ml-6 lg:ml-16 mt-7' />
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-3xl my-6'><span className='text-giip'>Gombe State</span>,
                            nestled in the northeastern region of Nigeria, is
                            embarking on a transformative journey in infrastructure
                            evelopment, making it a compelling choice for forward-thinking
                            investors. Here's an in-depth exploration of the infrastructure
                            landscape in Gombe State and the numerous opportunities it presents for potential investors:</p>

                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'><span className='text-giip'>1. Transportation Infrastructure:</span> <br />
                            Gombe State has been actively improving its road infrastructure, including the construction and rehabilitation of major roads and highways. Investors in the construction, maintenance, and expansion of road networks can find opportunities in partnership with the state government.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'><span className='text-giip'>2. Power and Energy Infrastructure:</span> <br />
                            The state is investing in the expansion of its electricity generation capacity. Investors in power generation projects, including renewables, can explore opportunities to contribute to the state's energy development.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>3. Water and Sanitation Infrastructure:</span> <br />
                            Investment opportunities exist in water supply and sanitation projects, including the development of clean water sources, water treatment facilities, and distribution networks to provide access to safe drinking water for the population.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>4. Education Infrastructure:</span> <br />
                            Gombe State is striving to enhance its educational infrastructure, from primary schools to tertiary institutions. Investors interested in the education sector can explore opportunities for building and upgrading educational facilities.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>5. Housing and Real Estate Development:</span> <br />
                            The demand for affordable housing is on the rise in Gombe. Real estate investors can consider residential and commercial property development projects to cater to the growing urban population.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>6. Information and Communication Technology (ICT) Infrastructure:</span> <br />
                            Information and Communication Technology (ICT) Infrastructure: As access to ICT services expands in Gombe, there are opportunities for investment in telecommunications infrastructure, including mobile network expansion and internet connectivity projects.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>7. Regulatory Environment:</span> <br />
                            Investors should familiarize themselves with the regulatory framework for infrastructure projects in Gombe State. Understanding permits, licensing, land acquisition, and compliance with environmental and building codes is essential.
                        </p>

                        <p className='about-text-res text-justify font-mon-light-six text-giip leading-loose text-xl mt-6'>
                            Gombe State's commitment to infrastructure development offers a dynamic and promising landscape for
                            investors eager to be part of its growth and transformation.
                        </p>
                    </div>
                    {/* Agriculture */}
                    <div>
                        <img src={AG} className='w-11/12 ml-6 lg:ml-16 mt-7' />
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-3xl my-6'><span className='text-giip'>Gombe State</span>,
                            located in northeastern Nigeria, holds significant agricultural potential,
                            making it an attractive destination for investors interested in agribusiness
                            and agriculture. Here is an overview of the agriculture sector in Gombe State
                            and the opportunities it presents for investors:</p>

                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'><span className='text-giip'>1. Agricultural Diversity:</span> <br />
                            Gombe State boasts a diverse range of agricultural activities. The region is suitable for the cultivation of various crops, including maize, millet, rice, groundnuts, and cotton. Additionally, livestock farming, such as cattle, goats, and poultry, plays a vital role in the state's agricultural landscape.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'><span className='text-giip'>2. Fertile Land and Climate:</span> <br />
                            The state's fertile land, coupled with its favorable climate, makes it conducive for year-round agricultural activities. Gombe's consistent rainfall patterns and abundant sunlight create a conducive environment for crop cultivation and animal husbandry.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>3. Irrigation Potential:</span> <br />
                            Gombe State has substantial irrigation potential, especially along the Gongola River and its tributaries. Investing in irrigation projects can help enhance agricultural productivity by extending the growing season and reducing dependence on rain-fed agriculture.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>4. Value-Added Processing:</span> <br />
                            Opportunities exist for investors in the establishment of agro-processing facilities. These facilities can add value to agricultural products by processing and packaging them for local consumption and export. Processing activities can include grain milling, oil extraction, and food packaging.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>5. Livestock Farming:</span> <br />
                            Livestock farming, including cattle, sheep, and poultry, presents significant opportunities for investors. The state has a growing demand for meat and dairy products, and modernizing livestock farming practices can help meet this demand.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'> 6. Agroforestry:</span> <br />
                            Gombe State is also conducive to agroforestry practices. Investors can explore opportunities in tree planting, which can serve multiple purposes, such as timber production, fruit-bearing, and environmental conservation.
                        </p>
                        <p className='about-text-res text-justify font-mon-light text-neutral-500 leading-loose text-2xl mt-6'>
                            <span className='text-giip'>7. Market Access:</span> <br />
                            Gombe State's strategic location in Nigeria and its proximity to regional markets offer investors access to a broad consumer base. Additionally, participating in local and regional agricultural markets can facilitate trade and increase the visibility of Gombe's agricultural products.
                        </p>

                        <p className='about-text-res text-justify font-mon-light-six text-giip leading-loose text-xl mt-6'>
                            Gombe State's commitment to agricultural development, combined with its agricultural
                            potential, makes it a promising destination for agribusiness investments.
                        </p>
                    </div>
                </div>

                {/* update */}

                <div>
                    <div className="tabs-bg py-10 lg:py-20 mx-16 mt-24 mb-24" style={{ borderRadius: '44px' }}>
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
    )
}

export default Resources
