import { h } from 'hyperapp'
import { Sequence } from './Sequence'
import { Controls } from './Controls'
import { Tone } from 'tone'

export default (
  { sequence, currentNote, transport },
  { start, stop, updateNote, updateSequence, add, remove }
) => {
  console.log(transport.start)
  return (
    <div>
      <Sequence
        sequence={sequence}
        updateSequence={updateSequence}
        currentNote={currentNote}
        add={add}
        remove={remove}
      />
      <Controls running={transport.state === 'started'} start={start} stop={stop} />
    </div>
  )
}
