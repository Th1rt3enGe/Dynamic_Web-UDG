<?php

// Autoload de Composer y variables de entorno
require __DIR__ . '/../vendor/autoload.php';

use Model\ActiveRecord;

require __DIR__ . '/funciones.php';
require __DIR__ . '/database.php';

// Conecta el ActiveRecord a la base de datos ya abierta en database.php
ActiveRecord::setDB($db);
