import { h } from 'hyperapp';

export default ({sequence, currentNote}) => {
  return (
    <div>
      <h1>Notes</h1>
      <code>{currentNote}</code>
      <code>{sequence.join(', ')}</code>
      <hr />
    </div>
  );
}