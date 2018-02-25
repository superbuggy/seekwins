export default {
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
  add: event => ({ sequence }) => ({ sequence: [...sequence, event.target.value] }),
  remove: event => ({ sequence }) => ({ sequence: sequence.filter(item => item !== event.target.value) })
}
