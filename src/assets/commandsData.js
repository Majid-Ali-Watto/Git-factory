const gitCommands = [
	{
		name: 'git config --global user.name "Your Name"',
		description: "This command is used to set the name that will be associated with your commits in Git repositories. This name will appear in the metadata of your commits, identifying you as the author.",
		example: "To set your username globally, run:",
		code: 'git config --global user.name "Your Name"',
		// details: {
		// 	example: 'git config --global user.name "Majid Ali"',
		// 	explaination: "This command will set your username of git as Majid Ali",
		// 	img: "./git.png"
		// },
		basic: "basic commands"
	},
	{
		name: 'git config --global user.email "your_email@example.com"',
		description: " This command sets the email address that will be associated with your commits globally. This email address will appear in the metadata of your commits, identifying you as the author.",
		example: "To set your email globally, run:",
		code: 'git config --global user.email "your_email@example.com"',
		basic: "basic commands"
	},
	{
		name: "git clone [url]",
		description: "Clone a repository from a remote source (github/gitlab) to your local machine.",
		example: "To clone a repository Git-factory (repo) of Majid-Ali-Watto (owner) from GitHub, you can run:",
		code: "git clone https://github.com/Majid-Ali-Watto/Git-factory.git",
		basic: "basic commands"
	},
	{
		name: "git init",
		description: "This command initializes a new Git repository in the current directory. It sets up the necessary files and directories for Git to start tracking changes in your project.",
		example: "To start tracking changes in a new project, navigate to the project directory and run:",
		code: "git init",
		basic: "basic commands"
	},

	{
		name: "git status",
		description: "This command is used to check the status of your working directory and staging area. It shows you which files have been modified, which files are staged for commit, and which files are untracked by Git.",
		example: "To see which files have been modified since your last commit, run:",
		code: "git status",
		basic: "basic commands"
	},
	{
		name: "git add [file]",
		description: "This command adds changes in the working directory to the staging area. The staging area is a place where you can gather changes you want to include in your next commit. By using git add, you tell Git to include the changes made to a specific file (or files) in the next commit.",
		example: 'To stage a file named "index.html" ("git add ." for all files) for the next commit, run:',
		code: `git add index.html\t\tOR\t\tgit add .`,
		basic: "basic commands"
	},
	{
		name: 'git commit -m "Commit message"',
		description: " This command records the changes that have been staged in the repository with a descriptive message. The commit message should summarize the changes made in the commit, providing context and information about the purpose of the changes.",
		example: 'To commit staged changes with the message "Add new feature", run:',
		code: 'git commit -m "Add new feature"',
		basic: "basic commands"
	},
	{
		name: "git push -u origin [branch]",
		description: "Push the specified branch to the remote repository and set it as the upstream branch. It is needed for first time, after pushing at least once, upstream is not needed.",
		example: 'To push the local branch named "feature" to the remote repository named "origin" and set it as the upstream branch, run:',
		code: "git push -u origin feature",
		basic: "basic commands"
	},
	{
		name: "git push [remote] [branch]",
		description: "Upload local repository content to a remote repository (github/gitlab).",
		example: 'To push changes from your local "master" branch to the remote "origin" repository, run:',
		code: "git push origin master",
		basic: "basic commands"
	},

	{
		name: "git pull [remote] [branch]",
		description: "Fetch changes from a remote repository and merge them into the current branch.",
		example: 'To fetch and merge changes from the remote "origin" repository into your local "master" branch, run:',
		code: "git pull origin master\t\tOR\t\tgit pull",
		basic: "basic commands"
	},
	{
		name: "git branch",
		description: "List all branches in the repository.",
		example: "To see all branches in the repository and current selected branch, run:",
		code: "git branch",
		basic: "basic commands"
	},
	{
		name: "git checkout [branch_name]",
		description: "Switch to the specified branch.",
		example: 'To switch to a branch named "feature", run:',
		code: "git checkout feature",
		basic: "basic commands"
	},
	{
		name: "git checkout -b [branch]",
		description: "Create a new branch and switch to it.",
		example: 'To create a new branch named "feature" and switch to it, run:',
		code: "git checkout -b feature",
		basic: "basic commands"
	},
	{
		name: "git switch [branch_name]",
		description: "Switch to the specified branch.",
		example: 'To switch to a branch named "feature", run:',
		code: "git switch feature",
		basic: "basic commands"
	},

	{
		name: "git merge [branch_name]",
		description: "Combine changes from the specified branch into the current branch.",
		example: 'To merge changes from the "feature" branch into the current branch, run:',
		code: "git merge feature",
		basic: "basic commands"
	},
	{
		name: "git remote add [name] [url]",
		description: "Add a new remote repository.",
		example: 'To add a remote repository named "origin" with URL "https://github.com/Majid-Ali-Watto/Git-factory.git", run:',
		code: "git remote add origin https://github.com/Majid-Ali-Watto/Git-factory.git",
		basic: "basic commands"
	},
	{
		name: "git remote -v",
		description: "List all remote repositories and their URLs. It will show remote origins where repository is connected for push and pull.",
		example: "To list all remote repositories and their URLs, run:",
		code: "git remote -v"
	},
	{
		name: "git log",
		description: "Display commit history with author name, commit hash, date and commit message.",
		example: "To display the commit history of the current branch, run:",
		code: "git log"
	},
	{
		name: "git show [commit]",
		description: "Show changes introduced by a commit. Display commit history with author name, commit hash, date and commit message. What was added or removed?",
		example: 'To show changes introduced by a specific commit with hash "abcd123", run:',
		code: "git show abcd123"
	},
	{
		name: "git diff",
		description: "Show changes between commits, commit and working tree, etc.",
		example: "To show the changes between the working directory and the staging area, run:",
		code: "git diff"
	},
	{
		name: "git stash",
		description: "This command saves your current working directory's changes into a 'stash' so you can work on something else, like switching branches, without losing your uncommitted changes. The working directory is then restored to the state of the last commit.",
		example: "To stash changes in your working directory, run:",
		code: "git stash",
		basic: "basic commands"
	},
	{
		name: 'git stash save "Work in progress on feature X"',
		description: "Stash changes with a descriptive message for easier identification later.",
		example: "To stash changes with a specific message, run:",
		code: 'git stash save "Work in progress on feature X"',
		basic: "basic commands"
	},

	{
		name: "git stash apply",
		description: "Applies a stash to the working directory.",
		example: `git stash apply stash@{0}. If you don't specify a stash, the most recent stash is applied.`,
		code: `git stash apply stash@{0}\t\tOR\t\tgit stash apply`
	},
	{
		name: "git stash pop",
		description: "Apply the most recent stash and remove it from the stash list.",
		example: "To apply and remove the most recent stash, run:",
		code: "git stash pop",
		basic: "basic commands"
	},
	{
		name: "git stash list",
		description: "List all stashed changes.",
		example: "To list all stashed changes or to list only specific count of stashed changes,e.g. to list the last 3 stashes add -3, run:",
		code: "git stash list\t\tOR\t\tgit stash list -3"
	},
	{
		name: "git stash drop [stash]",
		description: "Remove a specific stash.",
		example: 'To remove a stash named "stash@{0}", run:',
		code: "git stash drop stash@{0}"
	},
	{
		name: "git stash clear",
		description: "Remove all stashed changes.",
		example: "To remove all stashed changes, run:",
		code: "git stash clear"
	},
	{
		name: "git tag [tag_name]",
		description: "Create a lightweight tag pointing to the current commit.",
		example: 'To create a tag named "v1.0" for the current commit, run:',
		code: "git tag v1.0",
		basic: "basic commands"
	},

	{
		name: 'git tag -a [tag_name] -m "message"',
		description: "Create an annotated tag with a descriptive message.",
		example: 'To create an annotated tag named "v1.0" with the message "Version 1.0 release", run:',
		code: 'git tag -a v1.0 -m "Version 1.0 release"',
		basic: "basic commands"
	},
	{
		name: "git tag -d [tag_name]",
		description: "Delete a tag from the local repository.",
		example: 'To delete the tag named "v1.0", run:',
		code: "git tag -d v1.0"
	},
	{
		name: "git tag -l",
		description: "List all tags in the repository.",
		example: "To list all tags, run:",
		code: "git tag -l"
	},
	{
		name: "git show [tag_name]",
		description: "Show detailed information about a specific tag.",
		example: 'To show details about the tag named "v1.0", run:',
		code: "git show v1.0"
	},
	{
		name: "git push origin [tag_name]",
		description: "Push a specific tag to the remote repository.",
		example: 'To push the tag named "v1.0" to the remote repository, run:',
		code: "git push origin v1.0",
		basic: "basic commands"
	},
	{
		name: "git push --tags",
		description: "Push all tags to the remote repository.",
		example: "To push all local tags to the remote repository, run:",
		code: "git push --tags"
	},
	{
		name: "git cherry-pick [commit1] [commit2] ...",
		description: "The `git cherry-pick` command allows you to apply changes from one or more specific commits from another branch or location directly onto your current branch. This is useful when you want to integrate particular changes without merging an entire branch.",
		example: "To apply the changes from commits 'abcd123' and 'efgh456' onto the current branch, run:",
		code: "git cherry-pick abcd123 efgh456",
		basic: "basic commands"
	},
	{
		name: "git rebase [branch]",
		description: "The `git rebase [branch]` command integrates changes from one branch into your current branch by replaying your commits on top of the specified branch. Unlike merging, rebasing rewrites the commit history, creating a cleaner, linear history without merge commits.",
		example: "To rebase the current branch onto the 'master' branch, applying your commits on top of 'master', run:",
		code: "git rebase master"
	},
	{
		name: "git pull --rebase",
		description: "The `git pull --rebase` command fetches changes from the remote repository and rebases your current branch on top of the fetched commits instead of merging. This avoids unnecessary merge commits and keeps your project history linear and clean.",
		example: "To fetch and rebase the changes from the remote repository 'origin' instead of merging them, run:",
		code: "git pull --rebase origin"
	},
	{
		name: "git rebase --abort",
		description: "The `git rebase --abort` command stops an ongoing rebase process and returns your repository to the exact state it was in before the rebase began. This is helpful if you encounter conflicts or issues and decide not to continue with the rebase.",
		example: "If conflicts arise during a rebase and you want to cancel it, run:",
		code: "git rebase --abort"
	},
	{
		name: "git rebase --continue",
		description: "The `git rebase --continue` command is used to resume an ongoing rebase after you have resolved any conflicts. It tells Git that the conflicts have been fixed and it can proceed with applying the rest of the commits.",
		example: "After resolving any conflicts during a rebase, to continue the rebase process, run:",
		code: "git rebase --continue"
	},

	{
		name: "git reset <file>",
		description: "Unstage changes for the specified file while keeping the changes in the working directory.",
		example: "To unstage changes for 'myfile.txt' without deleting the changes, run:",
		code: "git reset myfile.txt"
	},
	{
		name: "git checkout -- [file]",
		description: "The `git checkout -- [file]` command discards any local changes made to a specific file in your working directory, reverting it back to the last committed state. This is useful if you want to undo modifications to a file and return it to how it was in the last commit.",
		example: "To discard changes made to a file named 'index.html' and restore it to the version in the last commit, run:",
		code: "git checkout -- index.html\t\tOR\t\tgit checkout -- src/App.jsx"
	},

	{
		name: "git revert [commit]",
		description: "Reverse a commit by creating a new commit.",
		example: 'To reverse the changes introduced by a commit with hash "abcd123", run:',
		code: "git revert abcd123"
	},
	{
		name: "git reset --hard [commit]",
		description: "Reset the current branch and index to a specified state.",
		example: 'To reset the current branch and index to the state of a commit with hash "abcd123", run:',
		code: "git reset --hard abcd123"
	},
	{
		name: "git reset --soft [commit]",
		description: "Reset the current branch to a specified commit but keep changes in the working directory.",
		example: 'To reset the current branch to a commit with hash "abcd123" but keep changes in the working directory, run:',
		code: "git reset --soft abcd123"
	},
	{
		name: "git reset --mixed <commit-hash>",
		description: "Undo commits and unstage changes, but keep the working directory intact.",
		example: "To reset the commit history up to 'abc123' and unstage the changes, run:",
		code: "git reset --mixed abc123"
	},
	{
		name: "git restore [file]",
		description: "Restore changes in the working directory for a file to their state at the last commit.",
		example: 'To restore changes in the working directory for a file named "index.html" to their state at the last commit, run:',
		code: "git restore index.html"
	},
	{
		name: "git restore --staged <file>",
		description: "Unstage changes without altering the file in the working directory.",
		example: "To unstage changes for 'myfile.txt', run:",
		code: "git restore --staged myfile.txt"
	},
	{
		name: "git rm --cached -r <directory>",
		description: "Remove a directory or file from the staging area (index) while keeping it in the working directory. This is often used when you want to stop tracking a file or directory in Git without deleting it from your local system.",
		example: "To stop tracking the 'dev-dist/' directory but keep it in your working directory, run:",
		code: "git rm --cached -r dev-dist/"
	},

	{
		name: "git gc",
		description: "Cleanup unnecessary files and optimize the local repository.",
		example: "To run garbage collection and optimize the repository, run:",
		code: "git gc"
	},
	{
		name: "git commit --allow-empty -m 'message'",
		description: "Create an empty commit with a message.",
		example: "To create an empty commit with the message 'Initial commit', run:",
		code: "git commit --allow-empty -m 'Initial commit'"
	},
	{
		name: "git fetch [remote]",
		description: "This command is used to download objects and references (refs) from another repository, typically a remote repository. It updates your local repository with the latest commits, branches, and tags from the remote repository without merging them into your working branch.",
		example: 'To download objects and refs from the remote repository "origin", run:',
		code: "git fetch origin",
		basic: "basic commands"
	},
	{
		name: "git remote rm [name]",
		description: "Remove a remote repository.",
		example: 'To remove a remote repository named "origin", run:',
		code: "git remote rm origin"
	},
	{
		name: "git branch -d <branch-name>",
		description: "Delete the specified branch only if it has been fully merged into your current branch or another branch. If the branch hasn't been merged, Git will refuse to delete it to prevent potential data loss.",
		example: "To delete the 'test' branch only if it's merged, run:",
		code: "git branch -d test"
	},
	{
		name: "git branch -D <branch-name>",
		description: "Forcefully delete the specified branch, even if it hasn't been fully merged into your current branch or any other branches. **Use with caution as this action cannot be undone easily.**",
		example: "To forcefully delete the branch named 'test', run:",
		code: "git branch -D test"
	},

	{
		name: "git push [remote] --delete [branch_name]",
		description: "Delete a branch on the remote repository.",
		example: 'To delete a branch named "feature" on the remote repository "origin", run:',
		code: "git push origin --delete feature"
	},
	{
		name: "git fetch --prune",
		description: "Remove remote tracking branches that no longer exist on the remote.",
		example: 'To remove remote tracking branches that no longer exist on the remote repository "origin", run:',
		code: "git fetch --prune"
	},
	{
		name: "git log --graph --oneline --decorate --all",
		description: "Visualize the commit history graph.",
		example: "To visualize the commit history graph with one-line commit messages and decorations, run:",
		code: "git log --graph --oneline --decorate --all"
	},
	{
		name: "git log --since=[date]",
		description: "Show commit history since a specific date.",
		example: "To show commit history since January 1, 2022, run:",
		code: "git log --since=2022-01-01"
	},
	{
		name: "git log --until=[date]",
		description: "Show commit history until a specific date.",
		example: "To show commit history until December 31, 2022, run:",
		code: "git log --until=2022-12-31"
	},
	{
		name: "git log --stat",
		description: "Display additional statistics in the commit log including date,time and author.",
		example: "To display additional statistics in the commit log, run:",
		code: "git log --stat"
	},
	{
		name: "git shortlog",
		description: "Summarize git log output by user in simple words.",
		example: "To summarize git log output by user, run:",
		code: "git shortlog"
	},
	{
		name: "git log --graph",
		description: "Display commit history in a more visual way.",
		example: "To display commit history in a more visual way, run:",
		code: "git log --graph"
	},
	{
		name: "git diff [branch1] [branch2]",
		description: "Show the differences between two branches.",
		example: 'To show the differences between the "main" and "feature" branches, run:',
		code: "git diff main feature"
	},
	{
		name: "git show-branch --all",
		description: "Show branches, their commits, and their relationships.",
		example: "To show branches, their commits, and their relationships, run:",
		code: "git show-branch --all"
	},
	{
		name: "git diff [commit1] [commit2]",
		description: "Show the differences between two commits.",
		example: 'To show the differences between commits "abcd123" and "efgh456", run:',
		code: "git diff abcd123 efgh456"
	},
	{
		name: "git blame [file]",
		description: "Show who last modified each line of a file and when.",
		example: 'To show who last modified each line of a file named "index.html" and when, run:',
		code: "git blame index.html"
	},
	{
		name: "git grep [pattern]",
		description: "Search the contents of files in the repository for a pattern.",
		example: 'To search the contents of files in the repository for the pattern "TODO", run:',
		code: 'git grep "TODO"'
	},
	{
		name: 'git log --author="[author_name]"',
		description: "Filter commit history by author.",
		example: 'To filter commit history by author name "Majid Ali", run:',
		code: 'git log --author="Majid Ali"'
	},
	{
		name: 'git log --grep="[commit_message]"',
		description: "Filter commit history by commit message.",
		example: 'To filter commit history by commit message containing "bug fix", run:',
		code: 'git log --grep="bug fix"'
	},

	{
		name: "git log --follow [file]",
		description: "Show the history of a file, including renames.",
		example: 'To show the history of a file named "index.html", including renames, run:',
		code: "git log --follow index.html"
	},
	{
		name: "git diff --cached",
		description: "Show changes staged for commit.",
		example: "To show changes staged for commit, run:",
		code: "git diff --cached"
	},
	{
		name: "git commit --amend",
		description: "Amend (to change or modify) the last commit with new changes.",
		example: "To amend the last commit with new changes, run:",
		code: "git commit --amend"
	},
	{
		name: "git branch -M main",
		description: "The `git branch -M main` command renames the current branch to 'main', using the `-M` flag to force the rename. This is useful for changing the default branch name, especially in scenarios where you want to adopt 'main' as the primary branch instead of 'master'. If a branch named 'main' already exists, it will be overwritten.",
		example: "To rename the current branch to 'main', run:",
		code: "git branch -M main"
	},

	{
		name: "git branch -m [old_branch] [new_branch]",
		description: "The `git branch -m` command renames an existing branch in your Git repository. If you provide only one argument, it renames the current branch to the specified name. This command is useful for improving branch naming conventions or correcting naming mistakes without affecting your commit history.",
		example: "To rename the branch 'feature-xyz' to 'feature-abc', run:\n\n1. For renaming the current branch:\n   `git branch -m feature-abc`\n\n2. For renaming a specific branch:\n   `git branch -m feature-xyz feature-abc`",
		code: "git branch -m feature-xyz feature-abc"
	},

	{
		name: "git reflog",
		description: "Show a log of all commits that have been referenced in your local repository.",
		example: "To show a log of all commits that have been referenced in your local repository, run:",
		code: "git reflog"
	},
	{
		name: "git clean -df",
		description: "Remove untracked files and directories from the working directory.",
		example: "To remove untracked files and directories from the working directory, run:",
		code: "git clean -df"
	},

	{
		name: "git show-branch",
		description: "Show branches and their commits.",
		example: "To show branches and their commits, run:",
		code: "git show-branch"
	},
	{
		name: "git cherry-pick [commit]",
		description: "Apply the changes introduced by the specified commit to the current branch.",
		example: 'To apply the changes introduced by a commit with hash "abcd123" to the current branch, run:',
		code: "git cherry-pick abcd123"
	},

	{
		name: "git remote show [remote_name]",
		description: "Display information about a remote repository.",
		example: 'To display information about the remote repository named "origin", run:',
		code: "git remote show origin"
	},
	{
		name: "git mv [old_file] [new_file]",
		description: "Rename or move a file.",
		example: 'To rename a file named "old.txt" to "new.txt", run:',
		code: "git mv old.txt new.txt"
	},
	{
		name: "git archive [branch_name] --format=zip --output=[output_file.zip]",
		description: "Create a zip archive of a branch.",
		example: 'To create a zip archive of the "master" branch named "repo.zip", run:',
		code: "git archive master --format=zip --output=repo.zip"
	},

	{
		name: "git remote rename [old_name] [new_name]",
		description: "Rename a remote repository.",
		example: 'To rename a remote repository named "origin" to "new-origin", run:',
		code: "git remote rename origin new-origin"
	},
	{
		name: "git remote set-url [remote_name] [new_url]",
		description: "This command allows you to change the URL of a remote repository in your Git configuration. This is useful when the repository’s URL has changed, or you want to switch between HTTPS and SSH URLs for the remote.",
		example: 'To change the URL of the remote repository named "origin", run:',
		code: "git remote set-url origin <new_url>"
	},

	{
		name: "git bisect",
		description: "Use binary search to find the commit that introduced a bug.",
		example: "To use binary search to find the commit that introduced a bug, run:",
		code: "git bisect"
	},
	{
		name: "git submodule add [repository_url] [path]",
		description: "Adds a new submodule to the current repository. This allows you to include an external Git repository inside your project, which can be tracked separately. The submodule will be added at the specified path.",
		example: "To add a submodule from a repository and place it in a specific path, run:",
		code: "git submodule add https://github.com/user/repo.git path/to/submodule"
	},
	{
		name: "git submodule init",
		description: "Initializes the submodules that have been defined in the .gitmodules file but are not yet set up in the local repository. It prepares the submodule configuration so that they can be fetched or updated later.",
		example: "To initialize all submodules that are declared in the .gitmodules file, run:",
		code: "git submodule init"
	},
	{
		name: "git submodule update",
		description: "Fetches the latest commits for all initialized submodules and checks them out in the working directory. This command ensures that the submodules are updated to match the versions specified in the main project.",
		example: "To fetch and check out the latest changes for all submodules, run:",
		code: "git submodule update"
	},
	{
		name: "git submodule update -f --init megaset",
		description: "Forces the update of a specific submodule (megaset) by fetching the submodule's latest content and initializing it if it hasn't been initialized yet. The `-f` option forces the update, and `--init` ensures the submodule is initialized if it hasn't been already. This command is useful if you want to ensure a submodule is fetched and checked out even in the case of conflicts or missing initialization.",
		example: "To force the update and initialization of the submodule named `megaset`, run:",
		code: "git submodule update -f --init megaset"
	},

	{
		name: "git submodule foreach [command]",
		description: "Executes a specified command in each of the submodule directories. This is useful for performing the same action (like pulling updates) across all submodules.",
		example: "To run `git pull` in all submodules, run:",
		code: "git submodule foreach git pull"
	},
	{
		name: "git submodule deinit [path]",
		description: "Deinitializes a submodule, removing it from the working directory but keeping its configuration in the .gitmodules file. This does not delete the submodule from the repository, but removes its files locally.",
		example: "To deinitialize a submodule at a specific path, run:",
		code: "git submodule deinit path/to/submodule"
	},
	{
		name: "git submodule status",
		description: "Displays the current status of each submodule in the repository, showing which commit each submodule is checked out at, whether there are uncommitted changes, and more.",
		example: "To check the current status of all submodules, run:",
		code: "git submodule status"
	},
	{
		name: "git submodule sync",
		description: "Updates the URL of submodules in the .git/config file to match those defined in the .gitmodules file. This is useful if the URL of a submodule has changed and you want to synchronize it with the latest configuration.",
		example: "To synchronize the URLs of all submodules, run:",
		code: "git submodule sync"
	},
	{
		name: "git submodule remove [path]",
		description: "Completely removes a submodule from the repository. This process involves deinitializing the submodule, removing the submodule entry from the .gitmodules file, and deleting the submodule's directory and related metadata.",
		example: "To remove a submodule from the repository entirely, run:",
		code: "git submodule deinit -f -- path/to/submodule\ngit rm -f path/to/submodule\nrm -rf .git/modules/path/to/submodule"
	}
];

export default gitCommands;
