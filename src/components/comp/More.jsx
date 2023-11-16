import React, { useState } from 'react'
import Calculator from './Calculator'

const More = () => {

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <div>
        <div className="tabs-bg py-14 px-10 mx-16 mt-16 mb-24 rounded-lg">
          <div className='flex items-center justify-between'>
            <p className='bg-white py-3 px-14 text-center font-mon-light text-xl rounded-xl cursor-pointer'>Investment Guides</p>
            <p className='bg-white py-3 px-14 text-center font-mon-light text-xl rounded-xl cursor-pointer' onClick={handleModal}>Investment Calculator</p>
            <p className='bg-white py-3 px-14 text-center font-mon-light text-xl rounded-xl cursor-pointer'>Community & Support</p>
          </div>
        </div>
      </div>

      {/* Investment calculator */}
      {
        modal && (
          <Calculator />
        )
      }

    </div>
  )
}

export default More
