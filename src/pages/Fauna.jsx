import Eyebrow from '../components/Eyebrow'
import TarjetaFauna from '../components/TarjetaFauna'
import { fauna } from '../data/fauna'

export default function Fauna() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-16">
      <Eyebrow>Vida silvestre</Eyebrow>
      <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">La fauna que encontrarás</h1>
      <p className="mt-6 max-w-2xl text-base font-light text-sky-100/50">
        La Antártida y el Atlántico Sur albergan algunas de las mayores concentraciones de vida silvestre del
        planeta. Estas son las especies que con más frecuencia observan nuestros pasajeros durante las travesías.
      </p>

      <div id="galeria-fauna" className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        {fauna.map((especie) => (
          <TarjetaFauna key={especie.id} especie={especie} />
        ))}
      </div>

      <section id="tabla-especies" aria-labelledby="titulo-tabla-fauna" className="mt-20">
        <h2 id="titulo-tabla-fauna" className="text-3xl font-light text-sky-100">Ficha técnica de especies</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="sr-only">Datos de población, tamaño y estado de conservación por especie</caption>
            <thead>
              <tr className="border-b border-sky-100/20 text-xs uppercase tracking-wide text-sky-100/40">
                <th scope="col" className="py-3 pr-4 font-normal">Especie</th>
                <th scope="col" className="py-3 pr-4 font-normal">Nombre científico</th>
                <th scope="col" className="py-3 pr-4 font-normal">Población estimada</th>
                <th scope="col" className="py-3 pr-4 font-normal">Tamaño</th>
                <th scope="col" className="py-3 pr-4 font-normal">Estado (UICN)</th>
              </tr>
            </thead>
            <tbody>
              {fauna.map((especie) => (
                <tr key={especie.id} className="border-b border-sky-100/10 text-sky-100/70">
                  <th scope="row" className="py-4 pr-4 font-normal text-sky-100">{especie.nombre}</th>
                  <td className="py-4 pr-4 italic">{especie.nombreCientifico}</td>
                  <td className="py-4 pr-4">{especie.poblacion}</td>
                  <td className="py-4 pr-4">{especie.altura}</td>
                  <td className="py-4 pr-4">{especie.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
