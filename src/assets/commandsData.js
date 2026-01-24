const gitCommands = [
  // Configuration Commands
  {
    name: 'git config --global user.name "Your Name"',
    description:
      "Sets the author name for all your commits globally. This name identifies you across all repositories on your machine and appears in every commit's metadata.",
    example: "To set your username globally, run:",
    code: 'git config --global user.name "John Doe"',
    basic: "basic commands",
    category: "Configuration",
    difficulty: "beginner",
  },
  {
    name: 'git config --global user.email "your_email@example.com"',
    description:
      "Sets the email address for all your commits globally. Essential for identifying the committer and appears alongside your name in all commits.",
    example: "To set your email globally, run:",
    code: 'git config --global user.email "john@example.com"',
    basic: "basic commands",
    category: "Configuration",
    difficulty: "beginner",
  },
  {
    name: "git config --list",
    description:
      "Displays all Git configuration settings from both global (~/.gitconfig) and repository-specific (.git/config) files. Useful for verifying your setup.",
    example: "To view all configuration settings, run:",
    code: "git config --list",
    category: "Configuration",
    difficulty: "beginner",
  },
  {
    name: 'git config --local user.name "Your Name"',
    description:
      "Sets the author name for only the current repository, overriding global settings. Useful when working on different projects with different identities.",
    example: "To set a local username for this repository only, run:",
    code: 'git config --local user.name "Work Name"',
    category: "Configuration",
    difficulty: "intermediate",
  },
  {
    name: "git config core.editor [editor]",
    description:
      "Sets the default text editor for Git (used when writing commit messages). Examples: vim, nano, code, gedit.",
    example: "To set VS Code as your editor, run:",
    code: 'git config --global core.editor "code --wait"',
    category: "Configuration",
    difficulty: "intermediate",
  },

  // Repository Commands
  {
    name: "git clone [url]",
    description:
      "Creates a complete local copy of a remote repository. Downloads all commits, branches, and history from the remote source (GitHub, GitLab, Bitbucket, etc.).",
    example: "To clone a repository from GitHub, run:",
    code: "git clone https://github.com/Majid-Ali-Watto/Git-factory.git",
    basic: "basic commands",
    category: "Repository",
    difficulty: "beginner",
  },
  {
    name: "git clone [url] [directory]",
    description:
      "Clones a repository into a custom directory with a name of your choice instead of using the repository's default name.",
    example: "To clone into a folder named 'my-project', run:",
    code: "git clone https://github.com/user/repo.git my-project",
    category: "Repository",
    difficulty: "beginner",
  },
  {
    name: "git clone --depth 1 [url]",
    description:
      "Creates a shallow clone with only the latest commit history. Much faster and smaller download, useful when you don't need full history.",
    example: "To do a shallow clone, run:",
    code: "git clone --depth 1 https://github.com/user/repo.git",
    category: "Repository",
    difficulty: "intermediate",
  },
  {
    name: "git clone --mirror [url]",
    description:
      "Creates a bare mirror of a repository (no working directory). Used for backing up or duplicating repositories.",
    example: "To create a mirror clone, run:",
    code: "git clone --mirror https://github.com/user/repo.git repo.git",
    category: "Repository",
    difficulty: "advanced",
  },
  {
    name: "git init",
    description:
      "Initializes a new Git repository in the current directory. Creates the necessary .git folder and metadata to start tracking project changes.",
    example: "To initialize a new repository, run:",
    code: "git init",
    basic: "basic commands",
    category: "Repository",
    difficulty: "beginner",
  },
  {
    name: "git init [directory]",
    description:
      "Creates a new Git repository in a specified directory and initializes it with Git's internal structure.",
    example: "To initialize a repository in a new folder, run:",
    code: "git init my-project",
    category: "Repository",
    difficulty: "beginner",
  },

  // Staging & Committing
  {
    name: "git status",
    description:
      "Shows the current state of your working directory and staging area. Displays modified, staged, and untracked files with helpful next-step suggestions.",
    example: "To check your repository status, run:",
    code: "git status",
    basic: "basic commands",
    category: "Staging & Committing",
    difficulty: "beginner",
  },
  {
    name: "git status -s",
    description:
      "Short format of git status. Shows file state using abbreviations (M=modified, A=added, D=deleted, etc.) for a compact view.",
    example: "To see status in short format, run:",
    code: "git status -s",
    category: "Staging & Committing",
    difficulty: "beginner",
  },
  {
    name: "git status --porcelain",
    description:
      "Machine-readable status output. Designed for scripts and automation tools that need to parse repository state programmatically.",
    example: "To get status for scripting, run:",
    code: "git status --porcelain",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: "git add [file]",
    description:
      "Stages changes to a specific file for the next commit. Tells Git to include this file in your next commit snapshot.",
    example: "To stage a specific file, run:",
    code: "git add index.html",
    basic: "basic commands",
    category: "Staging & Committing",
    difficulty: "beginner",
  },
  {
    name: "git add .",
    description:
      "Stages all modified and new files in the current directory and subdirectories. Quick way to stage everything you've changed.",
    example: "To stage all changes in the repository, run:",
    code: "git add .",
    basic: "basic commands",
    category: "Staging & Committing",
    difficulty: "beginner",
  },
  {
    name: "git add -A",
    description:
      "Stages all changes globally: modified, new, and deleted files across the entire repository. Different from 'git add .' which doesn't include deletions.",
    example: "To stage everything including deletions, run:",
    code: "git add -A",
    category: "Staging & Committing",
    difficulty: "beginner",
  },
  {
    name: "git add -p",
    description:
      "Interactive staging mode - review your changes hunk by hunk and choose which ones to stage. Great for crafting clean commits with only related changes.",
    example: "To stage interactively by hunks, run:",
    code: "git add -p",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: "git add -u",
    description:
      "Stages only modified and deleted files - not new untracked files. Useful when you've changed existing files but added nothing new.",
    example: "To stage only tracked file changes, run:",
    code: "git add -u",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: 'git commit -m "Commit message"',
    description:
      "Records staged changes to the repository with a descriptive message. The message should summarize what changed and why - keep it clear and concise.",
    example: "To commit with a message, run:",
    code: 'git commit -m "Fix: Resolve login form validation bug"',
    basic: "basic commands",
    category: "Staging & Committing",
    difficulty: "beginner",
  },
  {
    name: 'git commit -m "Title" -m "Description"',
    description:
      "Creates a commit with both a title and detailed description. First message is the short title, second provides context and explanation.",
    example: "To commit with title and description, run:",
    code: 'git commit -m "Add user authentication" -m "Implements JWT-based auth with refresh tokens"',
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: "git commit -a",
    description:
      "Stages and commits all tracked files that have been modified. Skips the staging step for known files (won't include new untracked files).",
    example: "To commit all tracked changes, run:",
    code: "git commit -a",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: "git commit --amend",
    description:
      "Modifies the most recent commit by adding new staged changes or changing the commit message. Opens editor for message editing.",
    example: "To fix your last commit, run:",
    code: "git commit --amend",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: "git commit --amend --no-edit",
    description:
      "Adds staged changes to the last commit without changing its message. Quick way to add forgotten files to previous commit.",
    example: "To add forgotten files to last commit, run:",
    code: "git commit --amend --no-edit",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },
  {
    name: 'git commit --allow-empty -m "message"',
    description:
      "Creates a commit with no changes. Useful for triggering CI/CD pipelines or creating milestone commits with no actual code changes.",
    example: "To create an empty commit, run:",
    code: 'git commit --allow-empty -m "Trigger CI/CD pipeline"',
    category: "Staging & Committing",
    difficulty: "advanced",
  },

  // Branching Commands
  {
    name: "git branch",
    description:
      "Lists all local branches. The current branch is marked with an asterisk (*). Does not show remote branches.",
    example: "To see all local branches, run:",
    code: "git branch",
    basic: "basic commands",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git branch -a",
    description:
      "Lists all branches: both local and remote-tracking branches. Gives complete picture of all branches in the repository.",
    example: "To see all branches, run:",
    code: "git branch -a",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git branch -r",
    description:
      "Lists only remote-tracking branches. Shows branches that exist on the remote repository but may not be checked out locally.",
    example: "To see only remote branches, run:",
    code: "git branch -r",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git branch [branch_name]",
    description:
      "Creates a new branch at the current commit. Does not switch to the new branch - you'll need to 'checkout' to start using it.",
    example: "To create a new branch, run:",
    code: "git branch feature-new-ui",
    basic: "basic commands",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git branch -d [branch_name]",
    description:
      "Safely deletes a branch only if it has been fully merged. Git refuses to delete if there are unmerged commits, protecting you from losing work.",
    example: "To delete a merged branch, run:",
    code: "git branch -d feature-login",
    category: "Branching",
    difficulty: "intermediate",
  },
  {
    name: "git branch -D [branch_name]",
    description:
      "Forcefully deletes a branch regardless of merge status. **Destructive** - use only when absolutely sure you want to lose that branch.",
    example: "To force delete a branch, run:",
    code: "git branch -D experimental-feature",
    category: "Branching",
    difficulty: "intermediate",
  },
  {
    name: "git branch -m [old_name] [new_name]",
    description:
      "Renames a branch. If you're on the branch you want to rename, you can omit the old name.",
    example: "To rename a branch, run:",
    code: "git branch -m old-name new-name",
    category: "Branching",
    difficulty: "intermediate",
  },
  {
    name: "git branch -M main",
    description:
      "Renames the current branch to 'main', forcefully overwriting if 'main' exists. Useful for changing default branch names.",
    example: "To rename current branch to main, run:",
    code: "git branch -M main",
    category: "Branching",
    difficulty: "intermediate",
  },
  {
    name: "git branch --contains [commit]",
    description:
      "Lists all branches that contain a specific commit. Helpful for finding which releases or branches include a particular change.",
    example: "To find branches with a commit, run:",
    code: "git branch --contains abcd123",
    category: "Branching",
    difficulty: "intermediate",
  },
  {
    name: "git checkout [branch_name]",
    description:
      "Switches your working directory to a different branch. Updates all files to match that branch's latest commit.",
    example: "To switch to an existing branch, run:",
    code: "git checkout feature-new-ui",
    basic: "basic commands",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git checkout -b [branch]",
    description:
      "Creates a new branch and immediately switches to it. Shortcut combining 'branch' and 'checkout' in one command.",
    example: "To create and switch to a new branch, run:",
    code: "git checkout -b feature-user-profile",
    basic: "basic commands",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git switch [branch_name]",
    description:
      "Modern alternative to 'checkout' for switching branches. Cleaner syntax dedicated specifically to branch switching.",
    example: "To switch branches using modern syntax, run:",
    code: "git switch feature-new-ui",
    basic: "basic commands",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git switch -c [branch]",
    description:
      "Modern equivalent of 'checkout -b'. Creates and switches to a new branch using newer, cleaner Git syntax.",
    example: "To create and switch using modern syntax, run:",
    code: "git switch -c feature-notifications",
    category: "Branching",
    difficulty: "beginner",
  },
  {
    name: "git checkout -",
    description:
      "Switches to the previously checked-out branch. Quick way to toggle between two branches without typing the full name.",
    example: "To switch to the last branch, run:",
    code: "git checkout -",
    category: "Branching",
    difficulty: "beginner",
  },

  // Remote Commands
  {
    name: "git remote add [name] [url]",
    description:
      "Connects your repository to a remote repository with a given name (usually 'origin'). Enables pushing and pulling from that remote.",
    example: "To add a remote repository, run:",
    code: "git remote add origin https://github.com/user/repo.git",
    basic: "basic commands",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git remote -v",
    description:
      "Lists all configured remotes with their fetch and push URLs. Shows where your code is being pushed to and pulled from.",
    example: "To view all remotes, run:",
    code: "git remote -v",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git remote show [remote_name]",
    description:
      "Displays detailed information about a remote: branches, tracking configuration, and current status.",
    example: "To see remote details, run:",
    code: "git remote show origin",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git remote rm [name]",
    description:
      "Removes a remote repository connection from your local configuration. Does not affect the actual remote repository.",
    example: "To remove a remote, run:",
    code: "git remote rm old-remote",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git remote rename [old_name] [new_name]",
    description:
      "Renames a remote connection in your configuration. Useful when changing how you reference a remote.",
    example: "To rename a remote, run:",
    code: "git remote rename origin upstream",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git remote set-url [remote_name] [new_url]",
    description:
      "Changes the URL of an existing remote. Useful when migrating repositories or switching between HTTPS and SSH.",
    example: "To change a remote URL, run:",
    code: "git remote set-url origin https://github.com/new-user/new-repo.git",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git push -u origin [branch]",
    description:
      "Pushes a branch to remote and sets it as the upstream. The -u flag establishes tracking - essential for first push of new branches.",
    example: "To push and set upstream, run:",
    code: "git push -u origin feature-login",
    basic: "basic commands",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git push [remote] [branch]",
    description:
      "Uploads commits from your local branch to the remote. After initial -u setup, just use this simpler form.",
    example: "To push commits, run:",
    code: "git push origin main",
    basic: "basic commands",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git push --all",
    description:
      "Pushes all local branches to the remote at once, rather than pushing them individually.",
    example: "To push all branches, run:",
    code: "git push --all",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git push --force",
    description:
      "Forces a push even if it overwrites remote commits. **Use with extreme caution** - can cause loss for other team members. Only use in private branches.",
    example: "To force push (use cautiously), run:",
    code: "git push --force origin feature-branch",
    category: "Remote",
    difficulty: "advanced",
  },
  {
    name: "git push --force-with-lease",
    description:
      "Safer alternative to --force that only overwrites if no one else has pushed. Protects against accidentally losing others' work.",
    example: "To safely force push, run:",
    code: "git push --force-with-lease origin feature-branch",
    category: "Remote",
    difficulty: "advanced",
  },
  {
    name: "git push [remote] --delete [branch]",
    description:
      "Deletes a branch on the remote repository. Useful for cleaning up old feature branches after merging.",
    example: "To delete a remote branch, run:",
    code: "git push origin --delete feature-old",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git push --tags",
    description:
      "Pushes all local tags to remote without pushing any commits. Useful for publishing release versions.",
    example: "To push all tags, run:",
    code: "git push --tags",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git pull [remote] [branch]",
    description:
      "Fetches and merges changes from a remote branch into your current branch. Combines 'fetch' and 'merge' in one command.",
    example: "To pull changes, run:",
    code: "git pull origin main",
    basic: "basic commands",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git pull",
    description:
      "Pulls from the tracked upstream branch (usually the branch you've previously pushed). Uses branch tracking to know where to pull from.",
    example: "To pull from tracked upstream, run:",
    code: "git pull",
    basic: "basic commands",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git pull --rebase",
    description:
      "Fetches changes and rebases your commits on top instead of merging. Keeps history linear and clean without merge commits.",
    example: "To pull with rebase, run:",
    code: "git pull --rebase origin",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git fetch [remote]",
    description:
      "Downloads new commits and objects from remote without merging. Updates remote-tracking branches but leaves your working directory untouched.",
    example: "To fetch updates, run:",
    code: "git fetch origin",
    basic: "basic commands",
    category: "Remote",
    difficulty: "beginner",
  },
  {
    name: "git fetch --prune",
    description:
      "Fetches and removes stale remote-tracking branches for branches that no longer exist on remote. Cleans up deleted branches.",
    example: "To fetch and prune, run:",
    code: "git fetch --prune",
    category: "Remote",
    difficulty: "intermediate",
  },
  {
    name: "git fetch --all",
    description:
      "Fetches updates from all remote repositories, not just the default 'origin'. Useful when working with multiple remotes.",
    example: "To fetch from all remotes, run:",
    code: "git fetch --all",
    category: "Remote",
    difficulty: "intermediate",
  },

  // Merging & Rebasing
  {
    name: "git merge [branch_name]",
    description:
      "Combines commits from another branch into your current branch. Creates a merge commit linking the two branches' histories.",
    example: "To merge a branch, run:",
    code: "git merge feature-login",
    basic: "basic commands",
    category: "Merging & Rebasing",
    difficulty: "beginner",
  },
  {
    name: "git merge --no-ff [branch]",
    description:
      "Merges while creating a merge commit even if fast-forward is possible. Preserves branch structure in history for better traceability.",
    example: "To merge with history preserved, run:",
    code: "git merge --no-ff feature-settings",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git merge --squash [branch]",
    description:
      "Combines all commits from another branch into a single commit before merging. Cleans up history by consolidating branch work into one commit.",
    example: "To squash and merge, run:",
    code: "git merge --squash feature-temp-work",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git merge --abort",
    description:
      "Cancels an ongoing merge process if you encounter conflicts or change your mind. Returns to the state before the merge started.",
    example: "To abort a merge, run:",
    code: "git merge --abort",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git rebase [branch]",
    description:
      "Re-applies your commits on top of another branch. Creates cleaner, linear history compared to merging by replaying commits.",
    example: "To rebase, run:",
    code: "git rebase main",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git rebase -i [commit]",
    description:
      "Interactive rebase - reorder, squash, or edit commits. Powerful tool for cleaning up commit history before pushing.",
    example: "To rebase interactively, run:",
    code: "git rebase -i HEAD~3",
    category: "Merging & Rebasing",
    difficulty: "advanced",
  },
  {
    name: "git rebase --abort",
    description:
      "Cancels an ongoing rebase if you encounter conflicts or issues. Returns to the state before rebase started.",
    example: "To cancel a rebase, run:",
    code: "git rebase --abort",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git rebase --continue",
    description:
      "Resumes a paused rebase after resolving conflicts. Git continues applying the remaining commits.",
    example: "To continue after resolving conflicts, run:",
    code: "git rebase --continue",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git cherry-pick [commit]",
    description:
      "Applies changes from a specific commit onto your current branch. Useful for selectively bringing in changes without merging entire branches.",
    example: "To cherry-pick a commit, run:",
    code: "git cherry-pick abcd123",
    basic: "basic commands",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git cherry-pick [commit1] [commit2] ...",
    description:
      "Cherry-picks multiple specific commits in sequence. Useful for integrating several commits without merging.",
    example: "To cherry-pick multiple, run:",
    code: "git cherry-pick abcd123 efgh456",
    basic: "basic commands",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },
  {
    name: "git cherry-pick --abort",
    description:
      "Cancels an ongoing cherry-pick operation. Returns to the state before cherry-pick started.",
    example: "To cancel cherry-pick, run:",
    code: "git cherry-pick --abort",
    category: "Merging & Rebasing",
    difficulty: "intermediate",
  },

  // Stashing
  {
    name: "git stash",
    description:
      "Temporarily saves work-in-progress changes without committing. Cleans your working directory so you can switch branches or pull updates.",
    example: "To save work temporarily, run:",
    code: "git stash",
    basic: "basic commands",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: 'git stash save "Work in progress"',
    description:
      "Stashes changes with a descriptive message for easier identification when reviewing stashes later.",
    example: "To stash with a message, run:",
    code: 'git stash save "WIP: User auth form"',
    basic: "basic commands",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash list",
    description:
      "Lists all stashed changes with references (stash@{0}, stash@{1}, etc.). Helps you track saved work.",
    example: "To view all stashes, run:",
    code: "git stash list",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash apply",
    description:
      "Applies a stash back to your working directory without removing it from the stash list. Stash remains available.",
    example: "To apply a stash, run:",
    code: "git stash apply stash@{0}",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash pop",
    description:
      "Applies the most recent stash and removes it from the stash list. One-command alternative to apply + drop.",
    example: "To apply and remove most recent stash, run:",
    code: "git stash pop",
    basic: "basic commands",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash drop [stash]",
    description:
      "Permanently deletes a specific stash. Once dropped, the stashed changes cannot be recovered.",
    example: "To delete a stash, run:",
    code: "git stash drop stash@{0}",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash clear",
    description:
      "Permanently deletes all stashes. Cannot be undone - use with caution!",
    example: "To delete all stashes, run:",
    code: "git stash clear",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash show",
    description:
      "Shows the changes in a stash without applying it. Useful for previewing what's in a stash before applying.",
    example: "To preview a stash, run:",
    code: "git stash show stash@{0}",
    category: "Stashing",
    difficulty: "intermediate",
  },
  {
    name: "git stash branch [branch_name]",
    description:
      "Creates a new branch and applies a stash to it. Useful if you stashed work and then made conflicting changes.",
    example: "To apply stash to new branch, run:",
    code: "git stash branch my-stash-branch",
    category: "Stashing",
    difficulty: "advanced",
  },

  // Tagging
  {
    name: "git tag [tag_name]",
    description:
      "Creates a lightweight tag pointing to the current commit. Tags mark specific points in history like release versions.",
    example: "To create a tag, run:",
    code: "git tag v1.0.0",
    basic: "basic commands",
    category: "Tagging",
    difficulty: "beginner",
  },
  {
    name: 'git tag -a [tag_name] -m "message"',
    description:
      "Creates an annotated tag (preferred method) with descriptive message, author, and timestamp. More durable than lightweight tags.",
    example: "To create an annotated tag, run:",
    code: 'git tag -a v1.0.0 -m "Release version 1.0.0"',
    basic: "basic commands",
    category: "Tagging",
    difficulty: "beginner",
  },
  {
    name: "git tag",
    description:
      "Lists all tags in the repository. Shows all marked releases and versions.",
    example: "To list all tags, run:",
    code: "git tag",
    category: "Tagging",
    difficulty: "beginner",
  },
  {
    name: "git tag -l [pattern]",
    description:
      "Lists tags matching a pattern. Useful for filtering tags by version numbers or prefixes.",
    example: "To list tags matching pattern, run:",
    code: "git tag -l 'v1.*'",
    category: "Tagging",
    difficulty: "beginner",
  },
  {
    name: "git show [tag_name]",
    description:
      "Shows detailed information about a tag including the tagged commit, tagger, date, and message.",
    example: "To view tag details, run:",
    code: "git show v1.0.0",
    category: "Tagging",
    difficulty: "beginner",
  },
  {
    name: "git tag -d [tag_name]",
    description:
      "Deletes a tag from the local repository. Useful for removing accidentally created or outdated tags.",
    example: "To delete a tag, run:",
    code: "git tag -d v1.0.0",
    category: "Tagging",
    difficulty: "intermediate",
  },
  {
    name: "git push origin [tag_name]",
    description:
      "Pushes a specific tag to the remote repository, making it available to other team members and CI/CD systems.",
    example: "To push a tag, run:",
    code: "git push origin v1.0.0",
    basic: "basic commands",
    category: "Tagging",
    difficulty: "intermediate",
  },
  {
    name: "git push origin --delete [tag]",
    description:
      "Deletes a tag from the remote repository. Useful for cleaning up mistagged versions.",
    example: "To delete a remote tag, run:",
    code: "git push origin --delete v0.9.0",
    category: "Tagging",
    difficulty: "intermediate",
  },
  {
    name: "git push --tags",
    description:
      "Pushes all local tags to remote at once, without pushing any commits. Useful for publishing all release versions.",
    example: "To push all tags, run:",
    code: "git push --tags",
    category: "Tagging",
    difficulty: "intermediate",
  },

  // History & Inspection
  {
    name: "git log",
    description:
      "Displays commit history of current branch with hash, author, date, and message. Shows newest commits first. Press 'q' to exit.",
    example: "To view history, run:",
    code: "git log",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git log --oneline",
    description:
      "Compact commit history with abbreviated hashes and single-line messages. Quick overview of recent commits.",
    example: "To see compact history, run:",
    code: "git log --oneline",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git log --graph --oneline --decorate --all",
    description:
      "Visualizes commit history as a graph showing branches and merges. Great for understanding repository structure.",
    example: "To visualize history graph, run:",
    code: "git log --graph --oneline --decorate --all",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git log -p",
    description:
      "Shows detailed commit history with full diffs (patches) for each commit. Verbose but shows exact line changes.",
    example: "To see history with diffs, run:",
    code: "git log -p",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git log --stat",
    description:
      "Shows history with statistics: which files changed and how many lines added/removed. Summary view of changes.",
    example: "To see history with stats, run:",
    code: "git log --stat",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git log --follow [file]",
    description:
      "Shows complete history of a file including renames. Traces file's evolution across name changes.",
    example: "To see file history with renames, run:",
    code: "git log --follow index.html",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: 'git log --author="[name]"',
    description:
      "Filters commit history to show only commits by a specific author. Useful for finding who made certain changes.",
    example: "To filter by author, run:",
    code: 'git log --author="Majid Ali"',
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: 'git log --grep="[pattern]"',
    description:
      "Searches commit messages for pattern matching. Finds commits about specific features, bugs, or keywords.",
    example: "To search commits, run:",
    code: 'git log --grep="bug fix"',
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git log --since=[date]",
    description:
      "Shows commits after a specific date. Format: YYYY-MM-DD or relative (2.weeks, 1.month, etc.).",
    example: "To see commits since date, run:",
    code: "git log --since=2024-01-01",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git log --until=[date]",
    description:
      "Shows commits before a specific date. Can combine with --since for date range queries.",
    example: "To see commits until date, run:",
    code: "git log --until=2024-12-31",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git log -n [number]",
    description:
      "Limits output to the last N commits. Useful for focusing on recent history.",
    example: "To see last 5 commits, run:",
    code: "git log -n 5",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git show [commit]",
    description:
      "Shows detailed information about a specific commit: changes, author, date, and full diff.",
    example: "To view a commit, run:",
    code: "git show abcd123",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git diff",
    description:
      "Shows changes between working directory and last commit. Reveals what you've modified but not staged.",
    example: "To see unstaged changes, run:",
    code: "git diff",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git diff --cached",
    description:
      "Shows differences between staged changes and last commit. Review what's about to be committed.",
    example: "To see staged changes, run:",
    code: "git diff --cached",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git diff [branch1] [branch2]",
    description:
      "Compares all changes between two branches. Shows what would differ if you merged them.",
    example: "To compare branches, run:",
    code: "git diff main feature-branch",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git diff [commit1] [commit2]",
    description:
      "Shows differences between two commits. Useful for understanding what changed between versions.",
    example: "To compare commits, run:",
    code: "git diff abcd123 efgh456",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git diff --name-only [branch1] [branch2]",
    description:
      "Lists only filenames that differ between two branches. Useful for seeing what changed without diffs.",
    example: "To see changed files only, run:",
    code: "git diff --name-only main feature",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git diff --stat [commit1] [commit2]",
    description:
      "Shows summary of changes between commits with file statistics. Concise view of impact.",
    example: "To see change statistics, run:",
    code: "git diff --stat abcd123 efgh456",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git shortlog",
    description:
      "Summarizes commit history grouped by author with counts. Shows who contributed how much.",
    example: "To see author summary, run:",
    code: "git shortlog",
    category: "History & Inspection",
    difficulty: "beginner",
  },
  {
    name: "git blame [file]",
    description:
      "Shows who last modified each line of a file and in which commit. Useful for understanding code history.",
    example: "To see line-by-line authors, run:",
    code: "git blame index.html",
    category: "History & Inspection",
    difficulty: "intermediate",
  },
  {
    name: "git grep [pattern]",
    description:
      "Searches tracked file contents for a pattern. Git-aware version of grep, faster and version-aware.",
    example: "To search files, run:",
    code: 'git grep "TODO"',
    category: "History & Inspection",
    difficulty: "intermediate",
  },

  // Undoing Changes
  {
    name: "git reset [file]",
    description:
      "Unstages a file from the staging area. Changes remain in working directory - safe operation.",
    example: "To unstage a file, run:",
    code: "git reset myfile.txt",
    category: "Undoing Changes",
    difficulty: "intermediate",
  },
  {
    name: "git reset --soft [commit]",
    description:
      "Moves HEAD to a previous commit while keeping changes staged. Useful for reorganizing commits.",
    example: "To soft reset, run:",
    code: "git reset --soft abcd123",
    category: "Undoing Changes",
    difficulty: "advanced",
  },
  {
    name: "git reset --mixed [commit]",
    description:
      "Moves HEAD and unstages changes. Files remain modified but not staged. Default reset behavior.",
    example: "To reset and unstage, run:",
    code: "git reset --mixed abc123",
    category: "Undoing Changes",
    difficulty: "advanced",
  },
  {
    name: "git reset --hard [commit]",
    description:
      "Completely resets to a previous commit, discarding all changes. **Destructive** - use with caution!",
    example: "To hard reset, run:",
    code: "git reset --hard abcd123",
    category: "Undoing Changes",
    difficulty: "advanced",
  },
  {
    name: "git revert [commit]",
    description:
      "Creates a new commit that undoes changes from a previous commit. Safe for shared branches - preserves history.",
    example: "To undo via revert, run:",
    code: "git revert abcd123",
    category: "Undoing Changes",
    difficulty: "intermediate",
  },
  {
    name: "git checkout -- [file]",
    description:
      "Discards local changes to a file, restoring it to the last commit. **Destructive** - cannot be undone.",
    example: "To discard changes, run:",
    code: "git checkout -- index.html",
    category: "Undoing Changes",
    difficulty: "intermediate",
  },
  {
    name: "git restore [file]",
    description:
      "Modern alternative to 'checkout --'. Restores a file to its committed state, discarding changes.",
    example: "To restore a file, run:",
    code: "git restore index.html",
    category: "Undoing Changes",
    difficulty: "intermediate",
  },
  {
    name: "git restore --staged [file]",
    description:
      "Unstages a file without affecting working directory. Modern alternative to 'git reset'.",
    example: "To unstage (modern way), run:",
    code: "git restore --staged myfile.txt",
    category: "Undoing Changes",
    difficulty: "intermediate",
  },
  {
    name: "git clean -df",
    description:
      "Removes untracked files and directories. **Destructive** - use 'git clean -dn' to preview first!",
    example: "To remove untracked files, run:",
    code: "git clean -df",
    category: "Undoing Changes",
    difficulty: "advanced",
  },
  {
    name: "git clean -dn",
    description:
      "Shows what untracked files would be deleted without actually deleting. Safe preview for 'git clean -df'.",
    example: "To preview deletion, run:",
    code: "git clean -dn",
    category: "Undoing Changes",
    difficulty: "intermediate",
  },
  {
    name: "git rm --cached -r [directory]",
    description:
      "Stops tracking a directory in Git without deleting it locally. Useful for removing accidentally tracked folders.",
    example: "To stop tracking directory, run:",
    code: "git rm --cached -r dev-dist/",
    category: "Staging & Committing",
    difficulty: "intermediate",
  },

  // Repository Information
  {
    name: "git rev-parse HEAD",
    description:
      "Returns the full commit hash of the current HEAD. Useful for scripts and CI/CD automation.",
    example: "To get current commit hash, run:",
    code: "git rev-parse HEAD",
    category: "Repository Information",
    difficulty: "intermediate",
  },
  {
    name: "git rev-parse --short HEAD",
    description:
      "Returns abbreviated (7-char) version of current commit hash. More readable for display.",
    example: "To get short hash, run:",
    code: "git rev-parse --short HEAD",
    category: "Repository Information",
    difficulty: "intermediate",
  },
  {
    name: "git rev-parse --abbrev-ref HEAD",
    description:
      "Returns the name of the current branch. Useful for scripts needing to know current branch.",
    example: "To get branch name, run:",
    code: "git rev-parse --abbrev-ref HEAD",
    category: "Repository Information",
    difficulty: "intermediate",
  },
  {
    name: "git describe --tags",
    description:
      "Shows the most recent tag reachable from current commit. Useful for determining version.",
    example: "To find nearest tag, run:",
    code: "git describe --tags",
    category: "Repository Information",
    difficulty: "intermediate",
  },
  {
    name: "git ls-files",
    description:
      "Lists all files currently tracked by Git. Useful for seeing what's under version control.",
    example: "To see tracked files, run:",
    code: "git ls-files",
    category: "Repository Information",
    difficulty: "intermediate",
  },
  {
    name: "git symbolic-ref HEAD",
    description:
      "Shows what branch HEAD is pointing to. Returns current branch reference.",
    example: "To see HEAD reference, run:",
    code: "git symbolic-ref HEAD",
    category: "Repository Information",
    difficulty: "advanced",
  },
  {
    name: "git name-rev [commit]",
    description:
      "Shows human-readable name for a commit relative to tags/branches. Useful for commit description.",
    example: "To get readable name, run:",
    code: "git name-rev abcd123",
    category: "Repository Information",
    difficulty: "advanced",
  },

  // Advanced & Debugging
  {
    name: "git reflog",
    description:
      "Shows log of all HEAD movements: commits, resets, rebases, etc. Useful for recovering lost commits.",
    example: "To view operation history, run:",
    code: "git reflog",
    category: "Repository",
    difficulty: "advanced",
  },
  {
    name: "git fsck --lost-found",
    description:
      "Scans for lost commits and objects in the repository. Can help recover work lost to resets.",
    example: "To find lost commits, run:",
    code: "git fsck --lost-found",
    category: "Repository",
    difficulty: "advanced",
  },
  {
    name: "git gc",
    description:
      "Garbage collection - removes unreachable objects and optimizes database. Improves performance.",
    example: "To optimize repository, run:",
    code: "git gc",
    category: "Repository",
    difficulty: "advanced",
  },
  {
    name: "git bisect start",
    description:
      "Initiates binary search to find which commit introduced a bug. Interactive process marking commits good/bad.",
    example: "To start bisecting, run:",
    code: "git bisect start",
    category: "Debugging",
    difficulty: "advanced",
  },
  {
    name: "git bisect bad",
    description:
      "Marks current commit as 'bad' during bisect. Continues searching in earlier history.",
    example: "During bisect, mark as bad:",
    code: "git bisect bad",
    category: "Debugging",
    difficulty: "advanced",
  },
  {
    name: "git bisect good",
    description:
      "Marks current commit as 'good' during bisect. Continues searching in later history.",
    example: "During bisect, mark as good:",
    code: "git bisect good",
    category: "Debugging",
    difficulty: "advanced",
  },
  {
    name: "git bisect reset",
    description:
      "Ends bisect session and returns to original branch. Use after finding problematic commit.",
    example: "To end bisect, run:",
    code: "git bisect reset",
    category: "Debugging",
    difficulty: "advanced",
  },
  {
    name: "git archive [branch] --format=zip --output=[file.zip]",
    description:
      "Creates zip archive of a branch without .git directory. Useful for distributing clean versions.",
    example: "To create archive, run:",
    code: "git archive main --format=zip --output=project.zip",
    category: "Repository",
    difficulty: "advanced",
  },
  {
    name: "git mv [old_path] [new_path]",
    description:
      "Moves or renames a file while preserving Git history. Automatically stages the change.",
    example: "To move/rename file, run:",
    code: "git mv old-name.txt new-name.txt",
    category: "Repository",
    difficulty: "intermediate",
  },
  {
    name: "git submodule add [repo_url] [path]",
    description:
      "Adds external Git repository as submodule. Includes another repo in your project while keeping it separate.",
    example: "To add submodule, run:",
    code: "git submodule add https://github.com/user/repo.git path/to/sub",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git submodule init",
    description:
      "Initializes submodules from .gitmodules file. Required before pulling submodule content.",
    example: "To init submodules, run:",
    code: "git submodule init",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git submodule update",
    description:
      "Fetches and checks out correct commits for submodules. Ensures submodules match main repository.",
    example: "To update submodules, run:",
    code: "git submodule update",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git submodule foreach git pull",
    description:
      "Runs git pull in every submodule directory. Updates all submodules at once.",
    example: "To update all submodules, run:",
    code: "git submodule foreach git pull",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git worktree add [path] [branch]",
    description:
      "Creates new working tree for multiple branches simultaneously. Work in different directories on different branches.",
    example: "To create working tree, run:",
    code: "git worktree add ../bug-fix main",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git worktree list",
    description:
      "Lists all working trees created for this repository. Shows paths and branch information.",
    example: "To view working trees, run:",
    code: "git worktree list",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git worktree remove [path]",
    description:
      "Removes a working tree. Cleans up directory and removes worktree reference.",
    example: "To remove working tree, run:",
    code: "git worktree remove ../bug-fix",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git format-patch -n HEAD",
    description:
      "Creates patch files from last N commits. Useful for emailing changes or applying to other repos.",
    example: "To create patches, run:",
    code: "git format-patch -1 HEAD",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git apply [patch_file]",
    description:
      "Applies changes from patch file to working directory. Git-aware version of patch command.",
    example: "To apply patch, run:",
    code: "git apply fix.patch",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git am [patch_file]",
    description:
      "Applies patch and creates commit with original author/date metadata. Preserves patch commit info.",
    example: "To apply patch as commit, run:",
    code: "git am fix.patch",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git cat-file -p [object]",
    description:
      "Displays contents of a Git object. Useful for understanding Git's internal structure.",
    example: "To view Git object, run:",
    code: "git cat-file -p abcd123",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git hash-object [file]",
    description:
      "Calculates Git hash for a file without staging/committing. Useful for comparing versions.",
    example: "To calculate hash, run:",
    code: "git hash-object index.html",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git verify-commit [commit]",
    description:
      "Verifies GPG signature of a commit. Ensures commit authenticity in secure environments.",
    example: "To verify signature, run:",
    code: "git verify-commit abcd123",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git filter-branch",
    description:
      "Rewrites Git history. Advanced tool for removing sensitive data or restructuring. **Affects other developers!**",
    example: "To filter history, run:",
    code: "git filter-branch --tree-filter 'rm -f secrets.txt'",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git for-each-ref",
    description:
      "Lists all refs (branches, tags, remotes) with custom output format. Powerful for scripting.",
    example: "To list refs, run:",
    code: "git for-each-ref --sort=version:refname",
    category: "Advanced",
    difficulty: "advanced",
  },
  {
    name: "git update-index --assume-unchanged [file]",
    description:
      "Tells Git to ignore changes to a file without removing it from version control. Useful for configs.",
    example: "To ignore file changes, run:",
    code: "git update-index --assume-unchanged config.json",
    category: "Configuration",
    difficulty: "advanced",
  },
  {
    name: "git update-index --no-assume-unchanged [file]",
    description:
      "Resumes tracking changes to a file marked with --assume-unchanged.",
    example: "To resume tracking, run:",
    code: "git update-index --no-assume-unchanged config.json",
    category: "Configuration",
    difficulty: "advanced",
  },

  // Help & Documentation
  {
    name: "git help [command]",
    description:
      "Opens documentation for a specific Git command. Provides comprehensive help within terminal.",
    example: "To get help, run:",
    code: "git help commit",
    category: "Help & Documentation",
    difficulty: "beginner",
  },
  {
    name: "git --version",
    description:
      "Displays your installed Git version. Useful for checking compatibility and features.",
    example: "To check version, run:",
    code: "git --version",
    category: "Help & Documentation",
    difficulty: "beginner",
  },
];

export default gitCommands;
