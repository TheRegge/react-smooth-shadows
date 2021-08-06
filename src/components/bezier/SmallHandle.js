import React from 'react'

const SmallHandle = ({ coordinates, onMouseDown }) => (
  <ellipse
    cx={coordinates.x}
    cy={coordinates.y}
    rx={2}
    ry={2}
    fill="rgb(36, 109, 245)"
    strokeWidth={2}
    onMouseDown={onMouseDown}
  />
)

export default SmallHandle
