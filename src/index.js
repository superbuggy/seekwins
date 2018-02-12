import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './components/Main';

const seekwins = app(
  state,
  actions,
  view,
  document.body,
);
console.log(seekwins.start())

/**
 * Hyperapp wires your actions so the view is re-rendered every time the state
 * changes as a result of calling any action. This object is useful because it
 * allows you to talk to your app from another app, framework, vanilla JS, etc.
 *
 * Here is an example on CodePen: https://codepen.io/selfup/pen/jLMRjO
 */
