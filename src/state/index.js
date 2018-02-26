import Tone from 'tone'
import sequencerActions from '../actions/sequencer'
import { callback } from '../components/Main'

// valid notes: "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"
const sequence = ['Eb3', 'D3', 'G3', 'A3', 'Bb3']

export default {
  sequence,
  sequencer: sequencerActions.initSequencer(callback)({sequence}),
  currentNote: sequence[0],
  transport: Tone.Transport
}
