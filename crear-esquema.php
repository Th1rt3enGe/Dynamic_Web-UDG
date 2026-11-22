<?php
/**
 * Terra Glacialis — adapta el sitio al esquema de Producción Multimedia.
 *
 * Crea/actualiza: Misión, Visión, Políticas de calidad, Ubicación y Acceso;
 * renombra Catálogo / Contáctame; reconstruye el menú en un menú NUEVO
 * (el anterior queda intacto) y crea la cuenta demo.
 *
 * Es idempotente: se puede ejecutar varias veces.
 *
 * Uso (desde la raíz de WordPress, en WAMP):
 *   wp eval-file crear-esquema.php
 */

if ( ! defined( 'WP_CLI' ) ) {
	exit;
}

/* ------------------------------------------------------------------ *
 * Configuración: ajusta los slugs a los que ya existan en tu sitio.
 * Para verlos: wp post list --post_type=page --fields=ID,post_name,post_title,post_parent
 * ------------------------------------------------------------------ */
const TG_MENU_NAME     = 'Menú esquema';
const TG_SLUG_CATALOGO = 'expediciones';
const TG_SLUG_CONTACTO = 'contacto';
const TG_SLUG_FAQ      = 'preguntas-frecuentes';
const TG_SLUG_ACCESO   = 'acceso';
const TG_EXTRAS        = [ 'experiencia', 'fauna', 'temporadas', 'conservacion', 'sobre-nosotros', 'prensa', 'terminos' ];

const TG_DEMO_USER     = 'demo';
const TG_DEMO_PASS     = 'viajero2026';
const TG_DEMO_EMAIL    = 'demo@terraglacialis.example';

// El CLI no tiene usuario: sin esto, kses elimina el <iframe> del mapa.
kses_remove_filters();
$admins = get_users( [ 'role' => 'administrator', 'number' => 1 ] );
if ( $admins ) {
	wp_set_current_user( $admins[0]->ID );
}

/* ------------------------------------------------------------------ *
 * Utilidades
 * ------------------------------------------------------------------ */
function tg_upsert_page( string $slug, string $title, string $html, int $order ): int {
	$args = [
		'post_type'    => 'page',
		'post_status'  => 'publish',
		'post_name'    => $slug,
		'post_title'   => $title,
		'post_content' => "<!-- wp:html -->\n" . trim( $html ) . "\n<!-- /wp:html -->",
		'menu_order'   => $order,
	];
	$existing = get_page_by_path( $slug );
	if ( $existing ) {
		$args['ID'] = $existing->ID;
	}
	$id = wp_insert_post( wp_slash( $args ), true );
	if ( is_wp_error( $id ) ) {
		WP_CLI::error( "No se pudo guardar '$slug': " . $id->get_error_message() );
	}
	WP_CLI::success( ( $existing ? 'Actualizada' : 'Creada' ) . " página '$title' (ID $id)" );
	return (int) $id;
}

function tg_rename_page( string $slug, string $title ): int {
	$page = get_page_by_path( $slug );
	if ( ! $page ) {
		WP_CLI::warning( "No existe la página '$slug'; no se renombró a '$title'. Ajusta la constante de slug." );
		return 0;
	}
	wp_update_post( wp_slash( [ 'ID' => $page->ID, 'post_title' => $title ] ) );
	WP_CLI::success( "Renombrada '$slug' → '$title' (el slug no cambia, los enlaces siguen vivos)" );
	return (int) $page->ID;
}

function tg_menu_item( int $menu_id, array $args ): int {
	static $position = 0;
	$position++;
	$defaults = [
		'menu-item-status'   => 'publish',
		'menu-item-position' => $position,
	];
	$id = wp_update_nav_menu_item( $menu_id, 0, array_merge( $defaults, $args ) );
	return is_wp_error( $id ) ? 0 : (int) $id;
}

function tg_menu_page( int $menu_id, int $page_id, int $parent = 0, string $title = '', string $class = '' ): int {
	if ( ! $page_id ) {
		return 0;
	}
	$args = [
		'menu-item-type'      => 'post_type',
		'menu-item-object'    => 'page',
		'menu-item-object-id' => $page_id,
		'menu-item-parent-id' => $parent,
	];
	if ( $title ) {
		$args['menu-item-title'] = $title;
	}
	if ( $class ) {
		$args['menu-item-classes'] = $class;
	}
	return tg_menu_item( $menu_id, $args );
}

/* ------------------------------------------------------------------ *
 * Contenido de las páginas nuevas
 * ------------------------------------------------------------------ */
$mision = <<<'HTML'
<div class="tg-section">
<p class="eyebrow">Nuestra misión</p>
<h2>Acercar la Antártida a quienes quieren conocerla, sin dejar huella</h2>
<p class="tg-lead">Organizamos expediciones de grupos reducidos, guiadas por científicos, para que cada viajero comprenda el continente blanco y regrese como defensor de su protección.</p>

