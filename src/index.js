import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/Main'
import Tone from 'tone'
import devtools from 'hyperapp-redux-devtools'

let seekwins

if (process.env.NODE_ENV !== 'production') {
  seekwins = devtools(app)(
    state,
    actions,
    view,
    document.body,
  )
} else {
  seekwins = app(
    state,
    actions,
    view,
    document.body,
  )
}

let sequencer

const newSequence = (callback) => new Tone.Sequence(callback, seekwins.sequence(), '8n')
const update = function (time, note) {
  console.log(sequencer.progress)
  seekwins.updateNote(note)
}

export const start = () => {
  sequencer = newSequence(update)
  sequencer.start()
}

export const stop = () => sequencer.dispose()
