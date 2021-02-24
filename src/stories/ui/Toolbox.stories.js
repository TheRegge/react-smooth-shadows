import React from 'react'
import Toolbox from '../../components/ui/Toolbox'

export default {
  title: 'UI/Toolbox',
  component: Toolbox,
}

const Template = (args) => (
  <Toolbox {...args}>
    <p>Some child node</p>
  </Toolbox>
)

const Default = Template.bind({})

const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'A label',
}

const WithCounter = Template.bind({})
WithCounter.args = { counter: '123' }

const WithBoth = Template.bind({})
WithBoth.args = { label: 'A label', counter: '123' }

export { Default, WithLabel, WithCounter, WithBoth }
