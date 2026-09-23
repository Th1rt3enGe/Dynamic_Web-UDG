<?php

// This variables should be changed in the corresponding .env file
$db = mysqli_connect(
    $_ENV['DB_HOST'] ?? 'localhost',
    $_ENV['DB_USER'] ?? 'root',
    $_ENV['DB_PASS'] ?? '',
    $_ENV['DB_NAME'] ?? ''
);

if (!$db) {
    http_response_code(500);
    echo "Error: No se pudo conectar a MySQL. ";
    echo "errno: " . mysqli_connect_errno() . " — ";
    echo mysqli_connect_error();
    exit;
}

mysqli_set_charset($db, 'utf8mb4');
