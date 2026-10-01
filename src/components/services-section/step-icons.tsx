/* Human = orange, agent = blue, code = ink. Animations only run for motion-safe users. */

function Human({ x, y }: { x: number; y: number }) {
  return (
    <g className="text-attention" fill="currentColor">
      <circle cx={x} cy={y - 7} r="4.5" />
      <path d={`M${x - 8} ${y + 9}a8 8 0 0 1 16 0z`} />
    </g>
  )
}

function Agent({ x, y }: { x: number; y: number }) {
  return (
    <g className="text-accent">
      <line x1={x} y1={y - 12} x2={x} y2={y - 8} stroke="currentColor" strokeWidth="2" />
      <circle cx={x} cy={y - 13} r="1.8" fill="currentColor" />
      <rect x={x - 8} y={y - 8} width="16" height="13" rx="3.5" fill="currentColor" />
      <circle cx={x - 3.2} cy={y - 1.8} r="1.6" fill="#fff" />
      <circle cx={x + 3.2} cy={y - 1.8} r="1.6" fill="#fff" />
      <rect x={x - 6} y={y + 6.5} width="12" height="3" rx="1.5" fill="currentColor" />
    </g>
  )
}

const dot = 'motion-safe:animate-[typing_1.4s_ease-in-out_infinite]'

function Conversation() {
  return (
    <>
      <Human x={14} y={34} />
      <g className="text-muted" fill="currentColor">
        <circle cx="26" cy="30" r="2" className={dot} />
        <circle cx="32" cy="30" r="2" className={`${dot} [animation-delay:0.2s]`} />
        <circle cx="38" cy="30" r="2" className={`${dot} [animation-delay:0.4s]`} />
      </g>
      <Agent x={50} y={36} />
    </>
  )
}

function UnderstandCode() {
  return (
    <>
      <rect
        x="6"
        y="10"
        width="36"
        height="34"
        rx="4"
        className="stroke-primary"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M17 22l-5 5 5 5M31 22l5 5-5 5M26 20l-4 14"
        className="stroke-primary"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="8"
        y="13"
        width="32"
        height="2"
        rx="1"
        className="fill-accent motion-safe:animate-[scan_2.4s_ease-in-out_infinite]"
        opacity="0.8"
      />
      <Agent x={50} y={46} />
    </>
  )
}

function Control() {
  return (
    <>
      <g className="motion-safe:animate-[nudge_2s_ease-in-out_infinite]">
        <Agent x={14} y={38} />
      </g>
      <rect x="30" y="16" width="3" height="36" rx="1.5" className="fill-attention" />
      <Human x={48} y={38} />
      <path
        d="M43 14l3.5 3.5L53 11"
        className="stroke-attention origin-center [transform-box:fill-box] motion-safe:animate-[pop_2s_ease-in-out_infinite]"
        fill="none"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

const bar =
  '[transform-box:fill-box] origin-bottom motion-safe:animate-[grow_2.4s_ease-in-out_infinite]'

function State() {
  return (
    <>
      <path d="M6 50h52" className="stroke-line" strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="26" width="9" height="22" rx="2" className={`fill-primary ${bar}`} />
      <rect
        x="24"
        y="16"
        width="9"
        height="32"
        rx="2"
        className={`fill-accent ${bar} [animation-delay:0.3s]`}
      />
      <rect
        x="38"
        y="30"
        width="9"
        height="18"
        rx="2"
        className={`fill-attention ${bar} [animation-delay:0.6s]`}
      />
      <circle cx="54" cy="12" r="3" className="fill-ok motion-safe:animate-pulse" />
    </>
  )
}

export const STEP_ICONS = [Conversation, UnderstandCode, Control, State]

export function StepIcon({ index }: { index: number }) {
  const Icon = STEP_ICONS[index]
  return (
    <div
      className="border-line bg-surface grid size-20 place-items-center rounded-xl border"
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 60" className="size-[68px] overflow-visible">
        <Icon />
      </svg>
    </div>
  )
}
