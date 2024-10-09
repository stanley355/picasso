'use client'
import Link from 'next/link'
import { useShallow } from 'zustand/shallow'
import { useLoginStore } from '../_stores/useLoginStore'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LoginForm = () => {
  const { isLoading } = useLoginStore(
    useShallow((state) => ({ isLoading: state.isLoading })),
  );

  return (
    <form>
      <Label htmlFor='emailInput'>Email address</Label>
      <Input type='email' id='emailInput' name='email' className='mb-4' />
      <div className='flex items-center justify-between mb-1'>
        <Label htmlFor='passInput'>Password</Label>
        <Link className='underline text-xs' href="/accounts/forgot-password">forgot password</Link>
      </div>
      <Input type='password' id='passInput' name='password' className='mb-4' />
      <Button type='submit' className='w-full' disabled={isLoading}>Login</Button>
    </form>
  )
}

export default LoginForm