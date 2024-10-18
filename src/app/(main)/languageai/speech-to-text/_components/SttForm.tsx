'use client'
import React from 'react'
import SttAudioInput from './SttAudioInput'
import DiffSelect from '../../_components/DiffSelect'
import SttLanguageSelect from './SttLanguageSelect'
import SttGranularitySelect from './SttGranularitySelect'
import { Button } from '@/components/ui/button'

const SttForm = () => {

  const handleAction = (formData: FormData) => {
    const b = Object.fromEntries(formData)
    console.log(b);

  }

  return (
    <form className='flex-1 h-full flex flex-col' action={handleAction}>
      <SttAudioInput />
      <div className='p-4 flex flex-col gap-4'>
        <SttLanguageSelect />
        <div className='flex gap-4 justify-end' >
          <SttGranularitySelect />
          <DiffSelect />
          <Button className='h-10'>
            Convert
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SttForm