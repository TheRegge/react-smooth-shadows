import React from 'react'
import Shadows from '../components/shadows'

const Story = {
  title: 'Shadows',
  component: Shadows,
}

const Template = (args) => <Shadows {...args} />

const Default = Template.bind({})

const ColorBg = Template.bind({})
ColorBg.args = {
  bgcolor: 'lavender',
}

const OneLayer = Template.bind({})
OneLayer.args = {
  numShadows: 1,
}

export default Story
export { Default, ColorBg, OneLayer }
