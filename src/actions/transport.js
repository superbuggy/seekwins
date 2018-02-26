import sequencerActions from './sequencer'

const callback = function (time, note) {
  console.log(note)
}

export default {
  start: () => ({ transport, sequencer }) => {
    // const sequencer = sequencerActions.initSequencer(callback)({sequence})
    console.log(sequencer)
    sequencer.start()
    transport.start()
    return { transport, sequencer }
  },
  stop: () => ({ transport, sequencer }) => {
    sequencer.stop()
    sequencer.dispose()
    transport.stop()
    return { transport, sequencer: null }
  }
}
