import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

const Accounts = () => {
  const token = cookies().get('token');

  if (!token?.value) {
    redirect('/accounts/login/')
  }

  return (
    <div>page</div>
  )
}

export default Accounts 