<?php

require __DIR__ . '/../includes/app.php';

use Model\Articulo;

habilitar_cors();

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if (!$id) {
    json_response(['error' => 'Falta el parámetro "id"'], 400);
}

$articulo = Articulo::find($id);

if (!$articulo) {
    json_response(['error' => 'Articulo no encontrado'], 404);
}

global $db;
$anteriorRes = $db->query("SELECT id, titulo FROM articulos WHERE id < $id ORDER BY id DESC LIMIT 1");
$siguienteRes = $db->query("SELECT id, titulo FROM articulos WHERE id > $id ORDER BY id ASC LIMIT 1");

json_response([
    'articulo' => $articulo->toArray(),
    'anterior' => $anteriorRes->fetch_assoc(),
    'siguiente' => $siguienteRes->fetch_assoc(),
]);