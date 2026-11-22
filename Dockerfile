# Terra Glacialis — WordPress en Railway (rama `wordpress`)
# Imagen oficial de WordPress + el wp-content del repo (tema, plugins, uploads).
# Si la versión de WP de la imagen es menor que la de tu sitio local (7.1.2), fija la etiqueta.
FROM wordpress:php8.3-apache

# El entrypoint copia /usr/src/wordpress a /var/www/html al arrancar.
COPY wp-content/ /usr/src/wordpress/wp-content/
COPY docker/uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# Railway enruta al puerto definido en la variable PORT (ponla en 80).
EXPOSE 80
