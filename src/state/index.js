import Tone from 'tone';

const sequence = ["D#3", "D3", "G3", "A3", "A#3"]

const toneSequence = new Tone.Sequence(
  function (time, note) {
    console.log(note);
  }, 
  sequence, 
  '8n'
);


export default {
  toneSequence,
  sequence,
  transport: Tone.Transport,
};
