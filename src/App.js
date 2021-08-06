import React from 'react'
import AppHeader from './components/AppHeader'
import Shadows from './components/shadows'
import BlurControl from './components/blurControl'
import ShadowsControl from './components/shadowsControl'
import OpacityControl from './components/opacityControl'
import VdistanceControl from './components/vdistanceControl'
import SpreadControl from './components/spreadControl'
import './App.css'

export function App() {
  return (
    <div className="wrapper">
      <main>
        <AppHeader />
        <Shadows bgcolor="white" />
      </main>
      <aside>
        <div className="scroll">
          <ShadowsControl />
          <OpacityControl />
          <VdistanceControl />
          <BlurControl />
          <SpreadControl />
        </div>
      </aside>
    </div>
  )
}

export default App
