export default {
  updateCurrentNote: newNote => {
    console.log(`that's right`)
    return state => {
      return { currentNote: newNote }
    }
  },
  updateSequence: ({ index, newNote }) => ({ sequence }) => ({
    sequence: [
      ...sequence.slice(0, index),
      newNote,
      ...sequence.slice(index + 1)
    ]
  }),
  add: ({index, note}) => ({ sequence, sequencer }) => {
    sequencer && sequencer.add(index, note)
    return {
      sequence: [
        ...sequence.slice(0, index + 1),
        note,
        ...sequence.slice(index + 1)
      ]
    }
  },
  remove: ({index}) => ({ sequence, sequencer }) => {
    sequencer && sequencer.remove(index)
    return {
      sequence: [
        ...sequence.slice(0, index),
        ...sequence.slice(index + 1)
      ]
    }
  }
}
