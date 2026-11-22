# Terra Glacialis — WordPress en Railway (rama `wordpress`)
# Imagen oficial de WordPress + el wp-content del repo (tema, plugins, uploads).
# Si la versión de WP de la imagen es menor que la de tu sitio local (7.1.2), fija la etiqueta.
FROM wordpress:php8.3-apache

# Apache solo admite un MPM. Con PHP como módulo debe ser prefork:
# se eliminan event/worker y se deja prefork activo.
RUN rm -f /etc/apache2/mods-enabled/mpm_event.load \
          /etc/apache2/mods-enabled/mpm_event.conf \
          /etc/apache2/mods-enabled/mpm_worker.load \
          /etc/apache2/mods-enabled/mpm_worker.conf \
 && a2enmod mpm_prefork \
 && apache2ctl -t

# El entrypoint copia /usr/src/wordpress a /var/www/html al arrancar.
COPY wp-content/ /usr/src/wordpress/wp-content/
COPY docker/uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# Railway enruta al puerto definido en la variable PORT (ponla en 80).
EXPOSE 80
