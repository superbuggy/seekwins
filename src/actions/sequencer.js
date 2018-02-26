import Tone from 'tone'

export default {
  initSequencer: function (callback) {
    return ({sequence}) => new Tone.Sequence(callback, sequence, '8n')
  }
}
