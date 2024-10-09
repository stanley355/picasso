import React from 'react'

type TAccountLayout = {
  children: React.ReactNode
}

const AccountLayout = ({ children }: TAccountLayout) => {
  return (
    <div className='h-screen w-full'>
      {children}
    </div>
  )
}

export default AccountLayout 