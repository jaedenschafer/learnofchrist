#!/bin/bash
# Long-running thumbnail backfill. Reads SUPABASE_SERVICE_ROLE_KEY from
# .env.local via Node 20+ --env-file. Logs interleaved stdout/stderr into
# the directory next to this script.
cd '/Users/jaedenschafer/Documents/Claude Code/Learn of Christ/learnofchrist-project'
exec /opt/homebrew/bin/node --env-file=.env.local scripts/backfill-thumbnails.mjs
