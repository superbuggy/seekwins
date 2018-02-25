import { h } from 'hyperapp'

export const Controls = ({ running, start, stop }) => {
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
