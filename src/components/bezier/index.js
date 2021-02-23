import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Line from "./Line";
import Curve from "./Curve";
import LargeHandle from "./LargeHandle";
import SmallHandle from "./SmallHandle";

/**
 * Simple cubic Bezier curve with control handles
 *
 * @param {*} { viewBoxWidth, viewBoxHeight, callback, easing }
 */
const Bezier = ({
  callback,
  curveColor,
  easing,
  finalValue,
  observers,
  strokeWidth,
  viewBoxHeight,
  viewBoxWidth,
}) => {
  // ----------------------------
  // ENABLE BEZIER CURVE PRESETS
  // ----------------------------

  // const easings = ["in", "inout"];
  // easing = easings.includes(easing) ? easing : "inout";
  const easingControls = {
    in: {
      start: { x: viewBoxWidth * 0.75, y: viewBoxHeight * 0.9 },
      end: { x: viewBoxWidth * 0.9, y: viewBoxHeight * 0.9 },
    },
    inout: {
      start: { x: viewBoxWidth * 0.1225, y: viewBoxHeight * 0.5 },
      end: { x: viewBoxWidth * 0.8775, y: viewBoxHeight * 0.5 },
    },
  };

  // ------------------
  // SET INITIAL STATE
  // ------------------

  // The initial SVG points
  // plus the variable which will hold
  // the ID of the point being dragged
  const initPointsState = {
    startPoint: { x: 0, y: viewBoxHeight },
    endPoint: { x: viewBoxWidth, y: 0 },
    controlPointStart: {
      x: easingControls[easing].start.x,
      y: easingControls[easing].start.y,
    },
    controlPointEnd: {
      x: easingControls[easing].end.x,
      y: easingControls[easing].end.y,
    },
    draggingPointId: null,
    midPointLeft: { x: 0, y: viewBoxHeight / 2 },
    midPointRight: { x: viewBoxWidth, y: viewBoxHeight / 2 },
    midPointTop: { x: viewBoxWidth / 2, y: 0 },
    midPointBottom: { x: viewBoxWidth / 2, y: viewBoxHeight },
  };

  // Set initial Bezier curve points
  const [points, setPoints] = useState(initPointsState);

  // The variable which will contain the
  // reference to the SVG DOM element
  let node;

  // The instructions for drawing the
  // SVG in its initial state
  const instructions = `
  M ${points.startPoint.x},${points.startPoint.y}
  C ${points.controlPointStart.x},${points.controlPointStart.y},${points.controlPointEnd.x},${points.controlPointEnd.y}
    ${points.endPoint.x},${points.endPoint.y}
`;

  const getValues = () => {
    let arr = [];
    for (let i = 1; i <= observers; i++) {
      arr.push(getYatT(i / observers) * finalValue);
    }
    return arr;
  };

  useEffect(() => {
    callback(getValues());
  }, [finalValue, observers, callback]);

  /**
   * Handler for the mousedown event
   * @param {string} pointId  The reference to the selected point (not a DOM ID)
   */
  const handleMouseDown = (pointId) => {
    setPoints({
      ...points,
      draggingPointId: pointId,
    });
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    if (!points.draggingPointId) {
      return;
    }

    const svgRect = node.getBoundingClientRect();
    const svgX = clientX - svgRect.left;
    const svgY = clientY - svgRect.top;
    const viewBoxX = (svgX * viewBoxWidth) / svgRect.width;
    const viewBoxY = (svgY * viewBoxHeight) / svgRect.height;

    setPoints({
      ...points,
      [points.draggingPointId]: { x: viewBoxX, y: viewBoxY },
    });
    callback(getValues());
  };

  const handleMouseUp = () => {
    setPoints({
      ...points,
      draggingPointId: null,
    });
  };

  const getYatT = (t) => {
    const p0y = 1;
    const p1y = points.controlPointStart.y / viewBoxHeight;
    const p2y = points.controlPointEnd.y / viewBoxHeight;
    const p3y = 0;

    // 1 minus (bezier formula) because we need to inverse
    // the results, since on-scren Y coordinates go downward,
    // but humans see positive growth go upward
    let y =
      1 -
      ((1 - t) ** 3 * p0y +
        3 * ((1 - t) ** 2 * p1y) +
        3 * (1 - t) * t ** 2 * p2y +
        t ** 3 * p3y);
    if (y < 0) y = 0;
    if (y > 1) y = 1;
    return y;
  };

  return (
    <svg
      ref={(n) => (node = n)}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      onMouseMove={(ev) => handleMouseMove(ev)}
      onMouseUp={() => handleMouseUp()}
      style={{
        backgroundColor: "white",
        overflow: "visible",
        width: "100%",
      }}
    >
      <Line
        from={points.midPointLeft}
        to={points.midPointRight}
        strokeWidth={0.3}
      />
      <Line
        from={points.midPointTop}
        to={points.midPointBottom}
        strokeWidth={0.3}
      />
      <Line
        color="rgb(244, 0, 137)"
        dash={[3, 3]}
        from={points.startPoint}
        to={points.controlPointStart}
      />
      <Line
        from={points.controlPointEnd}
        to={points.endPoint}
        color="rgb(244, 0, 137)"
        dash={[3, 3]}
      />
      <Curve
        instructions={instructions}
        strokeWidth={strokeWidth}
        color={curveColor}
      />
      <SmallHandle coordinates={points.startPoint} />
      <SmallHandle coordinates={points.endPoint} />
      <LargeHandle
        coordinates={points.controlPointStart}
        onMouseDown={() => handleMouseDown("controlPointStart")}
        radi={{ x: 3, y: 3 }}
      />
      <LargeHandle
        coordinates={points.controlPointEnd}
        onMouseDown={() => handleMouseDown("controlPointEnd")}
        radi={{ x: 3, y: 3 }}
      />
    </svg>
  );
};

Bezier.propTypes = {
  /**
   * What easing type will be show on init
   */
  easing: PropTypes.oneOf(["inout", "in"]),
  /**
   * The width of the SVG Viewbox
   */
  viewBoxWidth: PropTypes.number,
  /**
   * The height of the SVG Viewbox
   */
  viewBoxHeight: PropTypes.number,
  /**
   * The callback function called when the
   * SVG control points are moved
   */
  callback: PropTypes.func,
  /**
   * The number of points to observe on
   * the curve
   */
  observers: PropTypes.number,
};

Bezier.defaultProps = {
  curveColor: "rgb(36, 109, 245)",
  easing: "inout",
  viewBoxWidth: 400,
  viewBoxHeight: 100,
  strokeWidth: 2,
};

export default Bezier;
