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
  add: (e, note) => ({ sequence }) => ({ sequence: [...sequence, note] }),
  remove: (e, note) => ({ sequence }) => ({ sequence: sequence.filter(item => item !== note) }),
  sequence: _ => ({sequence}) => sequence
}
