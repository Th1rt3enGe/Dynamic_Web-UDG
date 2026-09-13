import { Link, useParams } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { expediciones, formatoPrecio } from '../data/expediciones'

export default function ExpedicionDetalle() {
  const { slug } = useParams()
  const expedicion = expediciones.find((item) => item.slug === slug)

  if (!expedicion) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-light text-sky-100">Expedición no encontrada</h1>
        <p className="mt-4 text-sky-100/50">No existe ninguna travesía con ese identificador.</p>
        <Link to="/expediciones" className="mt-8 inline-block text-xs uppercase tracking-wide text-sky-400">
          ← Volver a expediciones
        </Link>
      </div>
    )
  }

  return (
    <article>
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden border-b border-sky-100/10">
        <img src={expedicion.imagen} alt={`Paisaje de la ruta ${expedicion.nombre}`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 pb-12 md:px-16">
          <Eyebrow>{expedicion.categoria} · Sale de {expedicion.salida}</Eyebrow>
          <h1 className="mt-4 text-4xl font-light text-sky-100 md:text-6xl">{expedicion.nombre}</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3 md:px-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-light text-sky-100">Resumen de la travesía</h2>
          <p className="mt-4 text-base font-light leading-7 text-sky-100/60">{expedicion.resumen}</p>

          <h2 id="itinerario" className="mt-12 text-2xl font-light text-sky-100">Itinerario día por día</h2>
          <ol className="mt-6 space-y-6 border-l border-sky-100/10 pl-6">
            {expedicion.itinerario.map((paso) => (
              <li key={paso.titulo}>
                <p className="text-xs uppercase tracking-wide text-sky-400">Día {paso.dia}</p>
                <p className="mt-1 text-base text-sky-100">{paso.titulo}</p>
                <p className="mt-1 text-sm font-light text-sky-100/50">{paso.detalle}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm uppercase tracking-wide text-sky-100/60">Incluye</h3>
              <ul className="mt-3 space-y-2 text-sm font-light text-sky-100/50">
                {expedicion.incluye.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-400">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-sky-100/60">No incluye</h3>
              <ul className="mt-3 space-y-2 text-sm font-light text-sky-100/50">
                {expedicion.noIncluye.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sky-100/30">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="h-fit border border-sky-100/10 p-6">
          <p className="text-3xl font-light text-sky-400">{formatoPrecio(expedicion.precio)}</p>
          <p className="text-xs font-light text-sky-100/30">por persona, ocupación doble</p>
          <dl className="mt-6 space-y-3 border-t border-sky-100/10 pt-6 text-sm">
            <div className="flex justify-between">
              <dt className="font-light text-sky-100/50">Duración</dt>
              <dd className="text-sky-100">{expedicion.dias} días</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-light text-sky-100/50">Salida desde</dt>
              <dd className="text-sky-100">{expedicion.salida}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-light text-sky-100/50">Plazas disponibles</dt>
              <dd className="text-sky-100">{expedicion.plazas}</dd>
            </div>
          </dl>
          <Link
            to="/contacto"
            className="mt-6 block bg-sky-400 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-slate-950"
          >
            Solicitar reserva
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <Link to="/expediciones" className="text-xs uppercase tracking-wide text-sky-400 hover:text-sky-300">
          ← Ver todas las expediciones
        </Link>
      </div>
    </article>
  )
}
