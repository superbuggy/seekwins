import Tone from 'tone'

const writeNote = () => (time, currentNote) => {
  console.log(currentNote, time)
  return { currentNote, time }
}
export default {
  writeNote,
  start: function() { return ({ sequence, transport }) => {
    transport.start()
    console.log(this)
    const toneSequence = new Tone.Sequence(
      this.writeNote(),
      sequence,
      '8n'
    )
    toneSequence.start()
    return {
      transport,
      toneSequence
    }
  }},
  stop: () => ({ toneSequence, transport }) => {
    transport.stop()
    toneSequence.dispose()
    return {
      toneSequence: null,
      transport
    }
  },
  add: (e, note) => ({ sequence }) => ({ sequence: [...sequence, note] }),
  remove: (e, note) => ({ sequence }) => ({ sequence: sequence.filter(item => item !== note) }),
}
