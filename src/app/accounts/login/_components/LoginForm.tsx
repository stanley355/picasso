import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const LoginForm = () => {
  return (
    <form>
      <Label htmlFor='emailInput'>Email address</Label>
      <Input type='email' id='emailInput' name='email' className='mb-4' />
      <Label htmlFor='passInput'>Password</Label>
      <Input type='password' id='passInput' name='password' className='mb-4' />
      <Button type='submit' className='w-full'>Login</Button>
    </form>
  )
}

export default LoginForm