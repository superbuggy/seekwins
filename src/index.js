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

if (process.env.NODE_ENV !== 'production') {
  seekwins = devtools(app)(...config)
} else {
  seekwins = app(...config)
}

const toneMicro = new ToneMicroApp(seekwins)

console.log(toneMicro)

export const start = () => {
  toneMicro.start()
}
export const stop = () => {
  toneMicro.stop()
}

export const add = (index, note) => {
  toneMicro.add(index, note)
}
export const remove = (index) => {
  toneMicro.remove(index)
}
