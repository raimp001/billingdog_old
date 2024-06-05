
# Navigate to your project directory
cd /Users/shardingdog/billingdog

# Initialize a new Git repository (if not already initialized)
git init

# Add all project files to the staging area
git add .

# Commit the files
git commit -m "Initial commit"

# Add the remote repository URL (skip if already added)
git remote add origin https://github.com/raimp001/nextjs-billingdog.git

# Pull the changes from the remote repository with merge strategy
git pull origin main --allow-unrelated-histories --no-rebase

# Resolve any merge conflicts if they appear, then add and commit the resolved files
git add .
git commit -m "Merge remote-tracking branch 'origin/main' into main"

# Push the changes to GitHub on the main branch
git push -u origin main

