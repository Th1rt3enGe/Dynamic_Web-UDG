import Eyebrow from '../components/Eyebrow'

export default function Terminos() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-16">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 text-5xl font-light leading-tight text-sky-100 md:text-6xl">Términos y privacidad</h1>

      <section aria-labelledby="titulo-condiciones" className="mt-12">
        <h2 id="titulo-condiciones" className="text-2xl font-light text-sky-100">Condiciones de uso</h2>
        <p className="mt-4 text-sm font-light leading-6 text-sky-100/50">
          Este sitio es un proyecto académico con fines de aprendizaje. Los precios, itinerarios y datos de fauna se
          presentan con propósitos ilustrativos y no constituyen una oferta comercial real. El contenido no debe
          usarse para tomar decisiones de viaje o de reserva.
        </p>
      </section>

      <section aria-labelledby="titulo-privacidad" className="mt-12">
        <h2 id="titulo-privacidad" className="text-2xl font-light text-sky-100">Aviso de privacidad</h2>
        <p className="mt-4 text-sm font-light leading-6 text-sky-100/50">
          El formulario de registro de visitantes de este proyecto no envía información a ningún servidor: los datos
          capturados permanecen únicamente en la memoria del navegador durante la sesión y se descartan al recargar
          la página.
        </p>
      </section>

      <section aria-labelledby="titulo-cookies" className="mt-12">
        <h2 id="titulo-cookies" className="text-2xl font-light text-sky-100">Política de cookies</h2>
        <p className="mt-4 text-sm font-light leading-6 text-sky-100/50">
          El sitio no utiliza cookies de rastreo ni servicios de analítica de terceros.
        </p>
      </section>
    </div>
  )
}
