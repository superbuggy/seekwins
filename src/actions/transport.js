import { start, stop } from '../index.js'

export default {
  sequence: _ => ({sequence}) => sequence,
  start: () => ({ transport }) => {
    start()
    transport.start()
    return { transport }
  },
  stop: () => ({ transport }) => {
    stop()
    transport.stop()
    return { transport }
  }

}
