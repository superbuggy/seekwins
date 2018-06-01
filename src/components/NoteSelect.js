import { h } from 'hyperapp'
import { Scale } from 'tonal'

export const NoteSelect = ({selectedNote, updateSequenceNote, add, remove, index}) => {
  const notesForSelect = Scale.notes('C chromatic')
  const options = notesForSelect.map((note, i) => (
    <option
      selected={note === selectedNote.replace(/\d/g, '')}
      value={note}
    >
      { note }
    </option>
  ))
  const handleUpdate = e => updateSequenceNote({newNote: e.target.value, index})
  const handleRemove = _ => remove({index, note: selectedNote})
  const handleAdd = _ => add({index, note: selectedNote})
  return (
    <div class={'note-select'}>
      <select onchange={handleUpdate}>
        { options }
      </select>
      <section>
        <button onclick={handleRemove}>➖</button>
        <button onclick={handleAdd}>➕</button>
      </section>
    </div>
  )
}
