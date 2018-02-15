import Tone from 'tone'
import { start, stop } from '../index.js'

export default {
  start: () => ({ transport }) => {
    start()
    transport.start()
    return { transport }
  },
  stop: () => ({ transport }) => {
    stop()
    transport.stop()
    return { transport }
  },
  updateNote: currentNote => _ => ({currentNote}),
  updateSequence: (event, index) => ({ sequence }) => ({
    sequence: [
      ...sequence.slice(0,index),
      event.target.value,
      ...sequence.slice(index + 1)
    ]
  }),
  add: (e, note) => ({ sequence }) => ({ sequence: [...sequence, note] }),
  remove: (e, note) => ({ sequence }) => ({ sequence: sequence.filter(item => item !== note) }),
  sequence: _ => ({sequence}) => sequence
}
