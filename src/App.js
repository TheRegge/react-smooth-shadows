import React, { useState } from "react";
import Shadows from "./components/shadows";
import InputSlider from "./components/ui/InputSlider";
import Toolbox from "./components/ui/Toolbox";
import InputCheckbox from "./components/ui/InputCheckbox";
import Bezier from "./components/bezier";
import "./App.css";

function App() {
  const [alphas, setAlphas] = useState([]);
  const [reversedAlphas, setReversedAlphas] = useState(false);
  const [finalAlpha, setFinalAlpha] = useState(0.07);
  const [finalBlur, setFinalBlur] = useState(80);
  const [blurs, setBlurs] = useState([]);
  const [vDistances, setVdistances] = useState([]);
  const [finalVdistance, setFinalVdistance] = useState(100);
  const [numShadows, setNumShadows] = useState(6);

  const adjustFinalAlpha = (alpha) => {
    setFinalAlpha(alpha / 100);
  };
  

  const reverseAlphas = (e) => {
    setReversedAlphas(e.target.checked);
  }

  return (
    <div className="wrapper">
      <main>
        <Shadows
          bgcolor="white"
          alphas={alphas}
          blurs={blurs}
          finalDistance={100}
          numShadows={numShadows}
          reversed={reversedAlphas}
          vDistances={vDistances}
        />
      </main>
      <aside>
        <Toolbox label="Shadows number" counter={numShadows}>
          <InputSlider
            callback={setNumShadows}
            value={numShadows}
            max={10}
            min={1}
          />
        </Toolbox>
        <Toolbox label="Final opacity" counter={`${finalAlpha}`}>
          <InputSlider
            callback={adjustFinalAlpha}
            max={100}
            min={0}
            value={finalAlpha * 100}
          />
          <Bezier
            callback={setAlphas}
            easing="inout"
            finalValue={finalAlpha}
            observers={numShadows}
            strokeWidth={1}
            viewBoxHeight={40}
            viewBoxWidth={200}
          />
          <InputCheckbox
            aria-label="Checkbox reverse opacity"
            label="Reverse opacity"
            onChange={reverseAlphas}
          />
        </Toolbox>
        <Toolbox label="Vertical distance" counter={`${finalVdistance}px`}>
          <InputSlider
            callback={setFinalVdistance}
            value={finalVdistance}
            min={0}
            max={500}
          />
          <Bezier
            callback={setVdistances}
            easing="in"
            finalValue={finalVdistance}
            observers={numShadows}
            strokeWidth={1}
            viewBoxHeight={50}
            viewBoxWidth={200}
          />
        </Toolbox>
        <Toolbox label="Final blur strength" counter={`${finalBlur}px`}>
          <InputSlider
            callback={setFinalBlur}
            value={finalBlur}
            min={0}
            max={500}
          />
          <Bezier
            callback={setBlurs}
            easing="in"
            finalValue={finalBlur}
            observers={numShadows}
            strokeWidth={1}
            viewBoxHeight={50}
            viewBoxWidth={200}
          />
        </Toolbox>
      </aside>
    </div>
  );
}

export default App;
