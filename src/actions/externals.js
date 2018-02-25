export default {
  sequence: _ => ({sequence}) => sequence,
  updateNote: newNote => _ => ({currentNote: newNote})
}
