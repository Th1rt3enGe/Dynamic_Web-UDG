<?php

// Site child theme for GeneratePress

function terra_glacialis_enqueue_styles() {
	wp_enqueue_style( 'generatepress-parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'terra-glacialis-child-style', get_stylesheet_directory_uri() . '/style.css', [ 'generatepress-parent-style' ], '1.0.0' );

	wp_enqueue_style(
		'science-gothic-font',
		'https://fonts.googleapis.com/css2?family=Science+Gothic:opsz,wght@9..144,100..900&display=swap',
		[],
		null
	);
}

add_action( 'wp_enqueue_scripts', 'terra_glacialis_enqueue_styles' );

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

function cc_mime_types( $mimes ){
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
	echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );