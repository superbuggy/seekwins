import { h } from 'hyperapp'
import { Sequence } from './Sequence'
import { Controls } from './Controls'
import { Tone } from 'tone'

export default (
  { sequence, currentNote, transport },
  { start, stop, updateNote, updateSequenceNote, add, remove }
) => {
  return (
    <div>
      <Sequence
        sequence={sequence}
        updateSequenceNote={updateSequenceNote}
        currentNote={currentNote}
        add={add}
        remove={remove}
      />
      <Controls
        running={transport.state === 'started'}
        start={start}
        stop={stop}
      />
    </div>
  )
}
