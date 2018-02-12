import Tone from 'tone'

const sequence = ['D#3', 'D3', 'G3', 'A3', 'A#3']

export default {
  sequence,
  currentNote: sequence[0],
  transport: Tone.Transport,
}
