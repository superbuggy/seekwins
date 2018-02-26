import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './components/Main'
import Tone from 'tone'
import devtools from 'hyperapp-redux-devtools'

let seekwins

if (process.env.NODE_ENV !== 'production') {
  seekwins = devtools(app)(
    state,
    actions,
    view,
    document.body,
  )
} else {
  seekwins = app(
    state,
    actions,
    view,
    document.body,
  )
}
