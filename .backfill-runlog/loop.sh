#!/bin/bash
# Runs the thumbnail backfill repeatedly until no approved artworks remain
# without thumbnails. Each invocation processes up to 1000 rows and exits.
# Logs every batch summary to .backfill-runlog/loop.log so progress can be
# checked from another shell.
set -u
cd '/Users/jaedenschafer/Documents/Claude Code/Learn of Christ/learnofchrist-project'
NODE=/opt/homebrew/bin/node
LOG=.backfill-runlog/loop.log
BATCH_LOG=.backfill-runlog/batch.log

batch=0
while true; do
  batch=$((batch + 1))
  echo "─── batch $batch starting at $(date) ───" >> "$LOG"
  "$NODE" --env-file=.env.local scripts/backfill-thumbnails.mjs >"$BATCH_LOG" 2>&1
  rc=$?
  tail -3 "$BATCH_LOG" >> "$LOG"
  echo "─── batch $batch finished rc=$rc at $(date) ───" >> "$LOG"
  if [ $rc -ne 0 ]; then
    echo "non-zero exit, stopping" >> "$LOG"
    break
  fi
  # If the script reported no rows needing thumbs, break.
  if grep -q "Found 0 artwork" "$BATCH_LOG"; then
    echo "no rows remaining, exiting cleanly" >> "$LOG"
    break
  fi
  sleep 5
done
echo "─── loop done at $(date) ───" >> "$LOG"
