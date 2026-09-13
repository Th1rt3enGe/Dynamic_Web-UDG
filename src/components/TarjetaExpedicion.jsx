import { Link } from 'react-router-dom'
import { formatoPrecio } from '../data/expediciones'

export default function TarjetaExpedicion({ expedicion }) {
  return (
    <article className="flex flex-col overflow-hidden border border-sky-100/10">
      <div className="relative h-56 overflow-hidden bg-slate-950">
        <img
          src={expedicion.imagen}
          alt={`Vista de la ruta ${expedicion.nombre}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-slate-950/0" />
        <span className="absolute left-4 top-4 border border-sky-400/40 px-2.5 py-1 text-[10.4px] uppercase tracking-wide text-sky-400">
          {expedicion.categoria}
        </span>
        <p className="absolute bottom-4 left-4 text-[10.4px] uppercase tracking-wide text-sky-100/40">
          Sale de {expedicion.salida}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl text-sky-100">{expedicion.nombre}</h3>
          <div className="shrink-0 text-right">
            <p className="text-lg font-light text-sky-400">{formatoPrecio(expedicion.precio)}</p>
            <p className="text-[10.4px] font-light text-sky-100/30">por persona</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-6 text-xs font-light text-sky-100/40">
          <span>⏱ {expedicion.dias} días</span>
          <span>👥 {expedicion.plazas} plazas disponibles</span>
        </div>

        <p className="mt-4 flex-1 text-sm font-light text-sky-100/50">{expedicion.resumen}</p>

        <Link
          to={`/expediciones/${expedicion.slug}`}
          className="mt-5 flex items-center justify-between border-t border-sky-100/10 pt-5 text-xs uppercase tracking-wide text-sky-400/70 hover:text-sky-300"
        >
          Ver detalles →
        </Link>
      </div>
    </article>
  )
}
