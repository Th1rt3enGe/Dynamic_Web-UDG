import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-sky-100">
      <Nav />
      <main id="contenido-principal" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
