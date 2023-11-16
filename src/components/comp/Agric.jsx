import React from 'react'

const Agric = () => {
    return (
        <div>
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
        </div >
    )
}

export default Agric
