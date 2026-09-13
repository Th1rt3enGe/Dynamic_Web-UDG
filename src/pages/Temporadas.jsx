import Eyebrow from '../components/Eyebrow'
import { temporadas } from '../data/contenido'
import auroraImg from '../assets/img/aurora-estrella-fugaz.jpg'

export default function Temporadas() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-16">
        <Eyebrow>Cuándo ir</Eyebrow>
        <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">El calendario antártico</h1>
        <p className="mt-6 max-w-2xl text-base font-light text-sky-100/50">
          La temporada de expediciones antárticas va de octubre a marzo, cuando el hielo marino se abre y el sol no
          se pone durante semanas. Cada mes ofrece una experiencia distinta.
        </p>

        <div className="mt-14 grid divide-y divide-sky-100/10 border border-sky-100/10 bg-sky-100/5 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {temporadas.map((temporada) => (
            <div
              key={temporada.rango}
              className={`p-6 ${temporada.activa ? 'border-b-2 border-sky-400 bg-sky-400/5' : 'bg-slate-950/90'}`}
            >
              <p className="text-2xl">{temporada.icono}</p>
              <p className="mt-3 text-xs tracking-wide text-sky-400/70">{temporada.rango}</p>
              <p className="mt-1 text-base text-sky-100">{temporada.titulo}</p>
              <p className="mt-1 text-xs font-light text-sky-100/30">{temporada.temperatura}</p>
              <p className="mt-4 text-sm font-light text-sky-100/50">{temporada.descripcion}</p>
            </div>
          ))}
        </div>

        <section id="tabla-mensual" aria-labelledby="titulo-mensual" className="mt-20">
          <h2 id="titulo-mensual" className="text-3xl font-light text-sky-100">Condiciones mes a mes</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Horas de luz, temperatura y avistamientos destacados por mes</caption>
              <thead>
                <tr className="border-b border-sky-100/20 text-xs uppercase tracking-wide text-sky-100/40">
                  <th scope="col" className="py-3 pr-4 font-normal">Mes</th>
                  <th scope="col" className="py-3 pr-4 font-normal">Horas de luz</th>
                  <th scope="col" className="py-3 pr-4 font-normal">Temp. media</th>
                  <th scope="col" className="py-3 pr-4 font-normal">Avistamiento destacado</th>
                </tr>
              </thead>
              <tbody className="text-sky-100/70">
                <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">Octubre</td><td className="py-3 pr-4">~13 h</td><td className="py-3 pr-4">-5 °C</td><td className="py-3 pr-4">Cortejo de pingüinos</td></tr>
                <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">Noviembre</td><td className="py-3 pr-4">~18 h</td><td className="py-3 pr-4">-3 °C</td><td className="py-3 pr-4">Puesta de huevos</td></tr>
                <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">Diciembre</td><td className="py-3 pr-4">24 h</td><td className="py-3 pr-4">+1 °C</td><td className="py-3 pr-4">Eclosión de polluelos</td></tr>
                <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">Enero</td><td className="py-3 pr-4">24 h</td><td className="py-3 pr-4">+2 °C</td><td className="py-3 pr-4">Ballenas jorobadas alimentándose</td></tr>
                <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">Febrero</td><td className="py-3 pr-4">~18 h</td><td className="py-3 pr-4">0 °C</td><td className="py-3 pr-4">Polluelos volantones</td></tr>
                <tr><td className="py-3 pr-4">Marzo</td><td className="py-3 pr-4">~13 h</td><td className="py-3 pr-4">-1 °C</td><td className="py-3 pr-4">Icebergs desprendiéndose (calving)</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="relative mt-4 h-80 overflow-hidden border-t border-sky-100/10">
        <img src={auroraImg} alt="Aurora austral verde y púrpura sobre montañas nevadas" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center bg-slate-950/50">
          <p className="mx-auto max-w-lg px-6 text-center text-lg font-light text-sky-100/80">
            Fuera de temporada, la Antártida entra en noche polar: el continente queda inaccesible por barco hasta la
            siguiente primavera austral.
          </p>
        </div>
      </section>
    </div>
  )
}
