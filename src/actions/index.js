import Tone from 'tone'

import transport from './transport'
import sequence from './sequence'

const actions = {
  ...transport,
  ...sequence
}

export default actions
