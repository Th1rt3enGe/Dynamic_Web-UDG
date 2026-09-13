import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="pie-de-pagina" className="region-divider px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <span className="text-sky-400">✦</span>
            <span className="text-base font-semibold text-sky-100">TERRA GLACIALIS</span>
          </div>
          <p className="mt-4 text-sm font-light text-sky-100/30">
            Expediciones antárticas en barco pequeño desde 1998. Operador Completo IAATO. Registrado en el Reino Unido.
          </p>
        </div>

        <div>
          <h2 className="text-[10.4px] uppercase tracking-wide text-sky-100/30">Destinos</h2>
          <ul className="mt-4 space-y-2 text-sm font-light text-sky-100/40">
            <li><Link to="/expediciones/peninsula-antartica" className="hover:text-sky-100">Península Antártica</Link></li>
            <li><Link to="/expediciones/georgia-del-sur" className="hover:text-sky-100">Georgia del Sur</Link></li>
            <li><Link to="/expediciones/mar-de-ross" className="hover:text-sky-100">Mar de Ross</Link></li>
            <li><Link to="/expediciones/mar-de-weddell" className="hover:text-sky-100">Mar de Weddell</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[10.4px] uppercase tracking-wide text-sky-100/30">Compañía</h2>
          <ul className="mt-4 space-y-2 text-sm font-light text-sky-100/40">
            <li><Link to="/sobre-nosotros" className="hover:text-sky-100">Sobre Nosotros</Link></li>
            <li><Link to="/conservacion" className="hover:text-sky-100">Conservación</Link></li>
            <li><Link to="/prensa" className="hover:text-sky-100">Prensa</Link></li>
            <li><Link to="/contacto" className="hover:text-sky-100">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[10.4px] uppercase tracking-wide text-sky-100/30">Visitantes</h2>
          <ul className="mt-4 space-y-2 text-sm font-light text-sky-100/40">
            <li><Link to="/contacto" className="hover:text-sky-100">Formulario de registro</Link></li>
            <li><Link to="/preguntas-frecuentes" className="hover:text-sky-100">Preguntas frecuentes</Link></li>
            <li><Link to="/terminos" className="hover:text-sky-100">Términos y privacidad</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-sky-100/10 pt-6 text-[10.4px] font-light tracking-wide text-sky-100/20 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} TERRA GLACIALIS LTD. TODOS LOS DERECHOS RESERVADOS. | Página generada con fines de aprendizaje.</p>
        <Link to="/terminos" className="hover:text-sky-100/50">PRIVACIDAD · TÉRMINOS · POLÍTICA DE COOKIES</Link>
      </div>
    </footer>
  )
}
