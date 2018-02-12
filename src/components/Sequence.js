import { h } from 'hyperapp'

export default ({sequence, currentNote}) => {
  return (
    <div>
      <h1>Notes</h1>
      <h3>🔊<code>{currentNote}</code></h3>
      <code>{sequence.join(', ')}</code>
      <hr />
    </div>
  )
}
