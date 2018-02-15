import { h } from 'hyperapp'
import NoteSelect from './NoteSelect'

export default ({sequence, currentNote}, {}) => {
  //TODO: pass each thing in the sequence to NoteSelect
  const noteSelects = sequence.map(note => <NoteSelect selectedNote={note} key={note} />)
  return (
    <div>
      <h1>Notes</h1>
      <h3>🔊<code>{currentNote}</code></h3>
      {noteSelects}
      <hr />
    </div>
  )
}
