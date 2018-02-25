import { h } from 'hyperapp'
import { Scale } from 'tonal'

export const NoteSelect = ({selectedNote, updateSequence}) => {
  const notesForSelect = Scale.notes('C chromatic')
  const options = notesForSelect.map((note, i) => (
    <option
      selected={note === selectedNote.replace(/\d/g, '')}
      value={note}
    >
      { note }
    </option>
  ))
  const handleUpdate = (e) => updateSequence({newNote: e.target.value, oldNote: selectedNote})
  return (
    <select onchange={handleUpdate}>
      { options }
    </select>
  )
}
