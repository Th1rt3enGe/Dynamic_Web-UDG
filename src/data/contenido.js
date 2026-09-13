import cubiertaBuque from '../assets/img/cubierta-buque-polar.jpg'
import zodiacGlaciar from '../assets/img/zodiac-glaciar.jpg'
import auroraPurpura from '../assets/img/aurora-austral-purpura.jpg'

export const temporadas = [
  {
    icono: '❄',
    rango: 'Oct – Nov',
    titulo: 'Inicio del Verano',
    temperatura: '-5 °C media',
    descripcion: 'El hielo marino retrocede. Los pingüinos comienzan a anidar. La luz regresa al continente tras meses de noche polar.',
  },
  {
    icono: '☀',
    rango: 'Dic – Ene',
    titulo: 'Pleno Verano',
    temperatura: '+2 °C media',
    descripcion: 'Luz solar las 24 horas. Máxima actividad de la fauna. Los polluelos de pingüino nacen. Mejores condiciones de hielo.',
    activa: true,
  },
  {
    icono: '🌊',
    rango: 'Feb – Mar',
    titulo: 'Final del Verano',
    temperatura: '-1 °C media',
    descripcion: 'Temporada alta de alimentación de ballenas. Los jóvenes pingüinos vuelan. Luz dramática para fotografía.',
  },
  {
    icono: '🌑',
    rango: 'Abr – Sep',
    titulo: 'Noche Polar',
    temperatura: '-30 °C media',
    descripcion: 'El continente es inaccesible por barco. Los pingüinos emperador inician su ritual de cría invernal.',
  },
]

export const experienciasABordo = [
  {
    titulo: 'Desembarcos en Zodiac',
    imagen: zodiacGlaciar,
    descripcion: 'Expediciones a tierra en embarcaciones inflables, guiadas por observadores certificados de IAATO.',
  },
  {
    titulo: 'Expediciones en Kayak',
    imagen: cubiertaBuque,
    descripcion: 'Rema entre el hielo marino a ras del agua para un encuentro íntimo con el paisaje.',
  },
  {
    titulo: 'Observación de la Aurora',
    imagen: auroraPurpura,
    descripcion: 'Guardias nocturnas en la cubierta de observación mientras la aurora austral danza sobre tu cabeza.',
  },
]

export const caracteristicasBuque = [
  'Casco reforzado para hielo (Clase Polar 7)',
  'Guía fotográfico dedicado',
  'Demostraciones con ROV submarino',
  'Política de puente abierto — navega junto al capitán',
]

export const estadisticas = [
  { valor: '28', sufijo: 'años', etiqueta: 'de expediciones antárticas' },
  { valor: '4,200+', sufijo: '', etiqueta: 'Pasajeros desembarcados' },
  { valor: '100%', sufijo: '', etiqueta: 'Viajes certificados IAATO' },
  { valor: '14', sufijo: 'máx.', etiqueta: 'Pasajeros por barco' },
]

export const preguntasFrecuentes = [
  {
    pregunta: '¿Qué condición física se requiere?',
    respuesta:
      'No se requiere experiencia previa en expediciones, pero sí una condición física básica: subir y bajar de la zodiac, caminar sobre nieve y terreno irregular durante 1–2 horas, y tolerar el movimiento del barco durante el cruce del Pasaje Drake.',
  },
  {
    pregunta: '¿Qué está incluido en el precio de la expedición?',
    respuesta:
      'El precio incluye pensión completa a bordo, todos los desembarcos guiados, charlas científicas diarias, equipo de expedición (parka y botas) y el uso de kayaks cuando el itinerario lo contempla. Los vuelos, el seguro de viaje y las propinas se cotizan aparte.',
  },
  {
    pregunta: '¿Cómo minimizan el impacto ambiental?',
    respuesta:
      'Operamos bajo los protocolos de la IAATO: límites estrictos de pasajeros en tierra, desinfección de calzado y equipo entre desembarcos, distancias mínimas de aproximación a la fauna y un programa de compensación de carbono para cada travesía.',
  },
  {
    pregunta: '¿Es obligatorio el seguro de viaje?',
    respuesta:
      'Sí. Todos los pasajeros deben contar con un seguro que cubra evacuación médica de emergencia y rescate en la Antártida, con una cobertura mínima de 250,000 USD, como lo exige la normativa IAATO.',
  },
  {
    pregunta: '¿Puedo viajar si nunca he estado en un crucero de expedición?',
    respuesta:
      'Por supuesto. Cerca de la mitad de nuestros pasajeros viajan por primera vez a la Antártida. El equipo de expedición ofrece charlas de preparación antes de cada desembarco y acompaña a los grupos en todo momento.',
  },
]
