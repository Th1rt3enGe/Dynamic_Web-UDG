# Terra Glacialis — WordPress en Railway (rama `wordpress`)
# Imagen oficial de WordPress + el wp-content del repo (tema, plugins, uploads).
FROM wordpress:php8.3-apache

# Apache solo admite un MPM; con PHP como módulo debe ser prefork.
RUN rm -f /etc/apache2/mods-enabled/mpm_event.load \
          /etc/apache2/mods-enabled/mpm_event.conf \
          /etc/apache2/mods-enabled/mpm_worker.load \
          /etc/apache2/mods-enabled/mpm_worker.conf \
 && a2enmod mpm_prefork \
 && apache2ctl -t

# El entrypoint copia /usr/src/wordpress a /var/www/html al arrancar.
COPY wp-content/ /usr/src/wordpress/wp-content/
COPY docker/uploads.ini /usr/local/etc/php/conf.d/uploads.ini

# Script de arranque (se quitan los saltos de línea de Windows por si acaso).
COPY docker/start.sh /usr/local/bin/tg-start.sh
RUN sed -i 's/\r$//' /usr/local/bin/tg-start.sh && chmod +x /usr/local/bin/tg-start.sh

ENTRYPOINT ["/usr/local/bin/tg-start.sh"]
EXPOSE 80
