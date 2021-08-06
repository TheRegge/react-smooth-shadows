import React from 'react'
import Bezier from '../../components/bezier'

const Story = {
  title: 'SVG/Bezier Cubic Curve',
  component: Bezier,
  argTypes: {
    easing: {
      control: {
        type: 'select',
        options: ['inout', 'in'],
      },
    },
    callback: { action: 'callback' },
    curveColor: { control: 'color' },
  },
}

const Template = (args) => <Bezier {...args} />
const Default = Template.bind({})

const InOut = Template.bind({})
InOut.args = {
  viewBoxWidth: 400,
  viewBoxHeight: 100,
  easing: 'inout',
}
InOut.storyName = 'Easing "in-out" preset'

const In = Template.bind({})
In.args = {
  ...InOut.args,
  easing: 'in',
}
In.storyName = 'Easing "in" preset'

export default Story
export { Default, InOut, In }
