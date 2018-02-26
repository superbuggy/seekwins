import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/Main'
import Tone from 'tone'
import devtools from 'hyperapp-redux-devtools'
import ToneMicroApp from './toneMicroApp'

let config = [
  state,
  actions,
  view,
  document.body
]

let seekwins
let toneMicro

if (process.env.NODE_ENV !== 'production') {
  seekwins = devtools(app)(...config)
  toneMicro = new ToneMicroApp(seekwins)
} else {
  seekwins = app(...config)
  toneMicro = new ToneMicroApp(seekwins)
}

export const start = () => {
  toneMicro.start()
}
export const stop = () => {
  toneMicro.stop()
}
