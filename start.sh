#!/usr/bin/env bash
# Portfolio — frontend only (Vite), porta 3004.
set -e
cd "$(dirname "$0")"

# mata o que estiver na porta
lsof -ti tcp:3004 | xargs kill -9 2>/dev/null || true

[ -d node_modules ] || npm install

npm run dev &
DEV_PID=$!

( sleep 3 && open http://localhost:3004 ) &

trap "kill $DEV_PID 2>/dev/null" EXIT
wait $DEV_PID
