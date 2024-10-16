'use client'
import { Panel, PanelGroup } from 'react-resizable-panels'
import CheckbotForm from './CheckbotForm'

const CheckbotMobile = () => {
  return (
    <PanelGroup direction='vertical'>
      <Panel defaultSize={100}>
        <CheckbotForm />
      </Panel>
    </PanelGroup>
  )
}

export default CheckbotMobile