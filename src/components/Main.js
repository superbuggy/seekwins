import { h } from 'hyperapp';
import Sequence from './Sequence';
import Tone from 'tone';

export default ({ sequence, currentNote, toneSequence }, { start, stop }) => {
  console.log(sequence)
  return <div class="counter">
    <Sequence sequence={sequence} currentNot={currentNote}/>
    <section>
      <button
        onclick={start}
        disabled={toneSequence}
        >
        ▶️
      </button>
      <button
        disabled={!toneSequence}
        onclick={stop}
      >
        ⏹
      </button>
    </section>
  </div>;
}