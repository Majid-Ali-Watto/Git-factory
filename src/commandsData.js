const gitCommands = [
	{
		name: 'git config --global user.name "Your Name"',
		description: "Set your username globally.",
		example: "To set your username globally, run:",
		code: 'git config --global user.name "Your Name"'
	},
	{
		name: 'git config --global user.email "your_email@example.com"',
		description: "Set your email globally.",
		example: "To set your email globally, run:",
		code: 'git config --global user.email "your_email@example.com"'
	},
	{
		name: "git init",
		description: "Initialize a new Git repository in the current directory.",
		example: "To start tracking changes in a new project, navigate to the project directory and run:",
		code: "git init"
	},
	{
		name: "git clone [url]",
		description: "Clone a repository from a remote source to your local machine.",
		example: "To clone a repository from GitHub, you can run:",
		code: "git clone https://github.com/user/repository.git"
	},
	{
		name: "git status",
		description: "Check the status of your working directory.",
		example: "To see which files have been modified since your last commit, run:",
		code: "git status"
	},
	{
		name: "git add [file]",
		description: "Add changes in the working directory to the staging area.",
		example: 'To stage a file named "index.html" for the next commit, run:',
		code: "git add index.html"
	},
	{
		name: 'git commit -m "Commit message"',
		description: "Record changes to the repository with a descriptive message.",
		example: 'To commit staged changes with the message "Add new feature", run:',
		code: 'git commit -m "Add new feature"'
	},
	{
		name: "git push -u origin [branch]",
		description: "Push the specified branch to the remote repository and set it as the upstream branch. It is needed for first time, after pushing at least once, upstream is not needed.",
		example: 'To push the local branch named "feature" to the remote repository named "origin" and set it as the upstream branch, run:',
		code: "git push -u origin feature"
	},
	{
		name: "git push [remote] [branch]",
		description: "Upload local repository content to a remote repository.",
		example: 'To push changes from your local "master" branch to the remote "origin" repository, run:',
		code: "git push origin master"
	},

	{
		name: "git pull [remote] [branch]",
		description: "Fetch changes from a remote repository and merge them into the current branch.",
		example: 'To fetch and merge changes from the remote "origin" repository into your local "master" branch, run:',
		code: "git pull origin master"
	},
	{
		name: "git branch",
		description: "List all branches in the repository.",
		example: "To list all branches in the repository, run:",
		code: "git branch"
	},
	{
		name: "git checkout [branch_name]",
		description: "Switch to the specified branch.",
		example: 'To switch to a branch named "feature", run:',
		code: "git checkout feature"
	},
	{
		name: "git checkout -b [branch]",
		description: "Create a new branch and switch to it.",
		example: 'To create a new branch named "feature" and switch to it, run:',
		code: "git checkout -b feature"
	},
	{
		name: "git switch [branch_name]",
		description: "Switch to the specified branch.",
		example: 'To switch to a branch named "feature", run:',
		code: "git switch feature"
	},

	{
		name: "git merge [branch_name]",
		description: "Combine changes from the specified branch into the current branch.",
		example: 'To merge changes from the "feature" branch into the current branch, run:',
		code: "git merge feature"
	},
	{
		name: "git remote add [name] [url]",
		description: "Add a new remote repository.",
		example: 'To add a remote repository named "origin" with URL "https://github.com/user/repository.git", run:',
		code: "git remote add origin https://github.com/user/repository.git"
	},
	{
		name: "git remote -v",
		description: "List all remote repositories and their URLs.",
		example: "To list all remote repositories and their URLs, run:",
		code: "git remote -v"
	},
	{
		name: "git log",
		description: "Display commit history.",
		example: "To display the commit history of the current branch, run:",
		code: "git log"
	},
	{
		name: "git show [commit]",
		description: "Show changes introduced by a commit.",
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
		description: "Temporarily shelve changes you've made to your working copy.",
		example: "To stash changes in your working directory, run:",
		code: "git stash"
	},
	{
		name: "git stash apply",
		description: "Applies a stash to the working directory.",
		example: `git stash apply stash@{0}. If you don't specify a stash, the most recent stash is applied.`,
		code: `git stash apply stash@{0}\t\tOR\t\tgit stash apply`
	},
	{
		name: "git tag [tag_name]",
		description: "Create a lightweight tag pointing to the current commit.",
		example: 'To create a tag named "v1.0" for the current commit, run:',
		code: "git tag v1.0"
	},
	{
		name: "git rebase [branch]",
		description: "Incorporate changes from one branch into another by rewriting commit history.",
		example: 'To rebase the current branch onto the "master" branch, run:',
		code: "git rebase master"
	},
	{
		name: "git reset [file]",
		description: "Unstage changes for a file.",
		example: 'To unstage changes for a file named "index.html", run:',
		code: "git reset index.html"
	},
	{
		name: "git checkout -- [file]",
		description: "Discard changes in the working directory for a file.",
		example: 'To discard changes in the working directory for a file named "index.html", run:',
		code: "git checkout -- index.html"
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
		name: "git restore [file]",
		description: "Restore changes in the working directory for a file to their state at the last commit.",
		example: 'To restore changes in the working directory for a file named "index.html" to their state at the last commit, run:',
		code: "git restore index.html"
	},
	{
		name: "git stash pop",
		description: "Apply the most recent stash and remove it from the stash list.",
		example: "To apply and remove the most recent stash, run:",
		code: "git stash pop"
	},
	{
		name: "git stash list",
		description: "List all stashed changes.",
		example: "To list all stashed changes, run:",
		code: "git stash list"
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
		description: "Download objects and refs from another repository.",
		example: 'To download objects and refs from the remote repository "origin", run:',
		code: "git fetch origin"
	},
	{
		name: "git remote rm [name]",
		description: "Remove a remote repository.",
		example: 'To remove a remote repository named "origin", run:',
		code: "git remote rm origin"
	},
	{
		name: "git branch -d [branch_name]",
		description: "Delete the specified branch.",
		example: 'To delete a branch named "feature", run:',
		code: "git branch -d feature"
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
		description: "Amend the last commit with new changes.",
		example: "To amend the last commit with new changes, run:",
		code: "git commit --amend"
	},
	{
		name: "git branch -m [old_branch_name] [new_branch_name]",
		description: "Rename a branch locally.",
		example: 'To rename a branch named "feature" to "new-feature", run:',
		code: "git branch -m feature new-feature"
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
		name: "git submodule update --init --recursive",
		description: "Initialize and update submodules in the repository.",
		example: "To initialize and update submodules in the repository, run:",
		code: "git submodule update --init --recursive"
	},

	{
		name: "git pull --rebase",
		description: "Fetch and rebase instead of merging when pulling changes from a remote repository.",
		example: 'To fetch and rebase instead of merging when pulling changes from the remote repository "origin", run:',
		code: "git pull --rebase origin"
	},
	{
		name: "git remote rename [old_name] [new_name]",
		description: "Rename a remote repository.",
		example: 'To rename a remote repository named "origin" to "new-origin", run:',
		code: "git remote rename origin new-origin"
	},
	{
		name: "git remote set-url [remote_name] [new_url]",
		description: "Change the URL of a remote repository.",
		example: 'To change the URL of the remote repository named "origin", run:',
		code: "git remote set-url origin <new_url>"
	},

	{
		name: "git cherry-pick [commit1] [commit2] ...",
		description: "Apply the changes introduced by specific commits to the current branch.",
		example: 'To apply the changes introduced by commits "abcd123" and "efgh456" to the current branch, run:',
		code: "git cherry-pick abcd123 efgh456"
	},
	{
		name: "git bisect",
		description: "Use binary search to find the commit that introduced a bug.",
		example: "To use binary search to find the commit that introduced a bug, run:",
		code: "git bisect"
	}
];

export default gitCommands;
