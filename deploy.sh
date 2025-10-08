#!/usr/bin/env bash

set -euo pipefail

# Configuration
REPO_URL="${REPO_URL:-git@github.com:YOUR_ORG/YOUR_REPO.git}"
REPO_DIR="${REPO_DIR:-/opt/my-site}"
WEB_ROOT="${WEB_ROOT:-/var/www/my-site}"

if [[ "${REPO_URL}" == "git@github.com:YOUR_ORG/YOUR_REPO.git" ]]; then
    echo "Please set REPO_URL to your GitHub repository (e.g., export REPO_URL=git@github.com:org/repo.git)." >&2
    exit 1
fi

echo ">>> Ensuring repository is present at ${REPO_DIR}"
if [[ -d "${REPO_DIR}/.git" ]]; then
    git -C "${REPO_DIR}" pull --ff-only
else
    mkdir -p "$(dirname "${REPO_DIR}")"
    git clone "${REPO_URL}" "${REPO_DIR}"
fi

echo ">>> Installing dependencies"
cd "${REPO_DIR}"
npm install

echo ">>> Building production bundle"
npm run build

echo ">>> Publishing dist/ to ${WEB_ROOT}"
mkdir -p "${WEB_ROOT}"
rsync -a --delete "${REPO_DIR}/dist/" "${WEB_ROOT}/"

echo ">>> Reloading Nginx"
sudo systemctl reload nginx

echo "Deployment complete."
