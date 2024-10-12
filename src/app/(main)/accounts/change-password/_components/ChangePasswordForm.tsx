'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { changeUserPassword } from '@/lib/api/author/users/changeUserPassword'
import { useState } from 'react'

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleAction = async (formData: FormData) => {
    const oldPassword = formData.get('oldPassword') as string;
    const newPassword = formData.get('newPassword') as string;
    const newRepassword = formData.get('newRepassword') as string;

    if (!oldPassword) {
      setErrorMsg("Old password can't be empty");
      return;
    }
    if (!newPassword) {
      setErrorMsg("New Password can't be empty");
      return;
    }
    if (!newRepassword) {
      setErrorMsg("Retype New Password can't be empty");
      return;
    }

    if (newPassword.length < 4) {
      setErrorMsg("Invalid new password: 4 characters minimum");
      return;
    }

    if (newPassword !== newRepassword) {
      setErrorMsg(
        "Invalid new password: New Password is not similar to Retyped new password"
      );
      return;
    }

    setErrorMsg('');
    setIsLoading(true)
    try {
      const requestBody = {
        old_password: oldPassword,
        new_password: newPassword,
        new_password_again: newRepassword
      }
      const changePass = await changeUserPassword(requestBody)
      setIsLoading(false)
      if (changePass.token) {
        setErrorMsg('Password successfully changed!');
      }
      return;
    } catch (error: any) {
      setIsLoading(false)
      setErrorMsg(error.message);
      return
    }
  }

  return (
    <form className='w-full md:max-w-80' action={handleAction}>
      <Label htmlFor='oldPasswordInput'>Old Password</Label>
      <Input type='password' id='oldPasswordInput' name='oldPassword' className='mb-4' />
      <Label htmlFor='newPasswordInput'>New Password</Label>
      <Input type='password' id='newPasswordInput' name='newPassword' className='mb-4' />
      <Label htmlFor='newRepasswordInput'>Retype New Password</Label>
      <Input type='password' id='newRepasswordInput' name='newRepassword' className='mb-4' />
      <Button type='submit' className='mb-4' disabled={isLoading}>{isLoading ? 'Changing...' : 'Submit'}</Button>
      {errorMsg && <div>* {errorMsg}</div>}
    </form>
  )
}

export default ChangePasswordForm