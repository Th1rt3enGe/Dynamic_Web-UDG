import albatrosErrante from '../assets/img/albatros-errante.jpg'
import ballenaJorobada from '../assets/img/ballena-jorobada.jpg'
import focaWeddel from '../assets/img/foca-weddel.jpg'
import elefanteMarino from '../assets/img/elefante-marino.jpg'
import pinguinosGentoo from '../assets/img/pinguinos-gentoo-nieve.jpg'
import pinguinosEmperador from '../assets/img/pinguinos-emperador.jpg'

export const fauna = [
  {
    id: 'pinguino-emperador',
    nombre: 'Pingüino Emperador',
    nombreCientifico: 'Aptenodytes forsteri',
    poblacion: '595,000',
    altura: '110–130 cm',
    estado: 'Casi amenazado',
    imagen: pinguinosEmperador,
    descripcion: 'El pingüino más grande del mundo, que cría en el brutal invierno antártico sobre el hielo marino.',
  },
  {
    id: 'foca-weddell',
    nombre: 'Foca de Weddell',
    nombreCientifico: 'Leptonychotes weddellii',
    poblacion: '~800,000',
    altura: '2.5–3.5 m',
    estado: 'Preocupación menor',
    imagen: focaWeddel,
    descripcion: 'Maestras del buceo bajo el hielo, aguantando la respiración más de 80 minutos a gran profundidad.',
  },
  {
    id: 'ballena-jorobada',
    nombre: 'Ballena Jorobada',
    nombreCientifico: 'Megaptera novaeangliae',
    poblacion: '~135,000',
    altura: '12–16 m',
    estado: 'Preocupación menor',
    imagen: ballenaJorobada,
    descripcion: 'Espectaculares cazadoras que se alimentan de los enjambres de kril antártico en superficie.',
  },
  {
    id: 'pinguino-gentoo',
    nombre: 'Pingüino Gentoo',
    nombreCientifico: 'Pygoscelis papua',
    poblacion: '~774,000',
    altura: '51–90 cm',
    estado: 'Preocupación menor',
    imagen: pinguinosGentoo,
    descripcion: 'El pingüino más veloz bajo el agua, reconocible por la franja blanca sobre sus ojos.',
  },
  {
    id: 'albatros-errante',
    nombre: 'Albatros Errante',
    nombreCientifico: 'Diomedea exulans',
    poblacion: '~20,000',
    altura: 'Envergadura 3.5 m',
    estado: 'Vulnerable',
    imagen: albatrosErrante,
    descripcion: 'La mayor envergadura alar de cualquier ave viva, capaz de planear miles de kilómetros sin batir las alas.',
  },
  {
    id: 'elefante-marino',
    nombre: 'Elefante Marino del Sur',
    nombreCientifico: 'Mirounga leonina',
    poblacion: '~650,000',
    altura: 'hasta 6 m (machos)',
    estado: 'Preocupación menor',
    imagen: elefanteMarino,
    descripcion: 'El pinnípedo más grande del mundo; los machos libran combates rituales en las playas de Georgia del Sur.',
  },
]
