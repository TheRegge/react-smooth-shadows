import React from 'react'
import PropTypes from 'prop-types'

const LargeHandle = ({
  coordinates,
  fillColor,
  onMouseDown,
  radi,
  strokeColor,
  strokeWidth,
}) => (
  <ellipse
    cx={coordinates.x}
    cy={coordinates.y}
    rx={radi.x}
    ry={radi.y}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    onMouseDown={onMouseDown}
    style={{ cursor: '-webkit-grab' }}
  />
)

LargeHandle.defaultProps = {
  coordinates: { x: 4, y: 4 },
  fillColor: 'white',
  radi: { x: 4, y: 4 },
  strokeColor: 'rgb(244, 0, 137)',
  strokeWidth: 1,
}

LargeHandle.propTypes = {
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  fillColor: PropTypes.string,
  onMouseDown: PropTypes.func,
  radi: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
}

export default LargeHandle
