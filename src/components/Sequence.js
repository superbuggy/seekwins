import { h } from 'hyperapp'
import { NoteSelect } from './NoteSelect'

export const Sequence = ({sequence, currentNote, updateSequence}) => {
  const noteSelects = sequence.map(note => (
    <NoteSelect
      updateSequence={updateSequence}
      selectedNote={note}
      key={note}
    />))

  return (
    <div>
      <h1>Notes</h1>
      <h3>🔊
        <code>
          { currentNote }
        </code>
      </h3>
      {noteSelects}
      <hr />
    </div>
  )
}
