import Tone from 'tone'

export default {
  start: () => ({ transport }) => {
    console.log('start')
    transport.start()
    return { transport }
  },
  stop: () => ({ transport }) => {
    console.log('stop')
    transport.stop()
    return { transport }
  },
  updateNote: () => currentNote => ({currentNote}),
  add: (e, note) => ({ sequence }) => ({ sequence: [...sequence, note] }),
  remove: (e, note) => ({ sequence }) => ({ sequence: sequence.filter(item => item !== note) }),
}
