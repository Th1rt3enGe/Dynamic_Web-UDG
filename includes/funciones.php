<?php

// Development function
function debuguear($variable): void {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

// Sanitizes the text to show it cleanly in HTML
function s($html): string {
    return htmlspecialchars((string) $html, ENT_QUOTES, 'UTF-8');
}

// Send a JSON and stop execution
function json_response($datos, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// Allows the React API to be consumed by the front-end
// (Vite runs in another port) in prod (same origin).
function habilitar_cors(): void {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}
