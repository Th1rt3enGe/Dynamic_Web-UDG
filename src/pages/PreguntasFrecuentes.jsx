import Eyebrow from '../components/Eyebrow'
import Acordeon from '../components/Acordeon'
import { preguntasFrecuentes } from '../data/contenido'
import { Link } from 'react-router-dom'

export default function PreguntasFrecuentes() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-16">
      <Eyebrow>Preguntas frecuentes</Eyebrow>
      <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">Antes de partir</h1>
      <p className="mt-6 text-base font-light text-sky-100/50">
        Reunimos las dudas más comunes de quienes viajan por primera vez a la Antártida. Si tu pregunta no está
        aquí, escríbenos desde el{' '}
        <Link to="/contacto" className="text-sky-400 hover:text-sky-300">formulario de contacto</Link>.
      </p>

      <div className="mt-12">
        <Acordeon items={preguntasFrecuentes} />
      </div>
    </div>
  )
}
