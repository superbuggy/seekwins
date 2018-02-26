import { h } from 'hyperapp'
import { Sequence } from './Sequence'
import { Controls } from './Controls'
import { Tone } from 'tone'

export default (
  { sequence, currentNote, transport },
  { start, stop, updateCurrentNote, updateSequence, add, remove, initSequencer }
) => {
  return (
    <div>
      <Sequence
        running={transport.state === 'started'}
        initSequencer={initSequencer}
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
