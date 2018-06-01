import { h } from 'hyperapp'
import { NoteSelect } from './NoteSelect'

export const Sequence = ({sequence, presentNote, updateSequenceNote, add, remove}) => {
  console.log(sequence)
  const noteSelects = sequence.map((note, index) => (
    <NoteSelect
      updateSequenceNote={updateSequenceNote}
      selectedNote={note}
      key={index}
      index={index}
      add={add}
      remove={remove}
    />))

  return (
    <div class={'sequence'}>
      <h1 class={'currentNote'}>
        { `🔊${presentNote}🎶` }
      </h1>
      <section class={'current-sequence'} sequence={sequence} onupdate={(..._) => console.log(_)}>
        {noteSelects}
      </section>
    </div>
  )
}
