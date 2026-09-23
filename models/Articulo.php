<?php

namespace Model;

class Articulo extends ActiveRecord
{
    protected static $tabla = "articulos";

    protected static $columnasDB = [
        'id',
        'titulo',
        'cuerpo',
        'autor',
        'fecha_publicacion',
        'imagen',
    ];

    public int $id;
    public string $titulo;
    public string $cuerpo;
    public string $autor;
    public mixed $fecha_publicacion;
    public string $imagen;

    const array COLUMNAS_ORDENABLES = [
      'titulo' => 'titulo',
      'autor' => 'autor',
      'fecha' => 'fecha_publicacion',
    ];

    public function __construct($args = [])
    {
        $this->id = $args['id'] ?? null;
        $this->titulo = $args['titulo'] ?? '';
        $this->cuerpo = $args['cuerpo'] ?? '';
        $this->autor = $args['autor'] ?? '';
        $this->fecha_publicacion = $args['fecha_publicacion'] ?? date('Y-m-d');
        $this->imagen = $args['imagen'] ?? '';
    }

    public function validar()
    {
        $alertas = [];

        if (empty($this->titulo)) {
            $alertas[] = "El título del artículo es obligatorio";
        } elseif (mb_strlen($this->titulo) > 100) {
            $alertas[] = 'El título no puede superar los 100 caracteres';
        }

        if (empty($this->cuerpo)) {
            $alertas[] = 'El cuerpo del artículo es obligatorio';
        }

        if (empty($this->autor)) {
            $alertas[] = 'El autor del artículo es obligatorio';
        }

        if (empty($this->fecha_publicacion)) {
            $alertas[] = 'La fecha de publicación es obligatoria';
        }

        return $alertas;
    }

    public static function listadoPaginado(string $columnaOrden, string $direccion, int $porPagina, int $offset): array
    {
        $porPagina = max(1, $porPagina);
        $offset = max(0, $offset);
        $directorio = strtoupper($direccion) === 'ASC' ? 'ASC' : 'DESC';

        $query = "SELECT * FROM " . self::$tabla
            . " ORDER BY  $columnaOrden $direccion, id DESC"
            . "LIMIT $porPagina OFFSET $offset";

        return self::consultarSQL($query);
    }

    public function toArray(): array
    {
        return [
            'id' => (int)$this->id,
            'titulo' => $this->titulo,
            'cuerpo' => $this->cuerpo,
            'autor' => $this->autor,
            'fecha_publicacion' => $this->fecha_publicacion,
            'imagen' => $this->imagen,
        ];
    }
}