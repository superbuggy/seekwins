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

const newSequence = callback => new Tone.Sequence(callback, seekwins.sequence(), '8n')

const updateTonalSequence = function (time, note) {
  const index = sequencer.progress * sequencer.length
  console.log(index, time)
  seekwins.updateCurrentNote(note)
}

export const start = () => {
  console.log('start')
  sequencer = newSequence(updateTonalSequence)
  sequencer.start()
}

export const stop = () => sequencer.dispose()
