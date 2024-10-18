import React from 'react'
import { LuBinary } from 'react-icons/lu'

const HeaderLeftLogo = () => {
  return (
    <div className="flex items-center">
      <LuBinary className='text-3xl' />
      <span className='text-lg font-semibold'>01AI Platform</span>
    </div>
  )
}

export default HeaderLeftLogo