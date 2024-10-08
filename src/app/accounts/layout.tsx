import React from 'react'

type TAccountLayout = {
  children: React.ReactNode
}

const AccountLayout = ({ children }: TAccountLayout) => {
  return (
    <div className='h-screen w-full'>
      <h1 className='text-center text-xl font-bold py-4'>AI</h1>
      {children}
    </div>
  )
}

export default AccountLayout 