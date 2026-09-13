import icebergArco from '../assets/img/iceberg-arco-drake.jpg'
import peninsulaAtardecer from '../assets/img/peninsula-atardecer.jpg'
import glaciarAereo from '../assets/img/glaciar-aereo.jpg'
import icebergAzul from '../assets/img/iceberg-azul-montanas.jpg'
import lagunaIcebergs from '../assets/img/laguna-icebergs.jpg'

export const expediciones = [
  {
    slug: 'cruce-pasaje-drake',
    categoria: 'Clásica',
    nombre: 'Cruce del Pasaje Drake',
    salida: 'Ushuaia, Argentina',
    precio: 8900,
    dias: 12,
    plazas: 14,
    imagen: icebergArco,
    resumen:
      'La ruta clásica hacia la Antártida, cruzando el legendario Pasaje Drake hasta las islas Shetland del Sur y el norte de la península.',
    itinerario: [
      { dia: '1', titulo: 'Embarque en Ushuaia', detalle: 'Registro a bordo y zarpe por el Canal Beagle al atardecer.' },
      { dia: '2–3', titulo: 'Cruce del Pasaje Drake', detalle: 'Charlas de orientación, observación de aves pelágicas y aclimatación.' },
      { dia: '4–9', titulo: 'Islas Shetland del Sur y Península', detalle: 'Desembarcos diarios en zodiac, colonias de pingüinos y glaciares.' },
      { dia: '10–11', titulo: 'Regreso por el Drake', detalle: 'Navegación de vuelta con recapitulación científica del viaje.' },
      { dia: '12', titulo: 'Desembarque en Ushuaia', detalle: 'Fin de la expedición.' },
    ],
    incluye: ['Pensión completa a bordo', 'Desembarcos guiados en zodiac', 'Equipo de expedición (botas y parka)', 'Charlas científicas diarias'],
    noIncluye: ['Vuelos a Ushuaia', 'Seguro de viaje', 'Propinas a la tripulación'],
  },
  {
    slug: 'peninsula-antartica',
    categoria: 'Insignia',
    nombre: 'Península Antártica',
    salida: 'Punta Arenas, Chile',
    precio: 14200,
    dias: 18,
    plazas: 8,
    imagen: peninsulaAtardecer,
    resumen:
      'Un recorrido extendido por los canales interiores de la península, con más tiempo en tierra y sitios de desembarco menos visitados.',
    itinerario: [
      { dia: '1–2', titulo: 'Vuelo y embarque', detalle: 'Traslado a Punta Arenas y zarpe por el Estrecho de Magallanes.' },
      { dia: '3–4', titulo: 'Cruce del Drake', detalle: 'Rumbo sur hacia las Shetland del Sur.' },
      { dia: '5–14', titulo: 'Canales de la Península', detalle: 'Hasta dos desembarcos diarios, kayak y exploración en zodiac.' },
      { dia: '15–17', titulo: 'Regreso', detalle: 'Navegación de vuelta con talleres de fotografía.' },
      { dia: '18', titulo: 'Desembarque en Punta Arenas', detalle: 'Fin de la expedición.' },
    ],
    incluye: ['Pensión completa a bordo', 'Kayak y desembarcos ilimitados', 'Guía fotográfico dedicado', 'Equipo de expedición'],
    noIncluye: ['Vuelos internacionales', 'Seguro de viaje', 'Bebidas premium'],
  },
  {
    slug: 'mar-de-ross',
    categoria: 'Expedición',
    nombre: 'Mar de Ross y McMurdo',
    salida: 'Hobart, Australia',
    precio: 22500,
    dias: 24,
    plazas: 6,
    imagen: glaciarAereo,
    resumen:
      'La travesía más remota del continente: la Barrera de Hielo de Ross, la Isla de Ross y las colonias de pingüinos emperador.',
    itinerario: [
      { dia: '1–5', titulo: 'Travesía del Pacífico Sur', detalle: 'Navegación desde Tasmania cruzando el Círculo Polar Antártico.' },
      { dia: '6–18', titulo: 'Mar de Ross', detalle: 'Barrera de Hielo de Ross, Cabo Evans y colonias de pingüinos emperador.' },
      { dia: '19–23', titulo: 'Regreso a Hobart', detalle: 'Navegación de vuelta con seminarios de glaciología.' },
      { dia: '24', titulo: 'Desembarque en Hobart', detalle: 'Fin de la expedición.' },
    ],
    incluye: ['Pensión completa a bordo', 'Helicóptero de observación (sujeto a clima)', 'Equipo de expedición', 'Naturalistas polares senior'],
    noIncluye: ['Vuelos a Hobart', 'Seguro de viaje', 'Excursiones opcionales en helicóptero'],
  },
  {
    slug: 'georgia-del-sur',
    categoria: 'Fauna',
    nombre: 'Isla Georgia del Sur',
    salida: 'Stanley, Malvinas',
    precio: 18700,
    dias: 21,
    plazas: 10,
    imagen: icebergAzul,
    resumen:
      'El santuario de fauna más denso del Atlántico Sur: más de un millón de pingüinos rey y colonias de elefantes marinos.',
    itinerario: [
      { dia: '1–2', titulo: 'Embarque en Stanley', detalle: 'Visita a la capital de las Malvinas antes del zarpe.' },
      { dia: '3–5', titulo: 'Navegación al Atlántico Sur', detalle: 'Observación de albatros errantes y petreles gigantes.' },
      { dia: '6–15', titulo: 'Georgia del Sur', detalle: 'Bahía Salisbury, Grytviken y la tumba de Shackleton.' },
      { dia: '16–20', titulo: 'Regreso', detalle: 'Posible desvío por la Península Antártica según condiciones de hielo.' },
      { dia: '21', titulo: 'Desembarque en Stanley', detalle: 'Fin de la expedición.' },
    ],
    incluye: ['Pensión completa a bordo', 'Desembarcos guiados', 'Charla histórica sobre Shackleton', 'Equipo de expedición'],
    noIncluye: ['Vuelos a Stanley', 'Seguro de viaje', 'Propinas a la tripulación'],
  },
  {
    slug: 'mar-de-weddell',
    categoria: 'Insignia',
    nombre: 'Mar de Weddell',
    salida: 'Ushuaia, Argentina',
    precio: 19800,
    dias: 16,
    plazas: 12,
    imagen: lagunaIcebergs,
    resumen:
      'Icebergs tabulares gigantes y la ruta histórica del Endurance, sujeta a las condiciones de hielo marino de cada temporada.',
    itinerario: [
      { dia: '1–3', titulo: 'Embarque y cruce del Drake', detalle: 'Zarpe desde Ushuaia rumbo al Mar de Weddell.' },
      { dia: '4–12', titulo: 'Mar de Weddell', detalle: 'Icebergs tabulares, colonias de focas de Weddell y hielo marino.' },
      { dia: '13–15', titulo: 'Regreso por el Drake', detalle: 'Navegación de vuelta con recapitulación científica.' },
      { dia: '16', titulo: 'Desembarque en Ushuaia', detalle: 'Fin de la expedición.' },
    ],
    incluye: ['Pensión completa a bordo', 'Desembarcos guiados en zodiac', 'Equipo de expedición', 'Naturalistas polares'],
    noIncluye: ['Vuelos a Ushuaia', 'Seguro de viaje', 'Excursiones opcionales'],
  },
]

export const formatoPrecio = (valor) =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(valor)
