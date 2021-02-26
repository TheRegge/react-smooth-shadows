import React from 'react'
import Shadows from './components/shadows'
import BlurControl from './components/blurControl'
import ShadowsControl from './components/shadowsControl'
import OpacityControl from './components/opacityControl'
import VdistanceControl from './components/vdistanceControl'
import './App.css'

export function App() {
  return (
    <div className="wrapper">
      <main>
        <Shadows bgcolor="white" />
      </main>
      <aside>
        <div className="scroll">
          <ShadowsControl />
          <OpacityControl />
          <VdistanceControl />
          <BlurControl />
        </div>
      </aside>
    </div>
  )
}

export default App
