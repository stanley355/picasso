import { cookies } from 'next/headers'
import React from 'react'
import AuthenticatedHeader from './AuthenticatedHeader'
import NoTokenHeader from './NoTokenHeader'

const HeaderRight = () => {
  const token = cookies().get('token')

  if (token?.value) {
    return <AuthenticatedHeader />
  }

  return <NoTokenHeader />
}

export default HeaderRight  