<?php

namespace app\classes;

class Paginacion{
    public $pagina_actual;
    public $registros_por_pagina;
    public $total_registros;

    public function __construct($pagina_actual = 1, $registros_por_pagina = 10, $total_registros = 0)
    {
        $this->pagina_actual = max(1, (int) $pagina_actual);
        $this->registros_por_pagina = max(1, (int) $registros_por_pagina);
        $this->total_registros = (int) $total_registros;
    }

    public function offset()
    {
        return $this->registros_por_pagina * ($this->pagina_actual - 1);
    }

    public function total_paginas()
    {
        return (int) max(1, ceil($this->total_registros / $this->registros_por_pagina));
    }

    public function pagina_anterior()
    {
        $anterior = $this->pagina_actual - 1;
        return ($anterior > 0) ? $anterior : false;
    }

    public function pagina_siguiente()
    {
        $siguiente = $this->pagina_actual + 1;
        return ($siguiente <= $this->total_paginas()) ? $siguiente : false;
    }
}