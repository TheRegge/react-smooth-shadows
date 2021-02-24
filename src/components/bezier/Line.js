import React from 'react'
import PropTypes from 'prop-types'

const Line = ({ from, to, color, strokeWidth, dash }) => (
  <line
    x1={from.x}
    y1={from.y}
    x2={to.x}
    y2={to.y}
    stroke={color}
    strokeWidth={strokeWidth}
    strokeDasharray={dash}
  />
)

Line.defaultProps = {
  color: '#cccccc',
  strokeWidth: 1,
}

Line.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  from: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  to: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  dash: PropTypes.array,
}

export default Line
