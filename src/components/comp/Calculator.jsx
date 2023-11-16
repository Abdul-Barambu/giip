import React, { useState } from 'react'
import AI from '../../assets/ai.png'

const Calculator = () => {

    // term
    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)

    // amount
    const [fifty, setFifty] = useState(false)
    const [hundred, setHundred] = useState(false)
    const [oneFifty, setOneFifty] = useState(false)
    const [twoHundred, setTwoHundred] = useState(false)


    // terms
    const handleOne = () => {
        setOne(true)
        setTwo(false)
        setThree(false)
        setFour(false)
    }
    const handleTwo = () => {
        setOne(false)
        setTwo(true)
        setThree(false)
        setFour(false)
    }
    const handleThree = () => {
        setOne(false)
        setTwo(false)
        setThree(true)
        setFour(false)
    }
    const handleFour = () => {
        setOne(false)
        setTwo(false)
        setThree(false)
        setFour(true)
    }

    // amount
    const handleFifty = () => {
        setFifty(true)
        setHundred(false)
        setOneFifty(false)
        setTwoHundred(false)
    }
    const handleHundred = () => {
        setFifty(false)
        setHundred(true)
        setOneFifty(false)
        setTwoHundred(false)
    }
    const handleOneFifty = () => {
        setFifty(false)
        setHundred(false)
        setOneFifty(true)
        setTwoHundred(false)
    }
    const handleTwoHundred = () => {
        setFifty(false)
        setHundred(false)
        setOneFifty(false)
        setTwoHundred(true)
    }

    return (
        <div>
            <div>
                <h1 className='font-mon-light-six text-giip text-center text-5xl'>Investment Calculator</h1>

                {/* cal */}
                <div className="tabs-bg pt-4 pb-14 px-16 mx-16 mt-7 mb-24 rounded-lg">
                    {/* ai logo */}
                    <div className='flex justify-center items-center gap-4'>
                        <img src={AI} />
                        <span className='font-mon-light-six text-2xl text-neutral-400'>Powered By AI</span>
                    </div>
                    {/* type */}
                    <div>
                        <div className='mt-28'>
                            <h1 className='font-mon-light-six text-giip text-2xl pb-4'>Investment Type</h1>
                            <div className='bg-white py-4 pl-10 w-1/2 text-base font-mon-light-six text-neutral-500 rounded-xl'>
                                <span className=''>Fish Farming</span>
                            </div>
                        </div>
                    </div>

                    {/* term */}
                    <div className='mt-16'>
                        <h1 className='font-mon-light-six text-giip text-2xl pb-4'>Investment Term</h1>
                        <div className='flex items-center justify-between'>
                            <span className={`${one ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-14 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleOne}>1 Year</span>
                            <span className={`${two ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-14 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleTwo}>2 Year</span>
                            <span className={`${three ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-14 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleThree}>3 Year</span>
                            <span className={`${four ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-14 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleFour}>4 Year</span>
                            <input type="text" placeholder='Input Years'
                                className='bg-white py-3 px-3 text-base font-mon-light-six text-neutral-500 outline-none rounded-xl placeholder:text-neutral-500 placeholder:text-center'
                            />
                        </div>
                    </div>

                    {/* amount */}
                    <div className='mt-10'>
                        <h1 className='font-mon-light-six text-giip text-2xl pb-4'>Investment Amount</h1>
                        <div className='flex items-center justify-between'>
                            <span className={`${fifty ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-16 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleFifty}>$50</span>
                            <span className={`${hundred ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-16 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleHundred}>$100</span>
                            <span className={`${oneFifty ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-16 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleOneFifty}>$150</span>
                            <span className={`${twoHundred ? 'button-giip text-white' : 'bg-white text-neutral-500'} py-4 px-16 text-base font-mon-light-six rounded-xl cursor-pointer`} onClick={handleTwoHundred}>$200</span>
                            <input type="text" placeholder='$ Amount'
                                className='bg-white py-3 px-3 text-base font-mon-light-six text-neutral-500 outline-none rounded-xl placeholder:text-neutral-500 placeholder:text-center'
                            />
                        </div>
                    </div>

                    {/* button */}
                    <div>
                        <button className='button-giip w-2/5 py-2 lg:py-5 px-10 lg:px-24 rounded-2xl lg:rounded-3xl text-white text-base font-mon-light my-4 lg:my-10 uppercase'>Generate Possibilities</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
