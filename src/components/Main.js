import { h } from 'hyperapp';
import Sequence from './Sequence';
import Tone from 'tone';

export default ({ sequence }, { start, stop }) => {
  console.log(sequence)
  return <div class="counter">
    <Sequence sequence={sequence}/>
    <section>
      <button
        onclick={start}
      >
        ▶️
      </button>
      <button
        onclick={stop}
      >
        ⏸
      </button>
    </section>
  </div>;
}