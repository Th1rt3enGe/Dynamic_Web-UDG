import { Link } from 'react-router-dom'

export default function NoEncontrado() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-wider text-sky-400">Error 404</p>
      <h1 className="mt-4 text-4xl font-light text-sky-100">Esta página se desprendió como un iceberg</h1>
      <p className="mt-4 text-sm font-light text-sky-100/50">
        No encontramos el contenido que buscabas. Vuelve al inicio para seguir explorando.
      </p>
      <Link to="/" className="mt-8 bg-sky-400 px-8 py-3 text-xs font-medium uppercase tracking-wider text-slate-950">
        Volver al inicio
      </Link>
    </div>
  )
}
