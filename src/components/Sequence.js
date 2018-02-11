import { h } from 'hyperapp';

export default ({sequence}) => {
  return (
    <div>
      <h1>Notes</h1>
      <code>{sequence.join(', ')}</code>
      <hr />
    </div>
  );
}