import { useState } from 'react'
import Eyebrow from '../components/Eyebrow'

const intereses = [
  'Reservar una expedición',
  'Recibir el folleto en PDF',
  'Preguntar por fechas y disponibilidad',
  'Prensa o colaboraciones',
]

const estadoInicial = {
  nombre: '',
  sexo: '',
  telefono: '',
  correo: '',
  intereses: [],
  comentario: '',
  aceptaTerminos: false,
}

export default function Contacto() {
  const [formulario, setFormulario] = useState(estadoInicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const actualizarCampo = (campo, valor) => {
    setFormulario((previo) => ({ ...previo, [campo]: valor }))
  }

  const alternarInteres = (interes) => {
    setFormulario((previo) => {
      const yaExiste = previo.intereses.includes(interes)
      return {
        ...previo,
        intereses: yaExiste ? previo.intereses.filter((i) => i !== interes) : [...previo.intereses, interes],
      }
    })
  }

  const validar = () => {
    const nuevosErrores = {}
    if (!formulario.nombre.trim()) nuevosErrores.nombre = 'Escribe tu nombre completo.'
    if (!formulario.correo.trim()) nuevosErrores.correo = 'Escribe un correo electrónico.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) nuevosErrores.correo = 'El correo no parece válido.'
    if (!formulario.aceptaTerminos) nuevosErrores.aceptaTerminos = 'Debes aceptar las condiciones de uso.'
    return nuevosErrores
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const nuevosErrores = validar()
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true)
    }
  }

  const limpiarFormulario = () => {
    setFormulario(estadoInicial)
    setErrores({})
    setEnviado(false)
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-16">
      <Eyebrow>Contacto</Eyebrow>
      <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">Registro de visitantes</h1>
      <p className="mt-6 text-base font-light text-sky-100/50">
        Completa el formulario y un especialista en expediciones te responderá en un plazo máximo de dos días
        hábiles. Este formulario es una simulación con fines de aprendizaje: no se envía a ningún servidor.
      </p>

      {enviado && (
        <div role="status" className="mt-8 border border-sky-400/40 bg-sky-400/10 p-4 text-sm text-sky-200">
          ¡Gracias, {formulario.nombre.split(' ')[0]}! Recibimos tu solicitud y te contactaremos a {formulario.correo}.
        </div>
      )}

      <form id="formulario-visitantes" noValidate onSubmit={manejarEnvio} className="mt-10 space-y-8">
        <div id="datos-personales" className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="nombre" className="block text-xs uppercase tracking-wide text-sky-100/60">
              Nombre completo <span aria-hidden="true" className="text-sky-400">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              value={formulario.nombre}
              onChange={(e) => actualizarCampo('nombre', e.target.value)}
              aria-invalid={Boolean(errores.nombre)}
              aria-describedby={errores.nombre ? 'error-nombre' : undefined}
              className="mt-2 w-full border border-sky-100/20 bg-transparent px-4 py-3 text-sky-100 outline-none focus:border-sky-400"
              placeholder="Ej. Alejandra Torres Méndez"
            />
            {errores.nombre && <p id="error-nombre" className="mt-1 text-xs text-rose-300">{errores.nombre}</p>}
          </div>

          <fieldset>
            <legend className="text-xs uppercase tracking-wide text-sky-100/60">Sexo</legend>
            <div className="mt-2 space-y-2">
              {['Femenino', 'Masculino', 'Prefiero no decirlo'].map((opcion) => (
                <label key={opcion} className="flex items-center gap-2 text-sm font-light text-sky-100/70">
                  <input
                    type="radio"
                    name="sexo"
                    value={opcion}
                    checked={formulario.sexo === opcion}
                    onChange={(e) => actualizarCampo('sexo', e.target.value)}
                    className="h-4 w-4 accent-sky-400"
                  />
                  {opcion}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="telefono" className="block text-xs uppercase tracking-wide text-sky-100/60">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              autoComplete="tel"
              value={formulario.telefono}
              onChange={(e) => actualizarCampo('telefono', e.target.value)}
              className="mt-2 w-full border border-sky-100/20 bg-transparent px-4 py-3 text-sky-100 outline-none focus:border-sky-400"
              placeholder="+52 55 0000 0000"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="correo" className="block text-xs uppercase tracking-wide text-sky-100/60">
              Correo electrónico <span aria-hidden="true" className="text-sky-400">*</span>
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              autoComplete="email"
              required
              value={formulario.correo}
              onChange={(e) => actualizarCampo('correo', e.target.value)}
              aria-invalid={Boolean(errores.correo)}
              aria-describedby={errores.correo ? 'error-correo' : undefined}
              className="mt-2 w-full border border-sky-100/20 bg-transparent px-4 py-3 text-sky-100 outline-none focus:border-sky-400"
              placeholder="tú@correo.com"
            />
            {errores.correo && <p id="error-correo" className="mt-1 text-xs text-rose-300">{errores.correo}</p>}
          </div>
        </div>

        <fieldset id="intereses">
          <legend className="text-xs uppercase tracking-wide text-sky-100/60">¿En qué podemos ayudarte?</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {intereses.map((interes) => (
              <label key={interes} className="flex items-center gap-2 text-sm font-light text-sky-100/70">
                <input
                  type="checkbox"
                  name="intereses"
                  value={interes}
                  checked={formulario.intereses.includes(interes)}
                  onChange={() => alternarInteres(interes)}
                  className="h-4 w-4 accent-sky-400"
                />
                {interes}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="comentario" className="block text-xs uppercase tracking-wide text-sky-100/60">Comentario</label>
          <textarea
            id="comentario"
            name="comentario"
            rows={4}
            value={formulario.comentario}
            onChange={(e) => actualizarCampo('comentario', e.target.value)}
            className="mt-2 w-full border border-sky-100/20 bg-transparent px-4 py-3 text-sky-100 outline-none focus:border-sky-400"
            placeholder="Cuéntanos fechas tentativas, número de viajeros o cualquier duda."
          />
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm font-light text-sky-100/70">
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={formulario.aceptaTerminos}
              onChange={(e) => actualizarCampo('aceptaTerminos', e.target.checked)}
              aria-invalid={Boolean(errores.aceptaTerminos)}
              aria-describedby={errores.aceptaTerminos ? 'error-terminos' : undefined}
              className="mt-1 h-4 w-4 accent-sky-400"
            />
            <span>
              He leído y acepto las condiciones de uso del sitio y el aviso de privacidad. <span aria-hidden="true" className="text-sky-400">*</span>
            </span>
          </label>
          {errores.aceptaTerminos && <p id="error-terminos" className="mt-1 text-xs text-rose-300">{errores.aceptaTerminos}</p>}
        </div>

        <div className="flex flex-wrap gap-4">
          <button type="submit" className="bg-sky-400 px-8 py-3 text-xs font-medium uppercase tracking-wider text-slate-950">
            Enviar solicitud
          </button>
          <button
            type="button"
            onClick={limpiarFormulario}
            className="border border-sky-100/30 px-8 py-3 text-xs uppercase tracking-wider text-sky-100"
          >
            Limpiar formulario
          </button>
        </div>
      </form>

      <div className="mt-16 border-t border-sky-100/10 pt-8 text-sm font-light text-sky-100/40">
        <p>También puedes escribirnos directamente:</p>
        <p className="mt-2 text-sky-100/70">reservas@terraglacialis.example · +52 207 123 4567</p>
      </div>
    </div>
  )
}
