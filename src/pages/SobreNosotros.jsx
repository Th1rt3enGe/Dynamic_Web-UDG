import Eyebrow from '../components/Eyebrow'
import lagunaImg from '../assets/img/laguna-icebergs.jpg'

export default function SobreNosotros() {
  return (
    <div>
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden border-b border-sky-100/10">
        <img src={lagunaImg} alt="Laguna de icebergs con montañas nevadas al fondo" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 pb-10 md:px-16">
          <Eyebrow>Desde 1998</Eyebrow>
          <h1 className="mt-4 text-4xl font-light text-sky-100 md:text-6xl">Sobre Terra Glacialis</h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 md:px-16">
        <p className="text-base font-light leading-7 text-sky-100/60">
          Terra Glacialis nació en 1998 con un solo buque y una convicción: que la mejor manera de proteger la
          Antártida es que más personas la conozcan de cerca, guiadas por quienes la estudian. Desde entonces hemos
          desembarcado a más de 4,200 pasajeros en el continente blanco, siempre con grupos reducidos y un fuerte
          componente científico en cada travesía.
        </p>

        <h2 className="mt-12 text-2xl font-light text-sky-100">Nuestra tripulación científica</h2>
        <p className="mt-4 text-base font-light leading-7 text-sky-100/60">
          Cada expedición lleva a bordo un equipo interdisciplinario: glaciólogos, biólogos marinos, historiadores
          polares y guías certificados por IAATO. Antes de cada desembarco, el equipo ofrece una charla breve sobre
          lo que los pasajeros están a punto de ver.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            { rol: 'Glaciólogos', detalle: 'Explican la dinámica de los glaciares y el desprendimiento de icebergs.' },
            { rol: 'Biólogos marinos', detalle: 'Guían la observación responsable de ballenas, focas y aves.' },
            { rol: 'Guías polares IAATO', detalle: 'Coordinan cada desembarco y velan por la seguridad del grupo.' },
          ].map((persona) => (
            <div key={persona.rol} className="border border-sky-100/10 p-5">
              <h3 className="text-base text-sky-100">{persona.rol}</h3>
              <p className="mt-2 text-sm font-light text-sky-100/50">{persona.detalle}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-light text-sky-100">Nuestra historia</h2>
        <table className="mt-6 w-full border-collapse text-left text-sm">
          <caption className="sr-only">Hitos históricos de la compañía</caption>
          <thead>
            <tr className="border-b border-sky-100/20 text-xs uppercase tracking-wide text-sky-100/40">
              <th scope="col" className="py-3 pr-4 font-normal">Año</th>
              <th scope="col" className="py-3 pr-4 font-normal">Hito</th>
            </tr>
          </thead>
          <tbody className="text-sky-100/70">
            <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">1998</td><td className="py-3 pr-4">Primera travesía con el Buque Polar I desde Ushuaia.</td></tr>
            <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">2005</td><td className="py-3 pr-4">Incorporación de la ruta a Georgia del Sur.</td></tr>
            <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">2012</td><td className="py-3 pr-4">Certificación como Miembro Completo de IAATO.</td></tr>
            <tr className="border-b border-sky-100/10"><td className="py-3 pr-4">2019</td><td className="py-3 pr-4">Primera expedición al Mar de Ross y McMurdo.</td></tr>
            <tr><td className="py-3 pr-4">2024</td><td className="py-3 pr-4">Programa de compensación de carbono en el 100% de las travesías.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
