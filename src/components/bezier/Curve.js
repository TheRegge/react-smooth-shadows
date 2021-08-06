import React from 'react'

const Curve = ({ color, instructions, strokeWidth }) => (
  <path d={instructions} fill="none" stroke={color} strokeWidth={strokeWidth} />
)

Curve.defaultProps = {
  color: 'rgb(36, 109, 245)',
  instructions: `
  M 0, 0
  C 25,50,75,50
    100,0
`,
  strokeWidth: 2
}

export default Curve
