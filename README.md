# Terra Glacialis
## Proyecto académico para la materia Web Dinámica

Sitio web de expediciones antárticas construido con **React**, **Vite**, **Tailwind CSS** y **React Router**,
con un pipeline de construcción y despliegue automático a **GitHub Pages**.

## Stack

- [Vite](https://vite.dev/) — bundler y servidor de desarrollo
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/vite`, sin archivo `tailwind.config.js`)
- [React Router](https://reactrouter.com/) v7 — enrutamiento entre páginas
- Fuente [Science Gothic](https://fonts.google.com/specimen/Science+Gothic) (Google Fonts)
- GitHub Actions → GitHub Pages para el despliegue

## Estructura del proyecto

```
terra-glacialis/
├── .github/workflows/deploy.yml   # Pipeline de build
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/img/                # Fotografías
│   ├── components/                # Nav, Footer, Layout, tarjetas, acordeón, etc.
│   ├── data/                      # Datos de expediciones, fauna, temporadas, FAQ
│   ├── pages/                     # Una página por ruta (ver tabla abajo)
│   ├── App.jsx                    # Definición de rutas
│   ├── main.jsx                   # Punto de entrada + BrowserRouter
│   └── index.css                  # Tailwind + tema (tipografía, colores, scrollbar)
├── index.html
└── vite.config.js
```

## Páginas

| Ruta                       | Página                                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                          | Inicio (hero, estadísticas, expediciones, fauna…)                                                                                       |
| `/expediciones`             | Catálogo de expediciones + tabla comparativa                                                                                            |
| `/expediciones/:slug`       | Detalle de cada expedición (5 rutas: `cruce-pasaje-drake`, `peninsula-antartica`, `mar-de-ross`, `georgia-del-sur`, `mar-de-weddell`) |
| `/experiencia`              | Vida a bordo del buque, actividades, horario tipo                                                                                       |
| `/fauna`                    | Galería de especies + ficha técnica (tabla)                                                                                             |
| `/temporadas`               | Calendario antártico + condiciones mes a mes                                                                                            |
| `/preguntas-frecuentes`     | Preguntas frecuentes (acordeón accesible)                                                                                               |
| `/conservacion`             | Compromiso ecológico, protocolos, certificaciones                                                                                       |
| `/sobre-nosotros`           | Historia de la compañía y equipo científico                                                                                             |
| `/prensa`                   | Sala de prensa                                                                                                                           |
| `/contacto`                 | **Formulario de registro de visitantes**                                                                                                |
| `/terminos`                 | Términos, privacidad y cookies                                                                                                          |
| `*`                          | Página 404                                                                                                                               |

## Desarrollo local

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # genera la carpeta dist/ lista para producción
npm run preview   
```

## Créditos de imágenes

Las fotografías en `src/assets/img/` corresponden al material encontrado en webs como Pexels, Dreamstime, Facebook, entre otras de fuente libre (paisajes antárticos, icebergs, fauna y auroras australes) utilizadas únicamente con fines educativos.
