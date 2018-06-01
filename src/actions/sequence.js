import { add, remove } from '../index.js'

export default {
  updateCurrentNote: newNote => _ => ({currentNote: newNote}),
  updateSequenceNote: ({ index, newNote }) => ({ sequence }) => {
    add(index, newNote)
    return {
      sequence: [
        ...sequence.slice(0, index),
        newNote,
        ...sequence.slice(index + 1)
      ]
    }
  },
  add: ({index, note}) => ({ sequence }) => {
    add(index, note)
    return {
      sequence: [
        ...sequence.slice(0, index + 1),
        note,
        ...sequence.slice(index + 1)
      ]
    }
  },
  remove: ({index}) => ({ sequence }) => {
    remove(index)
    return {
      sequence: [
        ...sequence.slice(0, index),
        ...sequence.slice(index + 1)
      ]
    }
  }
}
