import Tone from 'tone'

export default {
  start: () => ({ sequence, transport }) => {
    transport.start()
    const toneSequence = new Tone.Sequence(function(time, note){console.log(time,note)}, sequence, '8n')
    toneSequence.start()
    return {
      transport,
      toneSequence
    }
  },
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
