import React from 'react'
import LargeHandle from '../../components/bezier/LargeHandle'

export default {
  title: 'SVG/LargeHandle',
  component: LargeHandle,
  argTypes: {
    fillColor: { control: 'color' },
    strokeColor: { control: 'color' },
  },
}

const Template = (args) => (
  <div style={{ width: '100%', height: '100px' }}>
    <svg viewBox={'0 0 100 100'} style={{ width: '100%', height: '100%' }}>
      <LargeHandle {...args} />
    </svg>
  </div>
)

const Default = Template.bind({})
Default.args = {
  coordinates: { x: 50, y: 50 },
  strokeColor: 'rgb(255, 199, 219)',
  strokeWidth: 4,
  fillColor: 'rgb(244, 0, 137)',
  radi: { x: 20, y: 20 },
}

export { Default }
