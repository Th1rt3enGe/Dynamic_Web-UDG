import { useState } from 'react'

export default function Acordeon({ items }) {
  const [abierto, setAbierto] = useState(null)

  return (
    <div>
      {items.map((item, indice) => {
        const expandido = abierto === indice
        const idPanel = `panel-${indice}`
        const idBoton = `acordeon-boton-${indice}`
        return (
          <div key={item.pregunta} className="border-b border-sky-100/10">
            <h3>
              <button
                id={idBoton}
                type="button"
                aria-expanded={expandido}
                aria-controls={idPanel}
                onClick={() => setAbierto(expandido ? null : indice)}
                className="flex w-full items-start justify-between gap-4 py-6 text-left"
              >
                <span className="text-base text-sky-100">{item.pregunta}</span>
                <span className="pt-0.5 text-xl text-sky-400" aria-hidden="true">
                  {expandido ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={idPanel}
              role="region"
              aria-labelledby={idBoton}
              className={`grid overflow-hidden transition-all duration-300 ${
                expandido ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="min-h-0 text-sm font-light leading-6 text-sky-100/50">{item.respuesta}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
