import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import TarjetaExpedicion from '../components/TarjetaExpedicion'
import TarjetaFauna from '../components/TarjetaFauna'
import Acordeon from '../components/Acordeon'
import { expediciones } from '../data/expediciones'
import { fauna } from '../data/fauna'
import { temporadas, experienciasABordo, caracteristicasBuque, estadisticas, preguntasFrecuentes } from '../data/contenido'

import heroImg from '../assets/img/pared-iceberg-panoramica.jpg'
import buqueImg from '../assets/img/cubierta-buque-polar.jpg'
import ctaImg from '../assets/img/iceberg-acantilado.jpg'

export default function Inicio() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section id="hero" className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-sky-100/10">
        <img
          src={heroImg}
          alt="Pared de un iceberg tabular vista desde el mar, con la Antártida al fondo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950/20" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40 md:px-16">
          <Eyebrow>90° S — El fin de la Tierra</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-5xl font-light leading-tight text-white md:text-7xl md:leading-[1.05]">
            Viaje al último confín del mundo
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-sky-100/70">
            Expediciones en barco pequeño a la Antártida, donde los glaciares calvan en mares de obsidiana, los
            emperadores crían en vientos de −40&nbsp;°C y la aurora austral ilumina la noche polar.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/expediciones" className="bg-sky-400 px-8 py-4 text-center text-xs font-medium uppercase tracking-wider text-slate-950">
              Ver expediciones
            </Link>
            <Link to="/experiencia" className="border border-sky-100/30 px-8 py-4 text-center text-xs uppercase tracking-wider text-sky-100">
              Cómo funciona
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Estadísticas ===== */}
      <section id="estadisticas" aria-label="Estadísticas de la compañía" className="region-divider px-6 py-10 md:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {estadisticas.map((dato) => (
            <div key={dato.etiqueta}>
              <p className="text-4xl font-light text-sky-200">
                {dato.valor} {dato.sufijo && <span className="text-xs text-sky-400">{dato.sufijo}</span>}
              </p>
              <p className="mt-1 text-[10.4px] uppercase tracking-wide text-sky-100/30">{dato.etiqueta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Expediciones destacadas ===== */}
      <section id="expediciones" aria-labelledby="titulo-expediciones" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Travesías 2026</Eyebrow>
              <h2 id="titulo-expediciones" className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">
                Elige tu<br />expedición
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light text-sky-100/40">
              Cada viaje está liderado por glaciólogos, biólogos marinos y guías polares experimentados. Salidas de
              noviembre a marzo.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expediciones.map((expedicion) => (
              <TarjetaExpedicion key={expedicion.slug} expedicion={expedicion} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/expediciones" className="text-xs uppercase tracking-wide text-sky-400 hover:text-sky-300">
              Ver todas las expediciones y comparar precios →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== A bordo ===== */}
      <section id="a-bordo" aria-labelledby="titulo-a-bordo" className="region-divider px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>A bordo</Eyebrow>
              <h2 id="titulo-a-bordo" className="mt-4 text-4xl font-light leading-tight text-sky-100 md:text-5xl">
                La vida a bordo del<br />Buque Polar I
              </h2>
              <p className="mt-6 max-w-md text-base font-light leading-6 text-sky-100/60">
                Nuestro buque de investigación de clase polar de 52 metros lleva solo 14 pasajeros, brindándote un
                acceso sin precedentes a sitios de desembarco remotos que los cruceros más grandes no pueden
                alcanzar. Cada tarde, los científicos de la expedición te informan sobre lo que encontrarás al día
                siguiente.
              </p>
              <ul className="mt-6 space-y-3">
                {caracteristicasBuque.map((caracteristica) => (
                  <li key={caracteristica} className="flex items-start gap-3 text-sm font-light text-sky-100/60">
                    <span className="pt-0.5 text-sky-400">✦</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img src={buqueImg} alt="Vista desde la cubierta del Buque Polar I frente a montañas antárticas" className="h-96 w-full object-cover" />
              <div className="pointer-events-none absolute -left-4 top-4 h-96 w-full border border-sky-400/20" />
            </div>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden border border-sky-100/10 sm:grid-cols-3">
            {experienciasABordo.map((experiencia) => (
              <article key={experiencia.titulo} className="overflow-hidden border-sky-100/10 sm:border-l first:border-l-0">
                <div className="relative h-48 overflow-hidden bg-slate-950">
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
        </div>
      </section>

      {/* ===== Fauna ===== */}
      <section id="fauna" aria-labelledby="titulo-fauna" className="region-divider px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow center>Fauna</Eyebrow>
          <h2 id="titulo-fauna" className="mt-4 text-center text-5xl font-light leading-tight text-sky-100">
            La fauna que encontrarás
          </h2>

          <div className="mt-16 grid gap-px sm:grid-cols-3">
            {fauna.slice(0, 3).map((especie) => (
              <TarjetaFauna key={especie.id} especie={especie} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link to="/fauna" className="text-xs uppercase tracking-wide text-sky-400 hover:text-sky-300">
              Ver ficha completa de especies →
            </Link>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border border-sky-100/10 p-8 sm:flex-row">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-wide text-sky-100/60">Compromiso ecológico</p>
              <p className="mt-1 text-sm font-light text-sky-100/40">
                Cada expedición contribuye al seguimiento a largo plazo de las colonias de pingüinos llevado a cabo
                por el British Antarctic Survey. Tu presencia financia directamente la investigación de conservación.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 border border-sky-400/30 px-5 py-3">
              <span className="text-xs tracking-wider text-sky-400">IAATO</span>
              <span className="h-4 w-px bg-sky-400/30" />
              <span className="text-xs tracking-wider text-sky-400">CERTIFICADO</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Temporadas ===== */}
      <section id="temporadas" aria-labelledby="titulo-temporadas" className="region-divider px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Cuándo ir</Eyebrow>
          <h2 id="titulo-temporadas" className="mt-4 text-5xl font-light leading-tight text-sky-100">
            El calendario antártico
          </h2>

          <div className="mt-12 grid divide-y divide-sky-100/10 border border-sky-100/10 bg-sky-100/5 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {temporadas.map((temporada) => (
              <div
                key={temporada.rango}
                className={`p-6 ${temporada.activa ? 'bg-sky-400/5 border-b-2 border-sky-400' : 'bg-slate-950/90'}`}
              >
                <p className="text-2xl">{temporada.icono}</p>
                <p className="mt-3 text-xs tracking-wide text-sky-400/70">{temporada.rango}</p>
                <p className="mt-1 text-base text-sky-100">{temporada.titulo}</p>
                <p className="mt-1 text-xs font-light text-sky-100/30">{temporada.temperatura}</p>
                <p className="mt-4 text-sm font-light text-sky-100/50">{temporada.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="preguntas" aria-labelledby="titulo-faq" className="region-divider px-6 py-24 md:px-16">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 id="titulo-faq" className="mt-4 text-5xl font-light leading-tight text-sky-100">
            Antes de partir
          </h2>
          <div className="mt-12">
            <Acordeon items={preguntasFrecuentes.slice(0, 4)} />
          </div>
          <Link to="/preguntas-frecuentes" className="mt-6 inline-block text-xs uppercase tracking-wide text-sky-400 hover:text-sky-300">
            Ver todas las preguntas →
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="cta" className="relative overflow-hidden border-t border-sky-100/10 py-32">
        <img src={ctaImg} alt="Acantilado de un iceberg" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 to-slate-950/70" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-16">
          <p className="text-xs uppercase tracking-wider text-sky-400">Plazas limitadas — Temporada 2026</p>
          <h2 className="mt-6 text-4xl font-light leading-tight text-sky-100 md:text-6xl">
            ¿Listo para cruzar<br />el Pasaje Drake?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light text-sky-100/50">
            Habla con un especialista en expediciones. Asignamos a cada pasajero al viaje adecuado, ya sea tu
            primera aventura polar o tu décima.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contacto" className="bg-sky-400 px-10 py-4 text-xs font-medium uppercase tracking-wider text-slate-950">
              Consultar ahora
            </Link>
            <a href="tel:+522071234567" className="border border-sky-100/30 px-10 py-4 text-xs uppercase tracking-wider text-sky-100">
              +52 207 123 4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
