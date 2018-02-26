import Tone from 'tone'

export default class ToneMircoApp {
  constructor (seekwins) {
    console.log(seekwins)
    this.seekwins = seekwins
    this.sequencer = this.newSequence(this.onBeat())
  }

  newSequence (onBeat) {
    return new Tone.Sequence(onBeat, this.seekwins.sequence(), '8n')
  }

  onBeat () {
    const updater = note => this.seekwins.updateCurrentNote(note)
    return function (time, note) {
      console.log(time, note, this)
      updater(note)
    }
  }

  start () {
    console.log('start')
    this.sequencer.start()
  }

  stop () {
    this.sequencer.stop()
  }
}
