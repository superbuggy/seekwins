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
  updateSequence: ({ oldNote, newNote }) => ({ sequence }) => {
    const index = sequence.indexOf(oldNote)
    console.log(oldNote, newNote, index)
    return {
      sequence: [
        ...sequence.slice(0, index),
        newNote,
        ...sequence.slice(index + 1)
      ]
    }
  },
  add: (e, note) => ({ sequence }) => ({ sequence: [...sequence, note] }),
  remove: (e, note) => ({ sequence }) => ({ sequence: sequence.filter(item => item !== note) }),
  sequence: _ => ({sequence}) => sequence,
  updateNote: newNote => _ => ({currentNote: newNote})
}
