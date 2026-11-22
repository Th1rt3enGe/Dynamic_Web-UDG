<?php

// Site child theme for GeneratePress

const TG_PAGINA_ACCESO = '/acceso/';
const TG_DEMO_USER_PUBLICO = 'demo'; // Credentials for demo user
const TG_DEMO_PASS_PUBLICA = 'viajero2026';
add_shortcode( 'tg_login', 'tg_login_shortcode' );


function enqueue_styles(): void {
	wp_enqueue_style( 'generatepress-parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'terra-glacialis-child-style', get_stylesheet_directory_uri() . '/style.css', [ 'generatepress-parent-style' ], '1.0.0' );

	wp_enqueue_style(
		'science-gothic-font',
		'https://fonts.googleapis.com/css2?family=Science+Gothic:opsz,wght@9..144,100..900&display=swap',
		[],
		null
	);
}

function tg_login_shortcode(): string {
	if ( is_user_logged_in() ) {
		$user = wp_get_current_user();
		ob_start();
		?>
		<div class="tg-login tg-login--in">
			<p>Sesión iniciada como <strong><?php echo esc_html( $user->display_name ); ?></strong>.</p>
			<div class="card">
				<h3>Guía de preparación del viajero</h3>
				<ul>
					<li>Capas térmicas, forro polar y chaqueta cortaviento e impermeable.</li>
					<li>Medicamento contra el mareo para el cruce del Pasaje Drake.</li>
					<li>Cámara con baterías de repuesto: el frío las agota rápido.</li>
					<li>Seguro de viaje con evacuación médica (mínimo 250 000 USD).</li>
					<li>Mantén 5 m de distancia con la fauna y no dejes residuos.</li>
				</ul>
			</div>
			<p><a class="btn-secondary" href="<?php echo esc_url( wp_logout_url( home_url( TG_PAGINA_ACCESO ) ) ); ?>">Cerrar sesión</a></p>
		</div>
		<?php
		return (string) ob_get_clean();
	}

	$estado = isset( $_GET['login'] ) ? sanitize_key( wp_unslash( $_GET['login'] ) ) : '';
	$aviso  = '';
	if ( 'failed' === $estado ) {
		$aviso = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
	} elseif ( 'empty' === $estado ) {
		$aviso = 'Escribe tu usuario y tu contraseña.';
	}

	$form = wp_login_form( [
		'echo'           => false,
		'redirect'       => home_url( TG_PAGINA_ACCESO ),
		'label_username' => 'Usuario',
		'label_password' => 'Contraseña',
		'label_log_in'   => 'Entrar',
		'remember'       => false,
	] );

	ob_start();
	?>
	<div class="tg-login">
		<?php if ( $aviso ) : ?>
			<p class="tg-login__error" role="alert"><?php echo esc_html( $aviso ); ?></p>
		<?php endif; ?>
		<div class="card">
			<?php echo $form; // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</div>
		<p class="tg-note">
			<strong>Cuenta de demostración:</strong> usuario <code><?php echo esc_html( TG_DEMO_USER_PUBLICO ); ?></code>,
			contraseña <code><?php echo esc_html( TG_DEMO_PASS_PUBLICA ); ?></code>.
			No necesitas registrarte para ver el sitio.
		</p>
	</div>
	<?php
	return (string) ob_get_clean();
}

function fix_svg(): void {
    echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}

add_action( 'wp_enqueue_scripts', 'enqueue_styles' );

add_action( 'admin_init', static function () {
	if ( ! current_user_can( 'edit_posts' ) && ! wp_doing_ajax() ) {
		wp_safe_redirect( home_url( TG_PAGINA_ACCESO ) );
		exit;
	}
} );

add_action( 'wp_login_failed', static function () {
	tg_volver_con_error( 'failed' );
} );

add_action( 'admin_head', 'fix_svg' );

add_filter( 'authenticate', static function ( $usuario, $nombre, $clave ) {
	if ( ( '' === $nombre || '' === $clave ) && isset( $_POST['log'] ) ) {
		tg_volver_con_error( 'empty' );
	}
	return $usuario;
}, 30, 3 );

// Support for svg uploads
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

	global $wp_version;
	if ( $wp_version !== '4.7.1' ) {
		return $data;
	}

	$filetype = wp_check_filetype( $filename, $mimes );

	return [
		'ext'             => $filetype['ext'],
		'type'            => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];

}, 10, 4 );

add_filter( 'show_admin_bar', static function ( $mostrar ) {
	return current_user_can( 'edit_posts' ) ? $mostrar : false;
} );

function cc_mime_types( $mimes ){
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

add_filter( 'login_redirect', static function ( $destino, $solicitado, $usuario ) {
	if ( $usuario instanceof WP_User && ! user_can( $usuario, 'edit_posts' ) ) {
		return home_url( TG_PAGINA_ACCESO );
	}
	return $destino;
}, 10, 3 );
