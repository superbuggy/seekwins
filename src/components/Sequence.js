import { h } from 'hyperapp'
import { NoteSelect } from './NoteSelect'

export const Sequence = ({sequence, currentNote, updateSequence, add, remove}) => {
  const noteSelects = sequence.map((note, index) => (
    <NoteSelect
      updateSequence={updateSequence}
      selectedNote={note}
      key={index}
      index={index}
      add={add}
      remove={remove}
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
