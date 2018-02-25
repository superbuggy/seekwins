import { start, stop } from '../index.js'

export default {
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
