import { h } from 'hyperapp'
import { NoteSelect } from './NoteSelect'

export const Sequence = ({sequence, currentNote, updateSequence, add, remove, initSequencer}) => {
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
        <code onupdate={(el, old) => {
          console.log('<Sequence>', el, old)
          const callback = function (time, note) {
            console.log(note)
          }
          initSequencer(callback)({ sequence })
        }}>
          { currentNote }
        </code>
      </h3>
      <section>
        {noteSelects}
      </section>
      <hr />
    </div>
  )
}
