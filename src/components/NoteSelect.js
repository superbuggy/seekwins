import { h } from 'hyperapp'
import { Scale } from 'tonal'

export default ({selectedNote},{updateNote}) => {
  const notesForSelect = Scale.notes('C chromatic')
  console.log(notesForSelect)
  const options = notesForSelect.map((note, i) => (
    <option selected={note === selectedNote.replace(/\d/g, '')} value={note}> {note} </option>
  ))

  return (
    <select onchange={e => updateNote()}>
      {options}
    </select>
  )
}
