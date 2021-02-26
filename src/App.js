import React from 'react'
import Shadows from './components/shadows'
import BlurControl from './components/blurControl'
import ShadowsControl from './components/shadowsControl'
import OpacityControl from './components/opacityControl'
import VdistanceControl from './components/vdistanceControl'
import SpreadControl from './components/spreadControl'
import GitHubIcon from '@material-ui/icons/GitHub'
import './App.css'

export function App() {
  return (
    <div className="wrapper">
      <main>
        <div className="intro">
          <p>Smooth Shadow Generator</p>
          <p>
            A shameless exercise, reengineering{' '}
            <a href="https://brumm.af/shadows">brumm.af's original</a>.{' '}
          </p>
          <p>
            <a href="https://github.com/TheRegge/react-smooth-shadows">
              <GitHubIcon />
            </a>
          </p>
        </div>
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
