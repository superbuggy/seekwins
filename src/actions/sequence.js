export default {
  updateCurrentNote: newNote => _ => ({currentNote: newNote}),
  updateSequence: ({ index, newNote }) => ({ sequence }) => ({
    sequence: [
      ...sequence.slice(0, index),
      newNote,
      ...sequence.slice(index + 1)
    ]
  }),
  add: ({index, note}) => ({ sequence }) => ({
    sequence: [
      ...sequence.slice(0, index + 1),
      note,
      ...sequence.slice(index + 1)
    ]
  }),
  remove: ({index}) => ({ sequence }) => ({
    sequence: [
      ...sequence.slice(0, index),
      ...sequence.slice(index + 1)
    ]
  })
}
