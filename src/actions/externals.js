export default {
  sequence: _ => ({sequence}) => sequence,
  updateCurrentNote: newNote => _ => ({currentNote: newNote})
}
