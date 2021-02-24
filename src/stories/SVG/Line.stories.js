import React from 'react'
import Line from '../../components/bezier/Line'

export default {
  title: 'SVG/Line',
  component: Line,
  argTypes: {
    color: { control: 'color' },
  },
}

const Template = (args) => (
  <div style={{ width: '100%', height: '100px' }}>
    <svg viewBox={'0 0 100 100'} style={{ width: '100%', height: '100%' }}>
      <Line {...args} />
    </svg>
  </div>
)
const Default = Template.bind({})
Default.args = {
  from: { x: 0, y: 0 },
  to: { x: 100, y: 100 },
}

export { Default }
