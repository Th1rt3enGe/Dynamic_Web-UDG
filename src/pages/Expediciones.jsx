import Eyebrow from '../components/Eyebrow'
import TarjetaExpedicion from '../components/TarjetaExpedicion'
import { expediciones, formatoPrecio } from '../data/expediciones'

export default function Expediciones() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-16">
      <Eyebrow>Catálogo 2026</Eyebrow>
      <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">Todas las expediciones</h1>
      <p className="mt-6 max-w-2xl text-base font-light text-sky-100/50">
        Cinco travesías, cuatro puertos de salida y niveles de intensidad distintos: desde el cruce clásico del
        Pasaje Drake hasta la remota Barrera de Hielo de Ross. Compara duración, precio y disponibilidad antes de
        reservar.
      </p>

      <div id="listado-expediciones" className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expediciones.map((expedicion) => (
          <TarjetaExpedicion key={expedicion.slug} expedicion={expedicion} />
        ))}
      </div>

      <section id="tabla-comparativa" aria-labelledby="titulo-tabla" className="mt-24">
        <h2 id="titulo-tabla" className="text-3xl font-light text-sky-100">Comparativa rápida</h2>
        <p className="mt-2 text-sm font-light text-sky-100/40">
          Tabla de referencia para comparar las cinco travesías por duración, precio y plazas disponibles.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">Comparativa de expediciones antárticas por precio, duración y plazas</caption>
            <thead>
              <tr className="border-b border-sky-100/20 text-xs uppercase tracking-wide text-sky-100/40">
                <th scope="col" className="py-3 pr-4 font-normal">Expedición</th>
                <th scope="col" className="py-3 pr-4 font-normal">Categoría</th>
                <th scope="col" className="py-3 pr-4 font-normal">Salida</th>
                <th scope="col" className="py-3 pr-4 font-normal">Duración</th>
                <th scope="col" className="py-3 pr-4 font-normal">Plazas</th>
                <th scope="col" className="py-3 pr-4 font-normal">Precio</th>
              </tr>
            </thead>
            <tbody>
              {expediciones.map((expedicion) => (
                <tr key={expedicion.slug} className="border-b border-sky-100/10 text-sky-100/70">
                  <th scope="row" className="py-4 pr-4 font-normal text-sky-100">{expedicion.nombre}</th>
                  <td className="py-4 pr-4">{expedicion.categoria}</td>
                  <td className="py-4 pr-4">{expedicion.salida}</td>
                  <td className="py-4 pr-4">{expedicion.dias} días</td>
                  <td className="py-4 pr-4">{expedicion.plazas}</td>
                  <td className="py-4 pr-4 text-sky-400">{formatoPrecio(expedicion.precio)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