<div class="tg-grid">
<div class="card">
<h3>Qué hacemos</h3>
<p>Diseñamos y operamos travesías antárticas con un máximo de 14 pasajeros por barco, con desembarcos diarios en zodiac, kayak y observación de fauna.</p>
</div>
<div class="card">
<h3>Para quién</h3>
<p>Viajeros curiosos, fotógrafos y amantes de la naturaleza que buscan una experiencia cercana, segura y con rigor científico.</p>
</div>
<div class="card">
<h3>Cómo lo hacemos</h3>
<p>Con equipos de glaciólogos, biólogos marinos y guías certificados por IAATO, y con protocolos estrictos de bioseguridad y distancia con la fauna.</p>
</div>
</div>
</div>
HTML;

$vision = <<<'HTML'
<div class="tg-section">
<p class="eyebrow">Nuestra visión</p>
<h2>Ser, en 2035, el referente hispanohablante del turismo polar de bajo impacto</h2>
<p class="tg-lead">Imaginamos un futuro donde viajar a la Antártida sea sinónimo de conocimiento, respeto y ciencia compartida.</p>

<div class="tg-grid">
<div class="card">
<h3>Travesías neutras en carbono</h3>
<p>Que el 100 % de nuestras expediciones compense y reduzca sus emisiones con proyectos certificados.</p>
</div>
<div class="card">
<h3>Ciencia ciudadana</h3>
<p>Que cada pasajero aporte observaciones útiles —avistamientos, fotografías, registros— a programas de investigación polar.</p>
</div>
<div class="card">
<h3>Cultura antártica</h3>
<p>Que miles de personas conozcan, a través de nuestros contenidos, por qué proteger el continente importa a todo el planeta.</p>
</div>
</div>
</div>
HTML;

$politicas = <<<'HTML'
<div class="tg-section">
<p class="eyebrow">Políticas de calidad</p>
<h2>Nuestro compromiso con cada travesía</h2>
<p class="tg-lead">En Terra Glacialis entendemos la calidad como seguridad, servicio, respeto ambiental y mejora constante. Estas son las políticas que guían cada expedición.</p>

<ol class="tg-policies">
<li>
<h3>Seguridad ante todo</h3>
<p>Todos los viajes cumplen los protocolos de IAATO. Cada pasajero cuenta con seguro de evacuación médica y cada desembarco se evalúa por el jefe de expedición antes de realizarse.</p>
</li>
<li>
<h3>Grupos reducidos</h3>
<p>Limitamos cada barco a 14 pasajeros para garantizar atención personal, menor impacto y mayor tiempo en tierra.</p>
</li>
<li>
<h3>Rigor científico</h3>
<p>Cada expedición incluye charlas diarias de especialistas y contenidos verificados. Corregimos de inmediato cualquier dato que resulte inexacto.</p>
</li>
<li>
<h3>Respeto por el entorno</h3>
<p>Aplicamos desinfección de equipo entre desembarcos, distancias mínimas con la fauna, cero plásticos de un solo uso a bordo y compensación de carbono en todas las travesías.</p>
</li>
<li>
<h3>Servicio transparente</h3>
<p>Informamos con claridad qué incluye cada precio, las condiciones de cancelación y los riesgos propios de un destino polar.</p>
</li>
<li>
<h3>Mejora continua</h3>
<p>Al terminar cada viaje aplicamos una encuesta de satisfacción y una revisión interna. Los resultados se usan para ajustar itinerarios, servicio y protocolos.</p>
</li>
</ol>

<p class="tg-note">¿Tienes una sugerencia o una queja? Escríbenos desde la sección <a href="/contacto/">Contáctame</a>.</p>
</div>
HTML;

$ubicacion = <<<'HTML'
<div class="tg-section">
<p class="eyebrow">Ubicación</p>
<h2>Dónde encontrarnos</h2>
<p class="tg-lead">Nuestra oficina central está en Ushuaia, la ciudad más austral del mundo y puerto de salida de nuestras travesías por el Pasaje Drake.</p>

<div class="tg-grid tg-grid--2">
<div class="card">
<h3>Oficina central</h3>
<address>
Terra Glacialis<br>
Muelle Comercial, Ushuaia<br>
Tierra del Fuego, Argentina
</address>
<p>Correo: <a href="mailto:contacto@terraglacialis.example">contacto@terraglacialis.example</a></p>
</div>
<div class="card">
<h3>Puertos de embarque</h3>
<ul>
<li>Ushuaia, Argentina — Pasaje Drake</li>
<li>Punta Arenas, Chile — Península Antártica</li>
<li>Hobart, Australia — Mar de Ross</li>
<li>Stanley, Islas Malvinas — Georgia del Sur</li>
</ul>
</div>
</div>

<div class="tg-map">
<iframe
title="Mapa de la oficina central de Terra Glacialis en Ushuaia"
src="https://www.openstreetmap.org/export/embed.html?bbox=-68.3300%2C-54.8200%2C-68.2800%2C-54.7950&amp;layer=mapnik&amp;marker=-54.8085%2C-68.3030"
loading="lazy"
allowfullscreen></iframe>
<p><a href="https://www.openstreetmap.org/?mlat=-54.8085&amp;mlon=-68.3030#map=14/-54.8085/-68.3030">Ver mapa ampliado en OpenStreetMap</a></p>
</div>

