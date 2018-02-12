import { h } from 'hyperapp'
import Sequence from './Sequence'
import Controls from './Controls'
import Tone from 'tone'

export default (
  { sequence, currentNote, transport },
  { start, stop }
) => (
  <div>
    <Sequence sequence={sequence} currentNote={currentNote} />
    <Controls running={transport.state === 'started'} start={start} stop={stop} />
  </div>
)
