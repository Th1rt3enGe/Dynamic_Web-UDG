export default function Eyebrow({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-6 bg-sky-400" aria-hidden="true" />
      <span className="text-xs uppercase tracking-wider text-sky-400">{children}</span>
      {center && <span className="h-px w-6 bg-sky-400" aria-hidden="true" />}
    </div>
  )
}
