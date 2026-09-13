import Eyebrow from '../components/Eyebrow'

const notas = [
  { medio: 'Geo Expediciones', titulo: 'Terra Glacialis marca el estándar del turismo científico polar', fecha: 'Marzo 2026' },
  { medio: 'Revista Polar Sur', titulo: 'Cómo un operador pequeño financia la investigación del British Antarctic Survey', fecha: 'Enero 2026' },
  { medio: 'Náutica Austral', titulo: 'El Buque Polar I renueva su certificación Polar Code', fecha: 'Noviembre 2025' },
]

export default function Prensa() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-16">
      <Eyebrow>Sala de prensa</Eyebrow>
      <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">Terra Glacialis en los medios</h1>
      <p className="mt-6 text-base font-light text-sky-100/50">
        Selección de menciones y reportajes recientes sobre nuestras expediciones y nuestro trabajo de conservación.
      </p>

      <ul className="mt-12 divide-y divide-sky-100/10 border-t border-sky-100/10">
        {notas.map((nota) => (
          <li key={nota.titulo} className="py-6">
            <p className="text-xs uppercase tracking-wide text-sky-400">{nota.medio} · {nota.fecha}</p>
            <p className="mt-2 text-lg font-light text-sky-100">{nota.titulo}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 border border-sky-100/10 p-6">
        <h2 className="text-sm uppercase tracking-wide text-sky-100/60">Contacto de prensa</h2>
        <p className="mt-2 text-sm font-light text-sky-100/50">
          Para entrevistas, imágenes en alta resolución o acceso a bordo, escribe a{' '}
          <a href="mailto:prensa@terraglacialis.example" className="text-sky-400 hover:text-sky-300">
            prensa@terraglacialis.example
          </a>.
        </p>
      </div>
    </div>
  )
}
