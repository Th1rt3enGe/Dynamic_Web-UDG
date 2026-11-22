#!/bin/sh
# Arranque de Terra Glacialis: diagnostica y deja un único MPM antes de iniciar Apache.

echo "=== [tg] MPM en mods-enabled (antes) ==="
ls -l /etc/apache2/mods-enabled 2>/dev/null | grep -i mpm || echo "(ninguno)"

# Elimina cualquier MPM que no sea prefork.
for f in /etc/apache2/mods-enabled/mpm_*.load; do
  [ -e "$f" ] || continue
  case "$f" in
    *mpm_prefork.load) ;;
    *) echo "[tg] quitando $f"; rm -f "$f" "${f%.load}.conf" ;;
  esac
done

echo "=== [tg] LoadModule de MPM en toda la configuración ==="
grep -rniE "LoadModule +mpm_" /etc/apache2 2>/dev/null || echo "(ninguno)"

echo "=== [tg] Variables relacionadas con Apache/MPM ==="
env | grep -iE "^(APACHE|MPM)" || echo "(ninguna)"

echo "=== [tg] apache2ctl -t ==="
apache2ctl -t 2>&1

# Sin "$@": ignora cualquier comando de inicio personalizado de Railway.
exec docker-entrypoint.sh apache2-foreground
