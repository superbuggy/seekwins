import { h } from 'hyperapp'
import { Sequence } from './Sequence'
import { Controls } from './Controls'
import { Tone } from 'tone'

export default (
  { sequence, currentNote, transport },
  { start, stop, updateNote, updateSequence}
) => (
  <div>
    <Sequence
      sequence={sequence}
      updateSequence={updateSequence}
      currentNote={currentNote}
    />
    <Controls running={transport.state === 'started'} start={start} stop={stop} />
  </div>
)
