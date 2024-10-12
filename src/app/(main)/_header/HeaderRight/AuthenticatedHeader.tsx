import Link from 'next/link'
import { LuUser } from 'react-icons/lu'

const AuthenticatedHeader = () => {
  return (
    <div className='mr-2 md:mr-4'>
      <Link href="/accounts" className=''>
        <LuUser className='text-xl text-foreground bg-background rounded-full' />
      </Link>
    </div>
  )
}

export default AuthenticatedHeader