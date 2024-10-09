
'use client'
import { useShallow } from 'zustand/shallow'
import { useRegisterStore } from '../_stores/useRegisterStore'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const RegisterForm = () => {
  const { isLoading, updateStore } = useRegisterStore(
    useShallow((state) => ({ isLoading: state.isLoading, updateStore: state.updateStore })),
  );

  // const handleSubmit = async (formData: FormData) => {
  //   updateStore('isLoading', true);
  //   updateStore('errorMsg', '')
  //   const email = formData.get('email') as string
  //   const password = formData.get('password') as string

  //   if (!password) {
  //     updateStore('errorMsg', "Password can't be empty");
  //     return;
  //   }

  //   try {
  //     const user = await loginUser(email, password)
  //     updateStore('isLoading', false);

  //     // TODO: Redirect user to acc page
  //     return;
  //   } catch (error: any) {
  //     updateStore('isLoading', false);
  //     updateStore('errorMsg', error.message);
  //     return;
  //   }
  // }

  return (
    <form >
      <Label htmlFor='fullnameInput'>Fullname</Label>
      <Input type='text' id='fullnameInput' name='fullname' className='mb-4' />
      <Label htmlFor='emailInput'>Email address</Label>
      <Input type='email' id='emailInput' name='email' className='mb-4' />
      <Label htmlFor='passInput'>Password</Label>
      <Input type='password' id='passInput' name='password' className='mb-4' />
      <Label htmlFor='repassInput'>Retype Password</Label>
      <Input type='password' id='repassInput' name='repassword' className='mb-4' />
      <Button type='submit' className='w-full' >Register</Button>
    </form>
  )
}

export default RegisterForm 