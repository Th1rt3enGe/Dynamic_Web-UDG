import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Expediciones from './pages/Expediciones'
import ExpedicionDetalle from './pages/ExpedicionDetalle'
import Experiencia from './pages/Experiencia'
import Fauna from './pages/Fauna'
import Temporadas from './pages/Temporadas'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import Conservacion from './pages/Conservacion'
import SobreNosotros from './pages/SobreNosotros'
import Prensa from './pages/Prensa'
import Contacto from './pages/Contacto'
import Terminos from './pages/Terminos'
import NoEncontrado from './pages/NoEncontrado'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/expediciones" element={<Expediciones />} />
        <Route path="/expediciones/:slug" element={<ExpedicionDetalle />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/fauna" element={<Fauna />} />
        <Route path="/temporadas" element={<Temporadas />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/conservacion" element={<Conservacion />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/prensa" element={<Prensa />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}
