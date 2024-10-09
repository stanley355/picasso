'use client'
import { useShallow } from 'zustand/shallow';
import { useLoginStore } from '../_stores/useLoginStore'
import { cn } from '@/lib/utils';

const LoginErrorBox = () => {
  const { errorMsg } = useLoginStore(
    useShallow((state) => ({ errorMsg: state.errorMsg })),
  );

  return (
    <div className={cn('text-red-500 p-2 border border-red-500 rounded-lg mx-auto mb-4 w-fit', errorMsg ? 'block' : 'hidden')}>{errorMsg}</div>
  )
}

export default LoginErrorBox