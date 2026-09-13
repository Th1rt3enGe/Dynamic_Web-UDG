import Eyebrow from '../components/Eyebrow'
import glaciarImg from '../assets/img/glaciar-aereo.jpg'

export default function Conservacion() {
  return (
    <div>
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden border-b border-sky-100/10">
        <img src={glaciarImg} alt="Vista aérea de un glaciar y el mar antártico" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 pb-10 md:px-16">
          <Eyebrow>Compromiso ecológico</Eyebrow>
          <h1 className="mt-4 text-4xl font-light text-sky-100 md:text-6xl">Conservación en la Antártida</h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 md:px-16">
        <p className="text-base font-light leading-7 text-sky-100/60">
          Terra Glacialis opera como Miembro Completo de la Asociación Internacional de Operadores Turísticos de la
          Antártida (IAATO). Cada expedición sigue protocolos estrictos para minimizar el impacto sobre un
          ecosistema extraordinariamente frágil.
        </p>

        <h2 className="mt-12 text-2xl font-light text-sky-100">Nuestros protocolos</h2>
        <ul className="mt-6 space-y-4">
          {[
            'Máximo de 100 pasajeros en tierra simultáneamente, muy por debajo del límite de nuestro pequeño buque.',
            'Desinfección obligatoria de botas, mochilas y equipo antes y después de cada desembarco (bioseguridad).',
            'Distancia mínima de 5 metros respecto a la fauna, ampliada durante la temporada de anidación.',
            'Prohibición total de plásticos de un solo uso a bordo.',
            'Compensación de carbono de cada travesía mediante proyectos certificados de reforestación.',
          ].map((punto) => (
            <li key={punto} className="flex gap-3 text-sm font-light text-sky-100/60">
              <span className="text-sky-400">✦</span>
              {punto}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-light text-sky-100">Ciencia ciudadana</h2>
        <p className="mt-4 text-base font-light leading-7 text-sky-100/60">
          Cada expedición contribuye al seguimiento a largo plazo de las colonias de pingüinos llevado a cabo por el
          British Antarctic Survey. Los pasajeros pueden participar voluntariamente en el conteo de nidos y en la
          recolección de datos oceanográficos básicos durante los desembarcos.
        </p>

        <section id="certificaciones" aria-labelledby="titulo-certificaciones" className="mt-12">
          <h2 id="titulo-certificaciones" className="text-2xl font-light text-sky-100">Certificaciones</h2>
          <table className="mt-6 w-full border-collapse text-left text-sm">
            <caption className="sr-only">Certificaciones ambientales y operativas de la compañía</caption>
            <thead>
              <tr className="border-b border-sky-100/20 text-xs uppercase tracking-wide text-sky-100/40">
                <th scope="col" className="py-3 pr-4 font-normal">Certificación</th>
                <th scope="col" className="py-3 pr-4 font-normal">Alcance</th>
                <th scope="col" className="py-3 pr-4 font-normal">Vigente desde</th>
              </tr>
            </thead>
            <tbody className="text-sky-100/70">
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">IAATO — Miembro Completo</td><td className="py-3 pr-4">Operaciones de desembarco</td><td className="py-3 pr-4">1998</td></tr>
              <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">Polar Code (OMI)</td><td className="py-3 pr-4">Navegación en aguas polares</td><td className="py-3 pr-4">2017</td></tr>
              <tr><td className="py-3 pr-4">ISO 14001</td><td className="py-3 pr-4">Gestión ambiental a bordo</td><td className="py-3 pr-4">2020</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