<p class="tg-note">Terra Glacialis es una empresa ficticia creada con fines académicos.</p>
</div>
HTML;

$acceso = <<<'HTML'
<div class="tg-section">
<p class="eyebrow">Acceso</p>
<h2>Área de viajeros</h2>
<p class="tg-lead">Todo el contenido de este sitio es público: no necesitas iniciar sesión para explorarlo. El área de viajeros es opcional y ofrece material de preparación adicional.</p>
[tg_login]
</div>
HTML;

/* ------------------------------------------------------------------ *
 * Ejecución
 * ------------------------------------------------------------------ */
$id_mision    = tg_upsert_page( 'mision', 'Misión', $mision, 10 );
$id_vision    = tg_upsert_page( 'vision', 'Visión', $vision, 20 );
$id_politicas = tg_upsert_page( 'politicas-de-calidad', 'Políticas de calidad', $politicas, 30 );
$id_ubicacion = tg_upsert_page( 'ubicacion', 'Ubicación', $ubicacion, 40 );
$id_acceso    = tg_upsert_page( TG_SLUG_ACCESO, 'Acceso', $acceso, 90 );

$id_catalogo  = tg_rename_page( TG_SLUG_CATALOGO, 'Catálogo de productos' );
$id_contacto  = tg_rename_page( TG_SLUG_CONTACTO, 'Contáctame' );
$id_faq       = tg_rename_page( TG_SLUG_FAQ, 'Preguntas frecuentes' );

// Cuenta demo (rol Suscriptor: sin acceso al panel de administración).
$demo = get_user_by( 'login', TG_DEMO_USER );
if ( ! $demo ) {
	$uid = wp_insert_user( [
		'user_login'   => TG_DEMO_USER,
		'user_pass'    => TG_DEMO_PASS,
		'user_email'   => TG_DEMO_EMAIL,
		'display_name' => 'Viajero demo',
		'role'         => 'subscriber',
	] );
	is_wp_error( $uid )
		? WP_CLI::warning( 'No se creó la cuenta demo: ' . $uid->get_error_message() )
		: WP_CLI::success( 'Cuenta demo creada: ' . TG_DEMO_USER . ' / ' . TG_DEMO_PASS );
} else {
	WP_CLI::log( 'La cuenta demo ya existía.' );
}

// Menú nuevo (el menú anterior no se toca).
$menu    = wp_get_nav_menu_object( TG_MENU_NAME );
$menu_id = $menu ? (int) $menu->term_id : (int) wp_create_nav_menu( TG_MENU_NAME );
foreach ( wp_get_nav_menu_items( $menu_id ) ?: [] as $old ) {
	wp_delete_post( $old->ID, true );
}

$front_id = (int) get_option( 'page_on_front' );
if ( $front_id ) {
	tg_menu_page( $menu_id, $front_id, 0, 'Inicio' );
} else {
	tg_menu_item( $menu_id, [
		'menu-item-type'  => 'custom',
		'menu-item-title' => 'Inicio',
		'menu-item-url'   => home_url( '/' ),
	] );
}
tg_menu_page( $menu_id, $id_mision );
tg_menu_page( $menu_id, $id_vision );
tg_menu_page( $menu_id, $id_politicas );
tg_menu_page( $menu_id, $id_ubicacion );

$menu_catalogo = tg_menu_page( $menu_id, $id_catalogo );
if ( $id_catalogo ) {
	$hijas = get_pages( [ 'child_of' => $id_catalogo, 'sort_column' => 'menu_order,post_title' ] );
	foreach ( $hijas as $hija ) {
		tg_menu_page( $menu_id, (int) $hija->ID, $menu_catalogo );
	}
}

tg_menu_page( $menu_id, $id_contacto );
tg_menu_page( $menu_id, $id_faq );

// Páginas extra (Fauna, Temporadas…) agrupadas en un submenú "Explora".
$extras = [];
foreach ( TG_EXTRAS as $slug ) {
	$p = get_page_by_path( $slug );
	if ( $p ) {
		$extras[] = (int) $p->ID;
	}
}
if ( $extras ) {
	$explora = tg_menu_item( $menu_id, [
		'menu-item-type'  => 'custom',
		'menu-item-title' => 'Explora',
		'menu-item-url'   => '#',
	] );
	foreach ( $extras as $pid ) {
		tg_menu_page( $menu_id, $pid, $explora );
	}
}

tg_menu_page( $menu_id, $id_acceso, 0, 'Acceso', 'menu-acceso' );

// Asignar al menú principal de GeneratePress.
$locations            = get_theme_mod( 'nav_menu_locations', [] );
$locations['primary'] = $menu_id;
set_theme_mod( 'nav_menu_locations', $locations );

WP_CLI::success( "Menú '" . TG_MENU_NAME . "' asignado a la ubicación 'primary'." );
WP_CLI::log( 'Listo. Revisa el sitio y, si algo no te gusta, reasigna el menú anterior en Apariencia → Menús.' );
