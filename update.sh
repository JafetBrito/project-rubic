#!/usr/bin/env bash
set -euo pipefail

APP="rubics"
DIR="/var/www/project-rubic"
BRANCH="main"
TS="$(date +%F-%H%M)"

echo "==> Backup..."
cd /var/www
tar -czf "project-rubic-backup-${TS}.tar.gz" "$(basename "$DIR")" >/dev/null 2>&1 || true

echo "==> Git update..."
cd "$DIR"
git fetch --all
git reset --hard "origin/${BRANCH}"
git clean -fd
git pull origin "${BRANCH}"

echo "==> Install & build..."
# Usa npm ci si tienes package-lock fiable:
# command -v npm >/dev/null && npm ci || npm install
npm install
npm run build

echo "==> Restart PM2..."
pm2 stop "${APP}" || true
PORT=3000 pm2 start npm --name "${APP}" -- run start
pm2 save

echo "==> Reload nginx (config ya probada)"
nginx -t && systemctl reload nginx || true

echo "==> Done. $(date)"
