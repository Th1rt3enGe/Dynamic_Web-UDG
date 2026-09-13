export default function TarjetaFauna({ especie }) {
  return (
    <article className="group relative h-96 overflow-hidden">
      <img
        src={especie.imagen}
        alt={especie.nombre}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
        <div className="flex items-end justify-between gap-3">
          <h3 className="text-lg text-sky-100">{especie.nombre}</h3>
          <span className="shrink-0 text-sm font-light text-sky-400">{especie.poblacion}</span>
        </div>
        <p className="text-xs italic font-light text-sky-100/40">{especie.nombreCientifico}</p>
        <p className="text-sm font-light text-sky-100/60">{especie.descripcion}</p>
      </div>
    </article>
  )
}
