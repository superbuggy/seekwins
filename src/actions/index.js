import Tone from 'tone'

import transportActions from './transport'
import externals from './externals'
import sequence from './sequence'

const actions = {
  ...transportActions,
  ...externals,
  ...sequence
}

export default actions
