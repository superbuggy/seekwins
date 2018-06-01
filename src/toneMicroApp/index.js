import Tone from 'tone'

export default class ToneMircoApp {
  constructor (seekwins) {
    this.seekwins = seekwins
    this.sequencer = this.newSequence(this.onBeat())
  }

  newSequence (onBeat) {
    return new Tone.Sequence(onBeat, this.seekwins.sequence(), '8n')
  }

  onBeat () {
    const updater = note => this.seekwins.updateCurrentNote(note)
    return function (time, note) {
      updater(note)
    }
  }

  add (index, note) {
    this.sequencer.add(index, note)
  }

  remove (index) {
    this.sequencer.remove(index)
  }

  start () {
    this.sequencer.start(0)
  }

  stop () {
    this.sequencer.stop(0)
  }
}
