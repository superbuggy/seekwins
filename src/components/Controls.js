import { h } from 'hyperapp';

export default ({ running, start, stop }) => {
  return (
    <section>
      <button
        onclick={start}
        disabled={running}
      >
        ▶️
        </button>
      <button
        onclick={stop}
        disabled={!running}
      >
        ⏹
        </button>
    </section>
  )
}
