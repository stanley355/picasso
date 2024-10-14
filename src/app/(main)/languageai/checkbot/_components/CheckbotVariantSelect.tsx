'use client'
import { Tooltip } from 'react-tooltip'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { SelectValue } from '@radix-ui/react-select'

const CheckbotVariantSelect = () => {
  return (
    <div>
      <Select
        name='variant'
        defaultValue="1"
      >
        <SelectTrigger id='variant'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Variant: 1</SelectItem>
          <SelectItem value="2">Variant: 2</SelectItem>
          <SelectItem value="3">Variant: 3</SelectItem>
        </SelectContent>
      </Select>
      <Tooltip anchorSelect="#variant" className='hidden md:block'>
        <div>How many text completion choices to</div>
        <div>generate for each input message</div>
      </Tooltip>
    </div>
  )
}

export default CheckbotVariantSelect