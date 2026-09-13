import Eyebrow from '../components/Eyebrow'
import { experienciasABordo, caracteristicasBuque } from '../data/contenido'
import buqueImg from '../assets/img/cubierta-buque-polar.jpg'
import icebergImg from '../assets/img/iceberg-arco-drake.jpg'

export default function Experiencia() {
  return (
    <div>
      <div className="relative h-[45vh] min-h-[320px] overflow-hidden border-b border-sky-100/10">
        <img src={buqueImg} alt="Pasajeros observando el paisaje desde la cubierta del buque" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 pb-10 md:px-16">
          <Eyebrow>A bordo</Eyebrow>
          <h1 className="mt-4 text-4xl font-light text-sky-100 md:text-6xl">La experiencia Terra Glacialis</h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-light text-sky-100">El Buque Polar I</h2>
            <p className="mt-4 text-base font-light leading-7 text-sky-100/60">
              Nuestro buque de investigación de clase polar de 52 metros lleva solo 14 pasajeros, brindándote un
              acceso sin precedentes a sitios de desembarco remotos que los cruceros más grandes no pueden alcanzar.
              Cada tarde, los científicos de la expedición te informan sobre lo que encontrarás al día siguiente.
            </p>
            <ul className="mt-6 space-y-3">
              {caracteristicasBuque.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-light text-sky-100/60">
                  <span className="text-sky-400">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img src={icebergImg} alt="Arco de un iceberg visto desde el buque" className="h-80 w-full object-cover md:h-full" />
        </div>

        <section id="actividades" aria-labelledby="titulo-actividades" className="mt-20">
          <h2 id="titulo-actividades" className="text-3xl font-light text-sky-100">Actividades de expedición</h2>
          <div className="mt-8 grid gap-px overflow-hidden border border-sky-100/10 sm:grid-cols-3">
            {experienciasABordo.map((experiencia) => (
              <article key={experiencia.titulo} className="border-sky-100/10 sm:border-l first:border-l-0">
                <div className="relative h-56 overflow-hidden">
                  <img src={experiencia.imagen} alt={experiencia.titulo} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base text-sky-100">{experiencia.titulo}</h3>
                  <p className="mt-2 text-sm font-light text-sky-100/50">{experiencia.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="un-dia-tipico" aria-labelledby="titulo-dia" className="mt-20">
          <h2 id="titulo-dia" className="text-3xl font-light text-sky-100">Un día típico a bordo</h2>
          <table className="mt-8 w-full border-collapse text-left text-sm">
            <caption className="sr-only">Horario habitual de un día de navegación</caption>
            <thead>
              <tr className="border-b border-sky-100/20 text-xs uppercase tracking-wide text-sky-100/40">
                <th scope="col" className="py-3 pr-4 font-normal">Hora</th>
                <th scope="col" className="py-3 pr-4 font-normal">Actividad</th>
              </tr>
            </thead>
            <tbody className="text-sky-100/70">
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">07:00</td><td className="py-3 pr-4">Aviso matutino del líder de expedición y desayuno</td></tr>
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">08:30</td><td className="py-3 pr-4">Primer desembarco en zodiac o navegación de exploración</td></tr>
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">12:30</td><td className="py-3 pr-4">Comida y descanso a bordo</td></tr>
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">14:30</td><td className="py-3 pr-4">Segundo desembarco, kayak o exploración fotográfica</td></tr>
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">18:30</td><td className="py-3 pr-4">Charla científica: recapitulación del día y plan de mañana</td></tr>
              <tr><td className="py-3 pr-4">20:00</td><td className="py-3 pr-4">Cena y guardia opcional en cubierta para observar la aurora</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
