'use client'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button variant="secondary" size="icon" className='h-8 w-8' onClick={() => {
      resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
    }}>
      {resolvedTheme === 'light' && <MdDarkMode />}
      {resolvedTheme === 'dark' && <MdLightMode />}
    </Button>
  )
}

export default ThemeButton