#!/bin/bash
# Run this from the learnofchrist-project folder to push to GitHub
cd "$(dirname "$0")"
echo "# learnofchrist" > README.md
echo "" >> README.md
echo "Bible study website - Learn of Christ | learnofchrist.com" >> README.md
echo "" >> README.md
echo "Built with Next.js, Tailwind CSS, and deployed on Vercel." >> README.md

git init
git add -A
git commit -m "Initial commit: Learn of Christ Next.js project"
git branch -M main
git remote add origin https://github.com/jaedenschafer/learnofchrist.git
git push -u origin main --force

echo ""
echo "Done! Code pushed to https://github.com/jaedenschafer/learnofchrist"
