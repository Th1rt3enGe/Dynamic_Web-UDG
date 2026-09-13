import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const enlaces = [
  { to: '/expediciones', texto: 'Expediciones' },
  { to: '/experiencia', texto: 'Experiencia' },
  { to: '/fauna', texto: 'Fauna' },
  { to: '/temporadas', texto: 'Temporadas' },
  { to: '/conservacion', texto: 'Conservación' },
  { to: '/preguntas-frecuentes', texto: 'Preguntas' },
]

export default function Nav() {
  const [abierto, setAbierto] = useState(false)

  const claseEnlace = ({ isActive }) =>
    `uppercase tracking-wide text-xs transition-colors ${
      isActive ? 'text-sky-300' : 'text-sky-100/60 hover:text-sky-100'
    }`

  return (
    <header id="encabezado" className="sticky top-0 z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/40 backdrop-blur-sm">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12"
      >
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setAbierto(false)}>
          <span className="text-xl text-sky-400">✦</span>
          <span className="text-base font-semibold tracking-wide text-sky-100">TERRA GLACIALIS</span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.to}>
              <NavLink to={enlace.to} className={claseEnlace}>
                {enlace.texto}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contacto"
          className="hidden shrink-0 border border-sky-400/40 bg-white/90 px-5 py-2 text-xs tracking-wide text-sky-700 md:inline-block"
        >
          RESERVAR
        </NavLink>

        <button
          type="button"
          className="text-sky-100 md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-sky-100" />
            <span className="block h-px w-6 bg-sky-100" />
            <span className="block h-px w-6 bg-sky-100" />
          </div>
        </button>
      </nav>

      {abierto && (
        <ul id="menu-movil" className="flex flex-col gap-1 border-t border-sky-100/10 bg-slate-950 px-6 py-4 md:hidden">
          {[...enlaces, { to: '/contacto', texto: 'Reservar' }].map((enlace) => (
            <li key={enlace.to}>
              <NavLink
                to={enlace.to}
                onClick={() => setAbierto(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm uppercase tracking-wide ${isActive ? 'text-sky-300' : 'text-sky-100/70'}`
                }
              >
                {enlace.texto}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
