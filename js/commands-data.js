/**
 * CmdVault - Official Commands Database
 * Extracted and compiled from Git Cheat Sheet & Linux Notes for Professionals
 */

const COMMANDS_DATA = [
  // ==========================================
  // GIT COMMANDS
  // ==========================================
  {
    id: "git-setup-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SETUP",
    sectionDescription: "Configuring user information used across all local repositories",
    command: 'git config --global user.name "[firstname lastname]"',
    description: "set a name that is identifiable for credit when review version history"
  },
  {
    id: "git-setup-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SETUP",
    sectionDescription: "Configuring user information used across all local repositories",
    command: 'git config --global user.email "[valid-email]"',
    description: "set an email address that will be associated with each history marker"
  },
  {
    id: "git-setup-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SETUP",
    sectionDescription: "Configuring user information used across all local repositories",
    command: "git config --global color.ui auto",
    description: "set automatic command line coloring for Git for easy reviewing"
  },
  {
    id: "git-init-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SETUP & INIT",
    sectionDescription: "Configuring user information, initializing and cloning repositories",
    command: "git init",
    description: "initialize an existing directory as a Git repository"
  },
  {
    id: "git-init-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SETUP & INIT",
    sectionDescription: "Configuring user information, initializing and cloning repositories",
    command: "git clone [url]",
    description: "retrieve an entire repository from a hosted location via URL"
  },
  {
    id: "git-stage-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STAGE & SNAPSHOT",
    sectionDescription: "Working with snapshots and the Git staging area",
    command: "git status",
    description: "show modified files in working directory, staged for your next commit"
  },
  {
    id: "git-stage-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STAGE & SNAPSHOT",
    sectionDescription: "Working with snapshots and the Git staging area",
    command: "git add [file]",
    description: "add a file as it looks now to your next commit (stage)"
  },
  {
    id: "git-stage-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STAGE & SNAPSHOT",
    sectionDescription: "Working with snapshots and the Git staging area",
    command: "git reset [file]",
    description: "unstage a file while retaining the changes in working directory"
  },
  {
    id: "git-stage-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STAGE & SNAPSHOT",
    sectionDescription: "Working with snapshots and the Git staging area",
    command: "git diff",
    description: "diff of what is changed but not staged"
  },
  {
    id: "git-stage-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STAGE & SNAPSHOT",
    sectionDescription: "Working with snapshots and the Git staging area",
    command: "git diff --staged",
    description: "diff of what is staged but not yet committed"
  },
  {
    id: "git-stage-6",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STAGE & SNAPSHOT",
    sectionDescription: "Working with snapshots and the Git staging area",
    command: 'git commit -m "[descriptive message]"',
    description: "commit your staged content as a new commit snapshot"
  },
  {
    id: "git-branch-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "BRANCH & MERGE",
    sectionDescription: "Isolating work in branches, changing context, and integrating changes",
    command: "git branch",
    description: "list your branches. a * will appear next to the currently active branch"
  },
  {
    id: "git-branch-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "BRANCH & MERGE",
    sectionDescription: "Isolating work in branches, changing context, and integrating changes",
    command: "git branch [branch-name]",
    description: "create a new branch at the current commit"
  },
  {
    id: "git-branch-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "BRANCH & MERGE",
    sectionDescription: "Isolating work in branches, changing context, and integrating changes",
    command: "git checkout [branch]",
    description: "switch to another branch and check it out into your working directory"
  },
  {
    id: "git-branch-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "BRANCH & MERGE",
    sectionDescription: "Isolating work in branches, changing context, and integrating changes",
    command: "git merge [branch]",
    description: "merge the specified branch's history into the current one"
  },
  {
    id: "git-branch-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "BRANCH & MERGE",
    sectionDescription: "Isolating work in branches, changing context, and integrating changes",
    command: "git log",
    description: "show all commits in the current branch's history"
  },
  {
    id: "git-share-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SHARE & UPDATE",
    sectionDescription: "Retrieving updates from another repository and updating local repos",
    command: "git remote add [alias] [url]",
    description: "add a git URL as an alias"
  },
  {
    id: "git-share-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SHARE & UPDATE",
    sectionDescription: "Retrieving updates from another repository and updating local repos",
    command: "git fetch [alias]",
    description: "fetch down all the branches from that Git remote"
  },
  {
    id: "git-share-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SHARE & UPDATE",
    sectionDescription: "Retrieving updates from another repository and updating local repos",
    command: "git merge [alias]/[branch]",
    description: "merge a remote branch into your current branch to bring it up to date"
  },
  {
    id: "git-share-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SHARE & UPDATE",
    sectionDescription: "Retrieving updates from another repository and updating local repos",
    command: "git push [alias] [branch]",
    description: "transmit local branch commits to the remote repository branch"
  },
  {
    id: "git-share-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SHARE & UPDATE",
    sectionDescription: "Retrieving updates from another repository and updating local repos",
    command: "git pull",
    description: "fetch and merge any commits from the tracking remote branch"
  },
  {
    id: "git-tracking-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TRACKING PATH CHANGES",
    sectionDescription: "Versioning file removes and path changes",
    command: "git rm [file]",
    description: "delete the file from project and stage the removal for commit"
  },
  {
    id: "git-tracking-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TRACKING PATH CHANGES",
    sectionDescription: "Versioning file removes and path changes",
    command: "git mv [existing-path] [new-path]",
    description: "change an existing file path and stage the move"
  },
  {
    id: "git-tracking-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TRACKING PATH CHANGES",
    sectionDescription: "Versioning file removes and path changes",
    command: "git log --stat -M",
    description: "show all commit logs with indication of any paths that moved"
  },
  {
    id: "git-temp-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TEMPORARY COMMITS",
    sectionDescription: "Temporarily store modified, tracked files in order to change branches",
    command: "git stash",
    description: "save modified and staged changes"
  },
  {
    id: "git-temp-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TEMPORARY COMMITS",
    sectionDescription: "Temporarily store modified, tracked files in order to change branches",
    command: "git stash list",
    description: "list stack-order of stashed file changes"
  },
  {
    id: "git-temp-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TEMPORARY COMMITS",
    sectionDescription: "Temporarily store modified, tracked files in order to change branches",
    command: "git stash pop",
    description: "write working from top of stash stack"
  },
  {
    id: "git-temp-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TEMPORARY COMMITS",
    sectionDescription: "Temporarily store modified, tracked files in order to change branches",
    command: "git stash drop",
    description: "discard the changes from top of stash stack"
  },
  {
    id: "git-rewrite-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REWRITE HISTORY",
    sectionDescription: "Rewriting branches, updating commits and clearing history",
    command: "git rebase [branch]",
    description: "apply any commits of current branch ahead of specified one"
  },
  {
    id: "git-rewrite-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REWRITE HISTORY",
    sectionDescription: "Rewriting branches, updating commits and clearing history",
    command: "git reset --hard [commit]",
    description: "clear staging area, rewrite working tree from specified commit"
  },
  {
    id: "git-inspect-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT & COMPARE",
    sectionDescription: "Examining logs, diffs and object information",
    command: "git log branchB..branchA",
    description: "show the commits on branchA that are not on branchB"
  },
  {
    id: "git-inspect-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT & COMPARE",
    sectionDescription: "Examining logs, diffs and object information",
    command: "git log --follow [file]",
    description: "show the commits that changed file, even across renames"
  },
  {
    id: "git-inspect-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT & COMPARE",
    sectionDescription: "Examining logs, diffs and object information",
    command: "git diff branchB...branchA",
    description: "show the diff of what is in branchA that is not in branchB"
  },
  {
    id: "git-inspect-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT & COMPARE",
    sectionDescription: "Examining logs, diffs and object information",
    command: "git show [SHA]",
    description: "show any object in Git in human-readable format"
  },
  {
    id: "git-stash-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git stash push -m \"wip: feature implementation\"",
    description: "save modified and staged working directory changes to stash stack with a descriptive label"
  },
  {
    id: "git-stash-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git stash list",
    description: "inspect all stored stash entries with index, branch identifier, and commit description"
  },
  {
    id: "git-stash-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git stash pop",
    description: "apply the latest stashed changes and remove them from the stash stack"
  },
  {
    id: "git-stash-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git stash apply stash@{0}",
    description: "reapply specific stashed changes without removing them from the stash list"
  },
  {
    id: "git-stash-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git stash drop stash@{0}",
    description: "discard a specific stash entry from the stash stack"
  },
  {
    id: "git-stash-6",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git clean -fd",
    description: "recursively remove untracked files and directories from the working tree"
  },
  {
    id: "git-stash-7",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "STASHING & RECOVERY",
    sectionDescription: "Temporarily shelving dirty working changes and cleaning untracked files",
    command: "git clean -ndx",
    description: "perform a dry run displaying untracked and gitignored files that would be removed"
  },
  {
    id: "git-tag-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TAGGING & RELEASES",
    sectionDescription: "Marking release checkpoints, semantic versions, and deployment milestones",
    command: "git tag -a v1.0.0 -m \"Release version 1.0.0\"",
    description: "create an annotated release tag with message, author metadata, and cryptographic stamp"
  },
  {
    id: "git-tag-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TAGGING & RELEASES",
    sectionDescription: "Marking release checkpoints, semantic versions, and deployment milestones",
    command: "git tag -l",
    description: "list all existing tags across the repository in alphabetical order"
  },
  {
    id: "git-tag-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TAGGING & RELEASES",
    sectionDescription: "Marking release checkpoints, semantic versions, and deployment milestones",
    command: "git push origin v1.0.0",
    description: "push a specific release tag reference to the remote GitHub repository"
  },
  {
    id: "git-tag-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TAGGING & RELEASES",
    sectionDescription: "Marking release checkpoints, semantic versions, and deployment milestones",
    command: "git push origin --tags",
    description: "publish all local release tags to the remote GitHub repository simultaneously"
  },
  {
    id: "git-tag-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TAGGING & RELEASES",
    sectionDescription: "Marking release checkpoints, semantic versions, and deployment milestones",
    command: "git tag -d v1.0.0",
    description: "delete a tag from the local Git repository"
  },
  {
    id: "git-tag-6",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "TAGGING & RELEASES",
    sectionDescription: "Marking release checkpoints, semantic versions, and deployment milestones",
    command: "git push origin --delete v1.0.0",
    description: "delete a published tag from the remote GitHub repository"
  },
  {
    id: "git-rebase-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REBASING & SQUASHING",
    sectionDescription: "Cleaning commit history, squashing commits, and rebasing branches",
    command: "git rebase -i HEAD~4",
    description: "launch interactive rebase editor to squash, edit, reword, or reorder the last 4 commits"
  },
  {
    id: "git-rebase-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REBASING & SQUASHING",
    sectionDescription: "Cleaning commit history, squashing commits, and rebasing branches",
    command: "git rebase main",
    description: "reapply current branch commits on top of the tip of main branch"
  },
  {
    id: "git-rebase-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REBASING & SQUASHING",
    sectionDescription: "Cleaning commit history, squashing commits, and rebasing branches",
    command: "git rebase --continue",
    description: "resume rebase process after manually resolving merge conflict markers"
  },
  {
    id: "git-rebase-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REBASING & SQUASHING",
    sectionDescription: "Cleaning commit history, squashing commits, and rebasing branches",
    command: "git rebase --abort",
    description: "cancel interactive rebase and restore the branch to its exact pre-rebase state"
  },
  {
    id: "git-rebase-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "REBASING & SQUASHING",
    sectionDescription: "Cleaning commit history, squashing commits, and rebasing branches",
    command: "git merge --squash [feature-branch]",
    description: "combine all commits from feature branch into a single staged commit on current branch"
  },
  {
    id: "git-cherry-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "CHERRY-PICK & REFLOG",
    sectionDescription: "Applying specific commits and recovering lost history via reference logs",
    command: "git cherry-pick [commit-hash]",
    description: "apply the specific changes introduced by an existing commit onto current HEAD"
  },
  {
    id: "git-cherry-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "CHERRY-PICK & REFLOG",
    sectionDescription: "Applying specific commits and recovering lost history via reference logs",
    command: "git cherry-pick --abort",
    description: "cancel cherry-pick in progress and return to the pre-cherry-pick state"
  },
  {
    id: "git-cherry-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "CHERRY-PICK & REFLOG",
    sectionDescription: "Applying specific commits and recovering lost history via reference logs",
    command: "git reflog",
    description: "view chronological list of all HEAD reference movements to locate lost or amended commits"
  },
  {
    id: "git-cherry-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "CHERRY-PICK & REFLOG",
    sectionDescription: "Applying specific commits and recovering lost history via reference logs",
    command: "git reset --hard HEAD@{1}",
    description: "restore repository state to the prior commit recorded in reflog before the last action"
  },
  {
    id: "git-submod-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SUBMODULES & DEPENDENCIES",
    sectionDescription: "Managing nested git repositories and sub-project dependencies",
    command: "git submodule add [repository-url] [path]",
    description: "incorporate an external repository as a tracked child submodule within current project"
  },
  {
    id: "git-submod-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SUBMODULES & DEPENDENCIES",
    sectionDescription: "Managing nested git repositories and sub-project dependencies",
    command: "git submodule update --init --recursive",
    description: "clone, initialize, and checkout all configured nested submodules following repository clone"
  },
  {
    id: "git-submod-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SUBMODULES & DEPENDENCIES",
    sectionDescription: "Managing nested git repositories and sub-project dependencies",
    command: "git submodule status",
    description: "show current commit SHA, relative path, and checkout status for each registered submodule"
  },
  {
    id: "git-submod-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "SUBMODULES & DEPENDENCIES",
    sectionDescription: "Managing nested git repositories and sub-project dependencies",
    command: "git submodule foreach git pull origin main",
    description: "execute a git command across every registered submodule directory automatically"
  },
  {
    id: "git-worktree-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "GIT WORKTREES",
    sectionDescription: "Checking out multiple branches at once in separate working directories",
    command: "git worktree add ../hotfix-worktree [branch-name]",
    description: "create and check out an independent branch in a separate filesystem folder simultaneously"
  },
  {
    id: "git-worktree-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "GIT WORKTREES",
    sectionDescription: "Checking out multiple branches at once in separate working directories",
    command: "git worktree list",
    description: "list details, paths, and current branch checkouts of all active linked working trees"
  },
  {
    id: "git-worktree-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "GIT WORKTREES",
    sectionDescription: "Checking out multiple branches at once in separate working directories",
    command: "git worktree remove ../hotfix-worktree",
    description: "safely unmount and remove a linked working tree directory after completing branch work"
  },
  {
    id: "git-inspect-adv-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT, BLAME & BISECT",
    sectionDescription: "Binary search debugging, author attribution, and deep diff comparisons",
    command: "git blame -L 1,30 [filename]",
    description: "display line-by-line commit authorship, timestamps, and commit hashes for a file range"
  },
  {
    id: "git-inspect-adv-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT, BLAME & BISECT",
    sectionDescription: "Binary search debugging, author attribution, and deep diff comparisons",
    command: "git bisect start",
    description: "initiate automated binary search wizard to isolate the exact commit that introduced a bug"
  },
  {
    id: "git-inspect-adv-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT, BLAME & BISECT",
    sectionDescription: "Binary search debugging, author attribution, and deep diff comparisons",
    command: "git bisect bad",
    description: "mark the current commit as faulty in bisect wizard"
  },
  {
    id: "git-inspect-adv-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT, BLAME & BISECT",
    sectionDescription: "Binary search debugging, author attribution, and deep diff comparisons",
    command: "git bisect good [commit-hash]",
    description: "designate a past commit known to be healthy to establish binary search boundaries"
  },
  {
    id: "git-inspect-adv-5",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT, BLAME & BISECT",
    sectionDescription: "Binary search debugging, author attribution, and deep diff comparisons",
    command: "git bisect reset",
    description: "terminate binary search session and restore working directory to original branch HEAD"
  },
  {
    id: "git-inspect-adv-6",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "INSPECT, BLAME & BISECT",
    sectionDescription: "Binary search debugging, author attribution, and deep diff comparisons",
    command: "git log -S \"[search-term]\"",
    description: "search history for commits that added or removed a specific string of code (pickaxe search)"
  },
  {
    id: "git-archive-1",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "ARCHIVE & LARGE FILE STORAGE",
    sectionDescription: "Exporting clean code bundles and managing large binary assets with Git LFS",
    command: "git archive --format=zip --output=release.zip HEAD",
    description: "export repository source tree snapshot as a clean zip file excluding git history metadata"
  },
  {
    id: "git-archive-2",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "ARCHIVE & LARGE FILE STORAGE",
    sectionDescription: "Exporting clean code bundles and managing large binary assets with Git LFS",
    command: "git lfs track \"*.psd\"",
    description: "configure Git Large File Storage pointer tracking for large assets in .gitattributes"
  },
  {
    id: "git-archive-3",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "ARCHIVE & LARGE FILE STORAGE",
    sectionDescription: "Exporting clean code bundles and managing large binary assets with Git LFS",
    command: "git lfs ls-files",
    description: "list all large files currently tracked by Git Large File Storage in the repository"
  },
  {
    id: "git-archive-4",
    category: "github-git",
    os: ["windows", "linux", "macos"],
    section: "ARCHIVE & LARGE FILE STORAGE",
    sectionDescription: "Exporting clean code bundles and managing large binary assets with Git LFS",
    command: "git remote prune origin",
    description: "delete stale local tracking references for branches that no longer exist on remote repository"
  },

  // ==========================================
  // LINUX BASH COMMANDS
  // ==========================================
  {
    id: "linux-file-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "ls -la",
    description: "list all directory contents including hidden files, permissions, and sizes"
  },
  {
    id: "linux-file-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "pwd",
    description: "print name of current working directory path"
  },
  {
    id: "linux-file-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "mkdir -p [dir_name]",
    description: "create directory path with all required parent directories without errors"
  },
  {
    id: "linux-file-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "cp -rv [source] [dest]",
    description: "copy files or directories recursively with verbose output"
  },
  {
    id: "linux-file-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "rm -rf [path]",
    description: "forcefully and recursively remove files or non-empty directories"
  },
  {
    id: "linux-file-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "find . -type f -name \"*.log\"",
    description: "search current directory recursively for regular files matching pattern"
  },
  {
    id: "linux-file-7",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "cd -",
    description: "switch back to the previously visited working directory"
  },
  {
    id: "linux-file-8",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "touch [filename]",
    description: "create a new empty file or update the access and modification timestamp of an existing file"
  },
  {
    id: "linux-file-9",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "cat [file]",
    description: "concatenate and display the entire contents of a file to standard output"
  },
  {
    id: "linux-file-10",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "head -n [number] [file]",
    description: "output the first specified number of lines from the beginning of a file"
  },
  {
    id: "linux-file-11",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "tail -n [number] -f [file]",
    description: "display the last lines of a file and actively follow new appended lines in real time"
  },
  {
    id: "linux-file-12",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "less [file]",
    description: "open a file in an interactive terminal viewer with forward and backward paging navigation"
  },
  {
    id: "linux-file-13",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "mv [source] [dest]",
    description: "move or rename files and directories to a new filename or destination directory"
  },
  {
    id: "linux-file-14",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "ln -s [target_path] [link_name]",
    description: "create a symbolic link pointing to an existing file or directory target"
  },
  {
    id: "linux-file-15",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "ls -lhS",
    description: "list files in long format with human-readable sizes sorted from largest to smallest"
  },
  {
    id: "linux-file-16",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "ls -lt",
    description: "list directory contents sorted by modification time with newest files displayed first"
  },
  {
    id: "linux-file-17",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "FILE & DIRECTORY MANAGEMENT",
    sectionDescription: "Inspecting, navigating, creating, moving, and modifying filesystem items",
    command: "stat [file]",
    description: "display comprehensive low-level metadata including inode number, permissions, and timestamps"
  },
  {
    id: "linux-search-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "grep -rn \"[pattern]\" [directory]",
    description: "search recursively across all files in a directory for a pattern and show line numbers"
  },
  {
    id: "linux-search-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "grep -i \"[pattern]\" [file]",
    description: "search for a specific text string or regex pattern within a file ignoring letter casing"
  },
  {
    id: "linux-search-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "which [command_name]",
    description: "locate and display the exact binary executable path in PATH associated with a command"
  },
  {
    id: "linux-search-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "whereis [command_name]",
    description: "find the binary executable, source code files, and manual man pages for a command"
  },
  {
    id: "linux-search-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "locate [filename]",
    description: "quickly search for files anywhere across the filesystem using the prebuilt mlocate database"
  },
  {
    id: "linux-search-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "find . -type f -mtime -7",
    description: "find all regular files within the current directory hierarchy modified in the last 7 days"
  },
  {
    id: "linux-search-7",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SEARCHING & PATTERN MATCHING",
    sectionDescription: "Locating files, grepping text, and finding items by metadata attributes",
    command: "find . -type f -size +100M",
    description: "search the filesystem recursively for files exceeding 100 megabytes in size"
  },
  {
    id: "linux-perm-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PERMISSIONS & OWNERSHIP",
    sectionDescription: "Configuring user privileges, mode bits, and file group access",
    command: "chmod 755 [file]",
    description: "set read/write/execute for owner and read/execute for group and others"
  },
  {
    id: "linux-perm-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PERMISSIONS & OWNERSHIP",
    sectionDescription: "Configuring user privileges, mode bits, and file group access",
    command: "chown -R [user]:[group] [path]",
    description: "change ownership of file or directory tree to specified user and group"
  },
  {
    id: "linux-perm-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PERMISSIONS & OWNERSHIP",
    sectionDescription: "Configuring user privileges, mode bits, and file group access",
    command: "chmod +x [script.sh]",
    description: "grant executable permissions on a script or binary file for user, group, and others"
  },
  {
    id: "linux-perm-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PERMISSIONS & OWNERSHIP",
    sectionDescription: "Configuring user privileges, mode bits, and file group access",
    command: "chmod -R 644 [directory]",
    description: "recursively set read and write permissions for owner and read-only access for others"
  },
  {
    id: "linux-perm-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PERMISSIONS & OWNERSHIP",
    sectionDescription: "Configuring user privileges, mode bits, and file group access",
    command: "chown [user] [file]",
    description: "change file user ownership while leaving the existing group assignment unmodified"
  },
  {
    id: "linux-perm-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PERMISSIONS & OWNERSHIP",
    sectionDescription: "Configuring user privileges, mode bits, and file group access",
    command: "umask",
    description: "display or configure the default file creation permission mask for the current shell"
  },
  {
    id: "linux-sys-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "uname -a",
    description: "print system kernel release, hostname, architecture, and build timestamp"
  },
  {
    id: "linux-sys-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "df -h",
    description: "display disk space utilization across all mounted file systems in human units"
  },
  {
    id: "linux-sys-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "free -m",
    description: "check free, used, and cached physical memory and swap metrics in megabytes"
  },
  {
    id: "linux-sys-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "htop",
    description: "interactive visual process viewer and hardware resource monitor"
  },
  {
    id: "linux-sys-5",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "lsb_release -a",
    description: "display Linux distribution distributor ID, release version, and official codename"
  },
  {
    id: "linux-sys-6",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "cat /etc/os-release",
    description: "inspect standard system identification metadata and operating system release attributes"
  },
  {
    id: "linux-sys-7",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "hostnamectl",
    description: "query or modify system hostname, deployment environment, kernel, and OS architecture"
  },
  {
    id: "linux-sys-8",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "lscpu",
    description: "display detailed CPU architecture information including sockets, cores, threads, and cache levels"
  },
  {
    id: "linux-sys-9",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "lshw -short",
    description: "generate a concise summary table of detected hardware components, devices, and memory banks"
  },
  {
    id: "linux-sys-10",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "lspci",
    description: "list all PCI buses, controllers, graphics cards, and attached peripheral hardware devices"
  },
  {
    id: "linux-sys-11",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "lsusb",
    description: "list all USB buses, root hubs, and connected external USB hardware devices"
  },
  {
    id: "linux-sys-12",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "uptime -p",
    description: "show how long the system has been continuously running in a human-friendly format"
  },
  {
    id: "linux-sys-13",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "dmesg -T",
    description: "print kernel ring buffer messages and boot diagnostics with human-readable timestamps"
  },
  {
    id: "linux-sys-14",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEM DIAGNOSTICS & HARDWARE",
    sectionDescription: "Auditing kernel, memory, storage volumes, and CPU performance",
    command: "cat /proc/version",
    description: "display the running Linux kernel version, GCC compiler build details, and compile date"
  },
  {
    id: "linux-proc-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "ps aux",
    description: "list all running processes across all users with CPU and memory usage statistics"
  },
  {
    id: "linux-proc-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "ps -ef | grep [process_name]",
    description: "filter and search for running process instances by name or PID in the process table"
  },
  {
    id: "linux-proc-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "top",
    description: "launch the classic real-time interactive process monitor displaying CPU and memory loads"
  },
  {
    id: "linux-proc-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "kill [pid]",
    description: "terminate a process gracefully by sending the standard termination signal (SIGTERM)"
  },
  {
    id: "linux-proc-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "kill -9 [pid]",
    description: "forcefully terminate an unresponsive process immediately with uncatchable kill signal (SIGKILL)"
  },
  {
    id: "linux-proc-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "killall [process_name]",
    description: "terminate all running process instances matching the specified executable name"
  },
  {
    id: "linux-proc-7",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "lsof -i :[port]",
    description: "list all active network connections and open file descriptors bound to a specific port"
  },
  {
    id: "linux-proc-8",
    category: "linux-bash",
    os: ["linux"],
    section: "PROCESS MONITORING & MANAGEMENT",
    sectionDescription: "Inspecting, filtering, monitoring, and terminating running system processes",
    command: "vmstat 1 5",
    description: "report virtual memory statistics, process states, block I/O, and CPU activity 5 times every 1 second"
  },
  {
    id: "linux-disk-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "STORAGE & DISK USAGE",
    sectionDescription: "Analyzing directory sizes, checking mount capacities, and inspecting storage devices",
    command: "du -sh [directory]",
    description: "display the total disk space consumed by a directory in human-readable megabytes or gigabytes"
  },
  {
    id: "linux-disk-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "STORAGE & DISK USAGE",
    sectionDescription: "Analyzing directory sizes, checking mount capacities, and inspecting storage devices",
    command: "du -h --max-depth=1 [path] | sort -hr",
    description: "list immediate subdirectories and files sorted by size from highest to lowest disk usage"
  },
  {
    id: "linux-disk-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "STORAGE & DISK USAGE",
    sectionDescription: "Analyzing directory sizes, checking mount capacities, and inspecting storage devices",
    command: "df -i",
    description: "report filesystem inode usage count and percentage capacity instead of block space"
  },
  {
    id: "linux-disk-4",
    category: "linux-bash",
    os: ["linux"],
    section: "STORAGE & DISK USAGE",
    sectionDescription: "Analyzing directory sizes, checking mount capacities, and inspecting storage devices",
    command: "lsblk",
    description: "display a visual tree view of all available block devices, partitions, sizes, and mount points"
  },
  {
    id: "linux-disk-5",
    category: "linux-bash",
    os: ["linux"],
    section: "STORAGE & DISK USAGE",
    sectionDescription: "Analyzing directory sizes, checking mount capacities, and inspecting storage devices",
    command: "sudo fdisk -l",
    description: "view partition tables, sector sizes, and disk partition types for all connected storage drives"
  },
  {
    id: "linux-service-1",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl status [service]",
    description: "inspect live status, logs, and PID information for a given system service"
  },
  {
    id: "linux-service-2",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl restart [service]",
    description: "restart active daemon service immediately to apply configuration updates"
  },
  {
    id: "linux-service-3",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "journalctl -u [service] -f",
    description: "follow live logs and stderr output emitted by specified systemd unit"
  },
  {
    id: "linux-service-4",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl start [service]",
    description: "start and activate a systemd service daemon immediately"
  },
  {
    id: "linux-service-5",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl stop [service]",
    description: "stop and deactivate a currently running systemd service daemon"
  },
  {
    id: "linux-service-6",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl enable [service]",
    description: "enable a service to launch automatically upon system boot"
  },
  {
    id: "linux-service-7",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl disable [service]",
    description: "disable a service from automatically starting on system boot"
  },
  {
    id: "linux-service-8",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl is-active [service]",
    description: "check whether a specific service daemon is currently in an active running state"
  },
  {
    id: "linux-service-9",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl list-units --type=service --state=running",
    description: "list all service units currently loaded and active in the system"
  },
  {
    id: "linux-service-10",
    category: "linux-bash",
    os: ["linux"],
    section: "SYSTEMD SERVICE MANAGEMENT",
    sectionDescription: "Controlling daemons, background tasks, and service unit lifecycles",
    command: "systemctl daemon-reload",
    description: "reload the systemd manager configuration after creating or editing custom unit files"
  },
  {
    id: "linux-user-1",
    category: "linux-bash",
    os: ["linux"],
    section: "USER & GROUP ADMINISTRATION",
    sectionDescription: "Managing user accounts, credentials, groups, and administrative privileges",
    command: "sudo useradd -m -s /bin/bash [username]",
    description: "create a new user account with a home directory and default bash login shell"
  },
  {
    id: "linux-user-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "USER & GROUP ADMINISTRATION",
    sectionDescription: "Managing user accounts, credentials, groups, and administrative privileges",
    command: "sudo passwd [username]",
    description: "change or initialize the authentication password for a user account"
  },
  {
    id: "linux-user-3",
    category: "linux-bash",
    os: ["linux"],
    section: "USER & GROUP ADMINISTRATION",
    sectionDescription: "Managing user accounts, credentials, groups, and administrative privileges",
    command: "sudo usermod -aG sudo [username]",
    description: "append a user account to the sudo administrative group granting superuser rights"
  },
  {
    id: "linux-user-4",
    category: "linux-bash",
    os: ["linux"],
    section: "USER & GROUP ADMINISTRATION",
    sectionDescription: "Managing user accounts, credentials, groups, and administrative privileges",
    command: "sudo userdel -r [username]",
    description: "delete a user account along with their user home directory and mail spool files"
  },
  {
    id: "linux-user-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "USER & GROUP ADMINISTRATION",
    sectionDescription: "Managing user accounts, credentials, groups, and administrative privileges",
    command: "id [username]",
    description: "print effective user ID (UID), group ID (GID), and all associated supplementary groups"
  },
  {
    id: "linux-user-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "USER & GROUP ADMINISTRATION",
    sectionDescription: "Managing user accounts, credentials, groups, and administrative privileges",
    command: "whoami",
    description: "print the effective username of the currently active logged-in terminal user"
  },
  {
    id: "linux-net-1",
    category: "linux-bash",
    os: ["linux"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "ip a",
    description: "display all network interfaces, assigned IPv4/IPv6 addresses, subnet masks, and link statuses"
  },
  {
    id: "linux-net-2",
    category: "linux-bash",
    os: ["linux"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "ip route",
    description: "display kernel IP routing tables and configured default network gateway route"
  },
  {
    id: "linux-net-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "ping -c 4 [hostname_or_ip]",
    description: "send 4 ICMP echo request packets to verify network connectivity and response latency"
  },
  {
    id: "linux-net-4",
    category: "linux-bash",
    os: ["linux"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "ss -tuln",
    description: "list all currently open and listening TCP and UDP sockets with numeric port numbers"
  },
  {
    id: "linux-net-5",
    category: "linux-bash",
    os: ["linux"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "netstat -plnt",
    description: "display active TCP listening ports along with their corresponding process IDs and program names"
  },
  {
    id: "linux-net-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "curl -I [url]",
    description: "fetch HTTP/HTTPS response headers only from a remote web server without downloading body"
  },
  {
    id: "linux-net-7",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "dig [domain] +short",
    description: "perform a DNS query to quickly retrieve resolved IP addresses for a specified domain name"
  },
  {
    id: "linux-net-8",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "NETWORKING & CONNECTIVITY",
    sectionDescription: "Auditing network interfaces, IP routing, DNS resolution, sockets, and ports",
    command: "nslookup [domain]",
    description: "query Internet domain name servers to inspect DNS records and reverse lookups"
  },
  {
    id: "linux-ssh-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "REMOTE ACCESS & SECURE SHELL",
    sectionDescription: "Connecting securely to remote hosts, managing keys, and copying files via SSH",
    command: "ssh [user]@[host]",
    description: "establish an encrypted SSH shell session to a remote server with default port 22"
  },
  {
    id: "linux-ssh-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "REMOTE ACCESS & SECURE SHELL",
    sectionDescription: "Connecting securely to remote hosts, managing keys, and copying files via SSH",
    command: "ssh -p [port] [user]@[host]",
    description: "connect to an SSH daemon running on a customized non-standard port number"
  },
  {
    id: "linux-ssh-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "REMOTE ACCESS & SECURE SHELL",
    sectionDescription: "Connecting securely to remote hosts, managing keys, and copying files via SSH",
    command: "ssh-keygen -t ed25519 -C \"[email]\"",
    description: "generate an elliptic curve ED25519 public and private cryptographic SSH key pair"
  },
  {
    id: "linux-ssh-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "REMOTE ACCESS & SECURE SHELL",
    sectionDescription: "Connecting securely to remote hosts, managing keys, and copying files via SSH",
    command: "ssh-copy-id [user]@[host]",
    description: "copy local public SSH key to the remote host authorized_keys file for passwordless login"
  },
  {
    id: "linux-ssh-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "REMOTE ACCESS & SECURE SHELL",
    sectionDescription: "Connecting securely to remote hosts, managing keys, and copying files via SSH",
    command: "scp [file] [user]@[host]:[destination_path]",
    description: "securely transfer a local file to a destination directory on a remote server over SSH"
  },
  {
    id: "linux-ssh-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "REMOTE ACCESS & SECURE SHELL",
    sectionDescription: "Connecting securely to remote hosts, managing keys, and copying files via SSH",
    command: "scp -r [folder] [user]@[host]:[destination_path]",
    description: "recursively copy an entire directory structure and its contents to a remote server over SSH"
  },
  {
    id: "linux-pkg-1",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo apt update && sudo apt upgrade -y",
    description: "resynchronize package index files and upgrade all installed packages on Debian/Ubuntu systems"
  },
  {
    id: "linux-pkg-2",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo apt install -y [package_name]",
    description: "install new software package and its required dependencies automatically using APT"
  },
  {
    id: "linux-pkg-3",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo apt remove --purge [package_name]",
    description: "uninstall a package and completely purge all of its configuration files from the system"
  },
  {
    id: "linux-pkg-4",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo pacman -Syu",
    description: "synchronize package repositories and upgrade all installed packages on Arch Linux"
  },
  {
    id: "linux-pkg-5",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo pacman -S [package_name]",
    description: "install one or more packages from the official repositories using pacman"
  },
  {
    id: "linux-pkg-6",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo dnf update -y",
    description: "check for updates and refresh all installed RPM packages on Fedora / RHEL / CentOS"
  },
  {
    id: "linux-pkg-7",
    category: "linux-bash",
    os: ["linux"],
    section: "PACKAGE MANAGERS & INSTALLATION",
    sectionDescription: "Updating repositories, installing, and removing software packages across distros",
    command: "sudo dnf install [package_name]",
    description: "install software package and dependencies using DNF on modern Red Hat-based distributions"
  },
  {
    id: "linux-pipe-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "TEXT PROCESSING & I/O REDIRECTION",
    sectionDescription: "Piping streams, splitting output with tee, sorting, and stream filtering",
    command: "[command] | tee [file]",
    description: "duplicate standard output to display in terminal while simultaneously writing to a file"
  },
  {
    id: "linux-pipe-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "TEXT PROCESSING & I/O REDIRECTION",
    sectionDescription: "Piping streams, splitting output with tee, sorting, and stream filtering",
    command: "[command] | tee -a [file]",
    description: "append output stream to the end of an existing file while also displaying in the terminal"
  },
  {
    id: "linux-pipe-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "TEXT PROCESSING & I/O REDIRECTION",
    sectionDescription: "Piping streams, splitting output with tee, sorting, and stream filtering",
    command: "[command] > [file] 2>&1",
    description: "redirect both standard output (stdout) and standard error (stderr) into a destination file"
  },
  {
    id: "linux-pipe-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "TEXT PROCESSING & I/O REDIRECTION",
    sectionDescription: "Piping streams, splitting output with tee, sorting, and stream filtering",
    command: "sort [file] | uniq -c",
    description: "sort lines in a file alphabetically and count occurrences of each adjacent duplicate line"
  },
  {
    id: "linux-pipe-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "TEXT PROCESSING & I/O REDIRECTION",
    sectionDescription: "Piping streams, splitting output with tee, sorting, and stream filtering",
    command: "wc -l [file]",
    description: "count and report the total number of lines in a specified text file"
  },
  {
    id: "linux-tar-1",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "ARCHIVING & COMPRESSION",
    sectionDescription: "Packaging and extracting compressed tarballs and zip bundles",
    command: "tar -czvf [archive.tar.gz] [folder]",
    description: "compress folder into a gzip-compressed tar archive with verbose progress"
  },
  {
    id: "linux-tar-2",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "ARCHIVING & COMPRESSION",
    sectionDescription: "Packaging and extracting compressed tarballs and zip bundles",
    command: "tar -xzvf [archive.tar.gz]",
    description: "extract contents of gzip tarball into the current directory"
  },
  {
    id: "linux-tar-3",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "ARCHIVING & COMPRESSION",
    sectionDescription: "Packaging and extracting compressed tarballs and zip bundles",
    command: "tar -tvf [archive.tar.gz]",
    description: "list file contents and permissions of a gzip-compressed archive without extracting it"
  },
  {
    id: "linux-tar-4",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "ARCHIVING & COMPRESSION",
    sectionDescription: "Packaging and extracting compressed tarballs and zip bundles",
    command: "tar -czvf [archive.tar.gz] --exclude=\"[folder]\" [directory]",
    description: "create a compressed tarball while skipping specified files or subdirectories"
  },
  {
    id: "linux-tar-5",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "ARCHIVING & COMPRESSION",
    sectionDescription: "Packaging and extracting compressed tarballs and zip bundles",
    command: "zip -r [archive.zip] [folder]",
    description: "package an entire folder and subfolders recursively into a cross-platform zip archive"
  },
  {
    id: "linux-tar-6",
    category: "linux-bash",
    os: ["linux", "macos"],
    section: "ARCHIVING & COMPRESSION",
    sectionDescription: "Packaging and extracting compressed tarballs and zip bundles",
    command: "unzip [archive.zip] -d [destination]",
    description: "extract the contents of a zip archive into a designated destination directory"
  },

  // ==========================================
  // POWERSHELL WINDOWS COMMANDS
  // ==========================================
  {
    id: "ps-nav-1",
    category: "powershell-windows",
    os: ["windows"],
    section: "NAVIGATION & ITEM MANAGEMENT",
    sectionDescription: "Interacting with Windows drives, folders, files, and child items",
    command: "Get-ChildItem -Path . -Recurse",
    description: "retrieve child items in current folder and all subdirectories recursively"
  },
  {
    id: "ps-nav-2",
    category: "powershell-windows",
    os: ["windows"],
    section: "NAVIGATION & ITEM MANAGEMENT",
    sectionDescription: "Interacting with Windows drives, folders, files, and child items",
    command: "Set-Location -Path C:\\Projects",
    description: "change current working session directory to specified Windows drive path"
  },
  {
    id: "ps-nav-3",
    category: "powershell-windows",
    os: ["windows"],
    section: "NAVIGATION & ITEM MANAGEMENT",
    sectionDescription: "Interacting with Windows drives, folders, files, and child items",
    command: "New-Item -ItemType Directory -Path .\\Build",
    description: "create a new directory or file item at the specified path"
  },
  {
    id: "ps-nav-4",
    category: "powershell-windows",
    os: ["windows"],
    section: "NAVIGATION & ITEM MANAGEMENT",
    sectionDescription: "Interacting with Windows drives, folders, files, and child items",
    command: "Copy-Item -Path .\\src\\* -Destination .\\dist\\ -Recurse -Force",
    description: "copy directory contents recursively and overwrite destination files"
  },
  {
    id: "ps-proc-1",
    category: "powershell-windows",
    os: ["windows"],
    section: "PROCESS & SERVICE CONTROL",
    sectionDescription: "Monitoring running tasks, stopping hung processes, and managing services",
    command: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 10",
    description: "list top 10 most CPU-intensive processes currently executing on the machine"
  },
  {
    id: "ps-proc-2",
    category: "powershell-windows",
    os: ["windows"],
    section: "PROCESS & SERVICE CONTROL",
    sectionDescription: "Monitoring running tasks, stopping hung processes, and managing services",
    command: 'Stop-Process -Name "node" -Force',
    description: "forcibly kill all process instances matching the specified executable name"
  },
  {
    id: "ps-proc-3",
    category: "powershell-windows",
    os: ["windows"],
    section: "PROCESS & SERVICE CONTROL",
    sectionDescription: "Monitoring running tasks, stopping hung processes, and managing services",
    command: 'Get-Service -Name "wuauserv"',
    description: "check the running status and startup mode of the Windows Update service"
  },
  {
    id: "ps-proc-4",
    category: "powershell-windows",
    os: ["windows"],
    section: "PROCESS & SERVICE CONTROL",
    sectionDescription: "Monitoring running tasks, stopping hung processes, and managing services",
    command: 'Restart-Service -Name "spooler" -Force',
    description: "restart the print spooler service or any specified Windows service"
  },
  {
    id: "ps-admin-1",
    category: "powershell-windows",
    os: ["windows"],
    section: "SYSTEM & NETWORK DIAGNOSTICS",
    sectionDescription: "Testing ports, network routes, execution policies, and environment info",
    command: "Get-ComputerInfo",
    description: "display detailed operating system, BIOS, memory, and hardware configuration"
  },
  {
    id: "ps-admin-2",
    category: "powershell-windows",
    os: ["windows"],
    section: "SYSTEM & NETWORK DIAGNOSTICS",
    sectionDescription: "Testing ports, network routes, execution policies, and environment info",
    command: "Test-NetConnection -ComputerName github.com -Port 443",
    description: "test TCP socket connectivity and DNS resolution to remote host and port"
  },
  {
    id: "ps-admin-3",
    category: "powershell-windows",
    os: ["windows"],
    section: "SYSTEM & NETWORK DIAGNOSTICS",
    sectionDescription: "Testing ports, network routes, execution policies, and environment info",
    command: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser",
    description: "enable running local unsigned PowerShell scripts for the current user profile"
  },
  {
    id: "ps-admin-4",
    category: "powershell-windows",
    os: ["windows"],
    section: "SYSTEM & NETWORK DIAGNOSTICS",
    sectionDescription: "Testing ports, network routes, execution policies, and environment info",
    command: "Get-NetIPAddress -AddressFamily IPv4",
    description: "list all active IPv4 network interface addresses, subnets, and adapters"
  }
,

  // ==========================================
  // MYSQL & SQL COMMANDS
  // ==========================================
  {
    id: "mysql-db-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA OPERATIONS",
    sectionDescription: "Creating, managing, selecting, and dropping relational MySQL databases",
    command: "CREATE DATABASE [database_name];",
    description: "create a new MySQL database schema with default character set and collation"
  },
  {
    id: "mysql-db-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA OPERATIONS",
    sectionDescription: "Creating, managing, selecting, and dropping relational MySQL databases",
    command: "CREATE DATABASE IF NOT EXISTS [database_name] CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;",
    description: "create database safely if not exists with complete modern unicode utf8mb4 support"
  },
  {
    id: "mysql-db-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA OPERATIONS",
    sectionDescription: "Creating, managing, selecting, and dropping relational MySQL databases",
    command: "SHOW DATABASES;",
    description: "display a list of all databases available on the connected MySQL server instance"
  },
  {
    id: "mysql-db-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA OPERATIONS",
    sectionDescription: "Creating, managing, selecting, and dropping relational MySQL databases",
    command: "USE [database_name];",
    description: "switch and select the active database for all subsequent SQL queries and statements"
  },
  {
    id: "mysql-db-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA OPERATIONS",
    sectionDescription: "Creating, managing, selecting, and dropping relational MySQL databases",
    command: "DROP DATABASE IF EXISTS [database_name];",
    description: "permanently delete a database along with all its tables, views, and data"
  },
  {
    id: "mysql-table-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & CONSTRAINTS",
    sectionDescription: "Creating, inspecting, truncating, and dropping database tables and constraints",
    command: "CREATE TABLE [table_name] (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);",
    description: "create a new database table with auto-incrementing primary key and timestamp defaults"
  },
  {
    id: "mysql-table-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & CONSTRAINTS",
    sectionDescription: "Creating, inspecting, truncating, and dropping database tables and constraints",
    command: "SHOW TABLES;",
    description: "list all existing tables contained in the currently selected database"
  },
  {
    id: "mysql-table-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & CONSTRAINTS",
    sectionDescription: "Creating, inspecting, truncating, and dropping database tables and constraints",
    command: "DESCRIBE [table_name];",
    description: "view table column schemas including data types, nullability, default values, and keys"
  },
  {
    id: "mysql-table-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & CONSTRAINTS",
    sectionDescription: "Creating, inspecting, truncating, and dropping database tables and constraints",
    command: "SHOW CREATE TABLE [table_name];",
    description: "display the exact SQL statement and storage engine used to create the specified table"
  },
  {
    id: "mysql-table-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & CONSTRAINTS",
    sectionDescription: "Creating, inspecting, truncating, and dropping database tables and constraints",
    command: "DROP TABLE IF EXISTS [table_name];",
    description: "permanently delete a table and remove its schema definition from the database"
  },
  {
    id: "mysql-table-6",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & CONSTRAINTS",
    sectionDescription: "Creating, inspecting, truncating, and dropping database tables and constraints",
    command: "TRUNCATE TABLE [table_name];",
    description: "fast wipe of all table rows while resetting auto-increment counters and preserving schema"
  },
  {
    id: "mysql-alter-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Modifying existing table structures, adding columns, and altering data types",
    command: "ALTER TABLE [table_name] ADD COLUMN [column_name] VARCHAR(255) AFTER [existing_column];",
    description: "add a new column to an existing table positioned after a specified column"
  },
  {
    id: "mysql-alter-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Modifying existing table structures, adding columns, and altering data types",
    command: "ALTER TABLE [table_name] DROP COLUMN [column_name];",
    description: "remove and permanently drop an existing column from the table definition"
  },
  {
    id: "mysql-alter-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Modifying existing table structures, adding columns, and altering data types",
    command: "ALTER TABLE [table_name] MODIFY COLUMN [column_name] VARCHAR(200) NOT NULL;",
    description: "modify the data type, nullability constraint, or length of an existing column"
  },
  {
    id: "mysql-alter-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Modifying existing table structures, adding columns, and altering data types",
    command: "ALTER TABLE [table_name] CHANGE [old_col] [new_col] INT NOT NULL;",
    description: "rename an existing column and redefine its data type in a single statement"
  },
  {
    id: "mysql-alter-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Modifying existing table structures, adding columns, and altering data types",
    command: "ALTER TABLE [old_table] RENAME TO [new_table];",
    description: "rename an existing database table to a new table name"
  },
  {
    id: "mysql-alter-6",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Modifying existing table structures, adding columns, and altering data types",
    command: "ALTER TABLE [table_name] ADD CONSTRAINT fk_name FOREIGN KEY ([column]) REFERENCES [parent_table]([id]) ON DELETE CASCADE;",
    description: "add a foreign key constraint to link child records and cascade deletions"
  },
  {
    id: "mysql-select-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT * FROM [table_name];",
    description: "retrieve all columns and all stored rows from a specified table"
  },
  {
    id: "mysql-select-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT DISTINCT [column_name] FROM [table_name];",
    description: "query and return unique, non-duplicated values for specified table column"
  },
  {
    id: "mysql-select-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT * FROM [table_name] WHERE [status] = 'active' AND [age] >= 18;",
    description: "filter query results matching multiple combined Boolean AND conditions"
  },
  {
    id: "mysql-select-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT * FROM [table_name] WHERE [name] LIKE '%keyword%';",
    description: "search text column for substring occurrences using SQL wildcard percent symbols"
  },
  {
    id: "mysql-select-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT * FROM [table_name] WHERE [status] IN ('pending', 'approved', 'shipped');",
    description: "filter records matching any item in a discrete set of allowed values"
  },
  {
    id: "mysql-select-6",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT * FROM [table_name] WHERE [created_at] BETWEEN '2026-01-01' AND '2026-12-31';",
    description: "query rows where a date or numeric column falls within an inclusive continuous range"
  },
  {
    id: "mysql-select-7",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA QUERYING & FILTERING",
    sectionDescription: "Fetching data rows, filtering records with WHERE clauses, and evaluating criteria",
    command: "SELECT * FROM [table_name] WHERE [deleted_at] IS NULL;",
    description: "retrieve records where specified column contains an unassigned NULL value"
  },
  {
    id: "mysql-order-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SORTING & PAGINATION",
    sectionDescription: "Ordering query result sets, paginating data, and limiting output volumes",
    command: "SELECT * FROM [table_name] ORDER BY [column_name] DESC;",
    description: "sort query output in descending order by specified column"
  },
  {
    id: "mysql-order-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SORTING & PAGINATION",
    sectionDescription: "Ordering query result sets, paginating data, and limiting output volumes",
    command: "SELECT * FROM [table_name] ORDER BY [priority] DESC, [created_at] ASC;",
    description: "order query results by multiple columns with varying directional sorting"
  },
  {
    id: "mysql-order-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SORTING & PAGINATION",
    sectionDescription: "Ordering query result sets, paginating data, and limiting output volumes",
    command: "SELECT * FROM [table_name] LIMIT [count];",
    description: "restrict query result to return only the first specified number of records"
  },
  {
    id: "mysql-order-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SORTING & PAGINATION",
    sectionDescription: "Ordering query result sets, paginating data, and limiting output volumes",
    command: "SELECT * FROM [table_name] LIMIT [offset], [count];",
    description: "fetch a paginated slice of records starting from an offset row index"
  },
  {
    id: "mysql-group-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATION & GROUPING",
    sectionDescription: "Aggregating metrics, calculating sums and averages, and grouping records",
    command: "SELECT COUNT(*) FROM [table_name];",
    description: "count total number of rows stored in a table or matching filter criteria"
  },
  {
    id: "mysql-group-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATION & GROUPING",
    sectionDescription: "Aggregating metrics, calculating sums and averages, and grouping records",
    command: "SELECT AVG([col]), SUM([col]), MIN([col]), MAX([col]) FROM [table_name];",
    description: "compute statistical aggregates including average, total sum, minimum, and maximum"
  },
  {
    id: "mysql-group-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATION & GROUPING",
    sectionDescription: "Aggregating metrics, calculating sums and averages, and grouping records",
    command: "SELECT [category], COUNT(*) AS total FROM [table_name] GROUP BY [category];",
    description: "group records by distinct column values and count items per group"
  },
  {
    id: "mysql-group-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATION & GROUPING",
    sectionDescription: "Aggregating metrics, calculating sums and averages, and grouping records",
    command: "SELECT [category], COUNT(*) AS total FROM [table_name] GROUP BY [category] HAVING total > 10;",
    description: "filter grouped results based on aggregate condition using having clause"
  },
  {
    id: "mysql-join-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "RELATIONAL JOINS & UNIONS",
    sectionDescription: "Combining data from multiple relational tables via foreign keys and unions",
    command: "SELECT a.*, b.[col] FROM [table_a] a INNER JOIN [table_b] b ON a.[id] = b.[a_id];",
    description: "return rows that have matching values in both related tables"
  },
  {
    id: "mysql-join-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "RELATIONAL JOINS & UNIONS",
    sectionDescription: "Combining data from multiple relational tables via foreign keys and unions",
    command: "SELECT a.*, b.[col] FROM [table_a] a LEFT JOIN [table_b] b ON a.[id] = b.[a_id];",
    description: "return all rows from left table with matching data from right table or NULL"
  },
  {
    id: "mysql-join-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "RELATIONAL JOINS & UNIONS",
    sectionDescription: "Combining data from multiple relational tables via foreign keys and unions",
    command: "SELECT a.*, b.[col] FROM [table_a] a RIGHT JOIN [table_b] b ON a.[id] = b.[a_id];",
    description: "return all rows from right table with corresponding records from left table or NULL"
  },
  {
    id: "mysql-join-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "RELATIONAL JOINS & UNIONS",
    sectionDescription: "Combining data from multiple relational tables via foreign keys and unions",
    command: "SELECT [column] FROM [table_a] UNION SELECT [column] FROM [table_b];",
    description: "combine distinct results of two queries eliminating duplicate entries"
  },
  {
    id: "mysql-join-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "RELATIONAL JOINS & UNIONS",
    sectionDescription: "Combining data from multiple relational tables via foreign keys and unions",
    command: "SELECT [column] FROM [table_a] UNION ALL SELECT [column] FROM [table_b];",
    description: "combine results of two queries preserving all records including duplicate rows"
  },
  {
    id: "mysql-dml-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA MODIFICATION (DML)",
    sectionDescription: "Inserting new records, updating existing data values, and deleting rows",
    command: "INSERT INTO [table_name] ([column1], [column2]) VALUES ('val1', 'val2');",
    description: "insert a new single row of data into specified table columns"
  },
  {
    id: "mysql-dml-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA MODIFICATION (DML)",
    sectionDescription: "Inserting new records, updating existing data values, and deleting rows",
    command: "INSERT INTO [table_name] ([col1], [col2]) VALUES ('a1', 'b1'), ('a2', 'b2'), ('a3', 'b3');",
    description: "batch insert multiple records simultaneously in a single atomic SQL transaction"
  },
  {
    id: "mysql-dml-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA MODIFICATION (DML)",
    sectionDescription: "Inserting new records, updating existing data values, and deleting rows",
    command: "INSERT INTO [table_name] (id, views) VALUES (1, 1) ON DUPLICATE KEY UPDATE views = views + 1;",
    description: "insert a new row or update specified fields if unique key collision occurs (upsert)"
  },
  {
    id: "mysql-dml-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA MODIFICATION (DML)",
    sectionDescription: "Inserting new records, updating existing data values, and deleting rows",
    command: "UPDATE [table_name] SET [col1] = 'new_val', [col2] = 'new_val' WHERE [id] = 1;",
    description: "update column values for records satisfying the specified where condition"
  },
  {
    id: "mysql-dml-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "DATA MODIFICATION (DML)",
    sectionDescription: "Inserting new records, updating existing data values, and deleting rows",
    command: "DELETE FROM [table_name] WHERE [status] = 'inactive';",
    description: "delete specific rows meeting where condition from table"
  },
  {
    id: "mysql-idx-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES & QUERY PERFORMANCE",
    sectionDescription: "Creating B-tree indexes, analyzing query plans, and optimizing execution speeds",
    command: "CREATE INDEX [idx_name] ON [table_name] ([column_name]);",
    description: "create a standard B-tree index on table column to accelerate query lookups"
  },
  {
    id: "mysql-idx-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES & QUERY PERFORMANCE",
    sectionDescription: "Creating B-tree indexes, analyzing query plans, and optimizing execution speeds",
    command: "CREATE UNIQUE INDEX [idx_name] ON [table_name] ([column_name]);",
    description: "create a unique constraint index enforcing non-repeating values in a column"
  },
  {
    id: "mysql-idx-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES & QUERY PERFORMANCE",
    sectionDescription: "Creating B-tree indexes, analyzing query plans, and optimizing execution speeds",
    command: "SHOW INDEX FROM [table_name];",
    description: "display all indexes, index types, cardinality, and indexed column sequences on a table"
  },
  {
    id: "mysql-idx-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES & QUERY PERFORMANCE",
    sectionDescription: "Creating B-tree indexes, analyzing query plans, and optimizing execution speeds",
    command: "DROP INDEX [idx_name] ON [table_name];",
    description: "delete and remove an existing index from specified database table"
  },
  {
    id: "mysql-idx-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES & QUERY PERFORMANCE",
    sectionDescription: "Creating B-tree indexes, analyzing query plans, and optimizing execution speeds",
    command: "EXPLAIN SELECT * FROM [table_name] WHERE [column_name] = 'value';",
    description: "analyze query execution plan, estimated rows scanned, and index keys utilized"
  },
  {
    id: "mysql-trans-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TRANSACTIONS & DATA INTEGRITY",
    sectionDescription: "Controlling atomic operations, managing rollbacks, and data consistency",
    command: "START TRANSACTION;",
    description: "begin an atomic transaction block disabling autocommit for subsequent queries"
  },
  {
    id: "mysql-trans-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TRANSACTIONS & DATA INTEGRITY",
    sectionDescription: "Controlling atomic operations, managing rollbacks, and data consistency",
    command: "COMMIT;",
    description: "permanently persist and apply all database modifications made in the active transaction"
  },
  {
    id: "mysql-trans-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TRANSACTIONS & DATA INTEGRITY",
    sectionDescription: "Controlling atomic operations, managing rollbacks, and data consistency",
    command: "ROLLBACK;",
    description: "revert all uncommitted database changes made during the current transaction"
  },
  {
    id: "mysql-trans-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TRANSACTIONS & DATA INTEGRITY",
    sectionDescription: "Controlling atomic operations, managing rollbacks, and data consistency",
    command: "SAVEPOINT [savepoint_name];",
    description: "create an intermediate named checkpoint within an open transaction"
  },
  {
    id: "mysql-trans-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "TRANSACTIONS & DATA INTEGRITY",
    sectionDescription: "Controlling atomic operations, managing rollbacks, and data consistency",
    command: "ROLLBACK TO [savepoint_name];",
    description: "undo query changes back to a specific checkpoint without aborting the entire transaction"
  },
  {
    id: "mysql-user-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "CREATE USER '[username]'@'localhost' IDENTIFIED BY '[password]';",
    description: "create a new MySQL user account restricted to local host connections"
  },
  {
    id: "mysql-user-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "GRANT ALL PRIVILEGES ON [database_name].* TO '[username]'@'localhost';",
    description: "grant all database rights and permissions on specified schema to user"
  },
  {
    id: "mysql-user-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "GRANT SELECT, INSERT, UPDATE, DELETE ON [database_name].* TO '[username]'@'%';",
    description: "grant DML permissions on database schema to user connecting from any remote host"
  },
  {
    id: "mysql-user-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "SHOW GRANTS FOR '[username]'@'localhost';",
    description: "inspect list of all granted privileges and permissions assigned to a user account"
  },
  {
    id: "mysql-user-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "REVOKE ALL PRIVILEGES ON [database_name].* FROM '[username]'@'localhost';",
    description: "revoke and strip all assigned database privileges from specified user"
  },
  {
    id: "mysql-user-6",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "DROP USER '[username]'@'localhost';",
    description: "delete user account permanently from MySQL authentication user store"
  },
  {
    id: "mysql-user-7",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "FLUSH PRIVILEGES;",
    description: "reload in-memory MySQL grant tables to apply permission changes immediately"
  },
  {
    id: "mysql-user-8",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "USER MANAGEMENT & SECURITY",
    sectionDescription: "Creating database accounts, configuring passwords, and managing GRANT privileges",
    command: "ALTER USER '[username]'@'localhost' IDENTIFIED BY '[new_password]';",
    description: "change and update authentication password for an existing MySQL user account"
  },
  {
    id: "mysql-admin-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SERVER ADMINISTRATION & MONITORING",
    sectionDescription: "Auditing active connections, terminating processes, and checking system variables",
    command: "SHOW PROCESSLIST;",
    description: "display all active connection threads, client hosts, execution states, and queries"
  },
  {
    id: "mysql-admin-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SERVER ADMINISTRATION & MONITORING",
    sectionDescription: "Auditing active connections, terminating processes, and checking system variables",
    command: "KILL [thread_id];",
    description: "terminate a long-running, locked, or runaway client query process thread"
  },
  {
    id: "mysql-admin-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SERVER ADMINISTRATION & MONITORING",
    sectionDescription: "Auditing active connections, terminating processes, and checking system variables",
    command: "SHOW STATUS LIKE '%Threads_connected%';",
    description: "inspect real-time server runtime status metrics and connection load"
  },
  {
    id: "mysql-admin-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SERVER ADMINISTRATION & MONITORING",
    sectionDescription: "Auditing active connections, terminating processes, and checking system variables",
    command: "SHOW VARIABLES LIKE '%max_connections%';",
    description: "view configured system configuration variables and resource thresholds"
  },
  {
    id: "mysql-admin-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "SERVER ADMINISTRATION & MONITORING",
    sectionDescription: "Auditing active connections, terminating processes, and checking system variables",
    command: "SELECT VERSION();",
    description: "display the official release version string of the running MySQL server"
  },
  {
    id: "mysql-cli-1",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "CLI UTILITIES & BACKUP",
    sectionDescription: "Connecting via terminal CLI, creating database backups, and importing data",
    command: "mysql -u [username] -p -h [hostname] -P 3306 [database_name]",
    description: "connect to MySQL database server through terminal CLI with authentication prompt"
  },
  {
    id: "mysql-cli-2",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "CLI UTILITIES & BACKUP",
    sectionDescription: "Connecting via terminal CLI, creating database backups, and importing data",
    command: "mysql -u [username] -p [database_name] < [backup_file.sql]",
    description: "restore or execute SQL commands from an external dump file into database"
  },
  {
    id: "mysql-cli-3",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "CLI UTILITIES & BACKUP",
    sectionDescription: "Connecting via terminal CLI, creating database backups, and importing data",
    command: "mysqldump -u [username] -p [database_name] > [backup.sql]",
    description: "export complete database schema and stored records into a SQL dump file"
  },
  {
    id: "mysql-cli-4",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "CLI UTILITIES & BACKUP",
    sectionDescription: "Connecting via terminal CLI, creating database backups, and importing data",
    command: "mysqldump -u [username] -p --all-databases > [all_databases.sql]",
    description: "backup all databases across the entire MySQL server instance into single file"
  },
  {
    id: "mysql-cli-5",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "CLI UTILITIES & BACKUP",
    sectionDescription: "Connecting via terminal CLI, creating database backups, and importing data",
    command: "mysqldump -u [username] -p --no-data [database_name] > [schema_only.sql]",
    description: "dump database structure, DDL, and table definitions without any data rows"
  },
  {
    id: "mysql-cli-6",
    category: "sql-mysql",
    os: ["windows", "linux", "macos"],
    section: "CLI UTILITIES & BACKUP",
    sectionDescription: "Connecting via terminal CLI, creating database backups, and importing data",
    command: "LOAD DATA INFILE '[path_to_file.csv]' INTO TABLE [table_name] FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;",
    description: "perform ultra-fast bulk data import from CSV directly into MySQL database table"
  }
,

  // ==========================================
  // POSTGRESQL & SQL COMMANDS
  // ==========================================
  {
    id: "pg-cli-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "psql -U [username] -d [database_name] -h [hostname] -p 5432",
    description: "connect to a PostgreSQL database server instance via the interactive terminal client"
  },
  {
    id: "pg-cli-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\l",
    description: "list all existing databases, owners, encodings, and access privileges on the cluster"
  },
  {
    id: "pg-cli-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\c [database_name]",
    description: "switch and connect to a different database within the active psql terminal session"
  },
  {
    id: "pg-cli-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\dt",
    description: "list all relational tables present in the currently selected database schema"
  },
  {
    id: "pg-cli-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\d [table_name]",
    description: "describe detailed table schema including columns, data types, constraints, and indexes"
  },
  {
    id: "pg-cli-6",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\du",
    description: "list all configured database roles, usernames, and granted administrative attributes"
  },
  {
    id: "pg-cli-7",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\dn",
    description: "list all logical schema namespaces and their owners in the current database"
  },
  {
    id: "pg-cli-8",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\timing",
    description: "toggle real-time execution timer measurement for executed SQL queries"
  },
  {
    id: "pg-cli-9",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\x",
    description: "toggle expanded vertical display formatting for wide query rows"
  },
  {
    id: "pg-cli-10",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "PSQL CLI & SHELL META-COMMANDS",
    sectionDescription: "Interactive terminal navigation, session configuration, and metadata inspection",
    command: "\\q",
    description: "exit and quit the interactive psql terminal shell"
  },
  {
    id: "pg-db-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA MANAGEMENT",
    sectionDescription: "Creating, configuring, and organizing database schemas and namespaces",
    command: "CREATE DATABASE [database_name] WITH ENCODING = 'UTF8';",
    description: "create a new PostgreSQL database with standard UTF-8 international character encoding"
  },
  {
    id: "pg-db-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA MANAGEMENT",
    sectionDescription: "Creating, configuring, and organizing database schemas and namespaces",
    command: "DROP DATABASE IF EXISTS [database_name];",
    description: "permanently delete a PostgreSQL database and all its schemas, tables, and records"
  },
  {
    id: "pg-db-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA MANAGEMENT",
    sectionDescription: "Creating, configuring, and organizing database schemas and namespaces",
    command: "CREATE SCHEMA [schema_name];",
    description: "create a new logical schema namespace within the current database"
  },
  {
    id: "pg-db-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA MANAGEMENT",
    sectionDescription: "Creating, configuring, and organizing database schemas and namespaces",
    command: "SET search_path TO [schema_name], public;",
    description: "set the active schema search path order for table resolution in the current session"
  },
  {
    id: "pg-db-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATABASE & SCHEMA MANAGEMENT",
    sectionDescription: "Creating, configuring, and organizing database schemas and namespaces",
    command: "DROP SCHEMA IF EXISTS [schema_name] CASCADE;",
    description: "drop schema and recursively delete all contained tables, views, and functions"
  },
  {
    id: "pg-table-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & DATA TYPES",
    sectionDescription: "Defining tables, SERIAL sequences, UUID keys, and unlogged storage",
    command: "CREATE TABLE [table_name] (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, metadata JSONB, created_at TIMESTAMPTZ DEFAULT NOW());",
    description: "create a table with auto-incrementing SERIAL primary key, JSONB, and timezone timestamp"
  },
  {
    id: "pg-table-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & DATA TYPES",
    sectionDescription: "Defining tables, SERIAL sequences, UUID keys, and unlogged storage",
    command: "CREATE TABLE [table_name] (id UUID DEFAULT gen_random_uuid() PRIMARY KEY, email TEXT UNIQUE NOT NULL);",
    description: "create a table using native UUID cryptographic primary keys with automated generation"
  },
  {
    id: "pg-table-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & DATA TYPES",
    sectionDescription: "Defining tables, SERIAL sequences, UUID keys, and unlogged storage",
    command: "CREATE UNLOGGED TABLE [table_name] (id SERIAL PRIMARY KEY, payload TEXT);",
    description: "create an unlogged table for high-speed writes that bypasses write-ahead logging (WAL)"
  },
  {
    id: "pg-table-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & DATA TYPES",
    sectionDescription: "Defining tables, SERIAL sequences, UUID keys, and unlogged storage",
    command: "CREATE TABLE [new_table] AS SELECT * FROM [existing_table] WHERE false;",
    description: "create a new empty table matching the column structure of an existing query"
  },
  {
    id: "pg-table-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & DATA TYPES",
    sectionDescription: "Defining tables, SERIAL sequences, UUID keys, and unlogged storage",
    command: "DROP TABLE IF EXISTS [table_name] CASCADE;",
    description: "delete table and automatically drop dependent foreign key constraints across other tables"
  },
  {
    id: "pg-table-6",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE DEFINITION & DATA TYPES",
    sectionDescription: "Defining tables, SERIAL sequences, UUID keys, and unlogged storage",
    command: "TRUNCATE TABLE [table_name] RESTART IDENTITY;",
    description: "empty all table rows quickly and reset associated auto-incrementing SERIAL sequence"
  },
  {
    id: "pg-dml-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATA INSERTION & ADVANCED UPSERT",
    sectionDescription: "Atomic row operations, returning generated values, and conflict handling",
    command: "INSERT INTO [table_name] ([col1], [col2]) VALUES ('val1', 'val2') RETURNING id;",
    description: "insert a record and immediately retrieve generated primary key ID without an extra query"
  },
  {
    id: "pg-dml-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATA INSERTION & ADVANCED UPSERT",
    sectionDescription: "Atomic row operations, returning generated values, and conflict handling",
    command: "INSERT INTO [table_name] ([col1], [col2]) VALUES ('a', 1), ('b', 2) RETURNING *;",
    description: "batch insert multiple rows and return all inserted column records in single transaction"
  },
  {
    id: "pg-dml-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATA INSERTION & ADVANCED UPSERT",
    sectionDescription: "Atomic row operations, returning generated values, and conflict handling",
    command: "INSERT INTO [table_name] (id, name) VALUES (1, 'demo') ON CONFLICT (id) DO NOTHING;",
    description: "insert record and gracefully ignore execution if a unique key or primary key conflict exists"
  },
  {
    id: "pg-dml-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATA INSERTION & ADVANCED UPSERT",
    sectionDescription: "Atomic row operations, returning generated values, and conflict handling",
    command: "INSERT INTO [table_name] (id, name, visits) VALUES (1, 'item', 1) ON CONFLICT (id) DO UPDATE SET visits = [table_name].visits + 1 RETURNING *;",
    description: "PostgreSQL UPSERT modifying existing row on key conflict and returning updated values"
  },
  {
    id: "pg-dml-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATA INSERTION & ADVANCED UPSERT",
    sectionDescription: "Atomic row operations, returning generated values, and conflict handling",
    command: "UPDATE [table_name] SET [col] = 'new_val' WHERE [id] = 1 RETURNING *;",
    description: "update record and immediately return the modified row values"
  },
  {
    id: "pg-dml-6",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "DATA INSERTION & ADVANCED UPSERT",
    sectionDescription: "Atomic row operations, returning generated values, and conflict handling",
    command: "DELETE FROM [table_name] WHERE [status] = 'expired' RETURNING id, name;",
    description: "delete records matching condition while returning removed identifiers for auditing"
  },
  {
    id: "pg-select-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ADVANCED QUERYING & FILTERING",
    sectionDescription: "DISTINCT ON grouping, ILIKE search, COALESCE handling, and pagination",
    command: "SELECT DISTINCT ON ([department_id]) * FROM [employees] ORDER BY [department_id], [salary] DESC;",
    description: "return only the highest salary employee per department using PostgreSQL DISTINCT ON"
  },
  {
    id: "pg-select-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ADVANCED QUERYING & FILTERING",
    sectionDescription: "DISTINCT ON grouping, ILIKE search, COALESCE handling, and pagination",
    command: "SELECT * FROM [table_name] WHERE [name] ILIKE '%search%';",
    description: "search text column with case-insensitive pattern matching using PostgreSQL ILIKE"
  },
  {
    id: "pg-select-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ADVANCED QUERYING & FILTERING",
    sectionDescription: "DISTINCT ON grouping, ILIKE search, COALESCE handling, and pagination",
    command: "SELECT COALESCE([nickname], [first_name], 'Anonymous') FROM [users];",
    description: "evaluate and return the first non-null expression from a list of column candidates"
  },
  {
    id: "pg-select-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ADVANCED QUERYING & FILTERING",
    sectionDescription: "DISTINCT ON grouping, ILIKE search, COALESCE handling, and pagination",
    command: "SELECT NULLIF([value1], [value2]);",
    description: "return NULL if two arguments are equal, otherwise return first argument value"
  },
  {
    id: "pg-select-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ADVANCED QUERYING & FILTERING",
    sectionDescription: "DISTINCT ON grouping, ILIKE search, COALESCE handling, and pagination",
    command: "SELECT * FROM [table_name] ORDER BY [id] LIMIT [count] OFFSET [offset];",
    description: "paginate database results specifying maximum returned row count and skip offset"
  },
  {
    id: "pg-json-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "JSON & JSONB OPERATIONS",
    sectionDescription: "Querying binary JSON documents, indexing keys, and updating nested attributes",
    command: "SELECT [jsonb_col]->>'email' FROM [users];",
    description: "extract a top-level JSON key value directly as native PostgreSQL text using the ->> operator"
  },
  {
    id: "pg-json-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "JSON & JSONB OPERATIONS",
    sectionDescription: "Querying binary JSON documents, indexing keys, and updating nested attributes",
    command: "SELECT * FROM [events] WHERE [metadata] @> '{\"status\": \"active\"}';",
    description: "query rows containing matching nested key-value pairs using the @> JSONB containment operator"
  },
  {
    id: "pg-json-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "JSON & JSONB OPERATIONS",
    sectionDescription: "Querying binary JSON documents, indexing keys, and updating nested attributes",
    command: "SELECT * FROM [orders] WHERE [details] ? 'tracking_number';",
    description: "check whether a specified key exists at the top level of a JSONB column using the ? operator"
  },
  {
    id: "pg-json-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "JSON & JSONB OPERATIONS",
    sectionDescription: "Querying binary JSON documents, indexing keys, and updating nested attributes",
    command: "SELECT jsonb_pretty([jsonb_col]) FROM [table_name];",
    description: "format and pretty-print JSONB data into structured, indented text"
  },
  {
    id: "pg-json-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "JSON & JSONB OPERATIONS",
    sectionDescription: "Querying binary JSON documents, indexing keys, and updating nested attributes",
    command: "UPDATE [table_name] SET [jsonb_col] = jsonb_set([jsonb_col], '{profile,tier}', '\"premium\"') WHERE [id] = 1;",
    description: "modify or insert a specific nested attribute path within an existing JSONB document"
  },
  {
    id: "pg-cte-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "COMMON TABLE EXPRESSIONS (CTE)",
    sectionDescription: "Creating modular subqueries, temporary result sets, and recursive tree traversals",
    command: "WITH regional_sales AS (SELECT region, SUM(amount) AS total FROM orders GROUP BY region) SELECT * FROM regional_sales WHERE total > 10000;",
    description: "define a temporary named result set using a Common Table Expression (WITH clause)"
  },
  {
    id: "pg-cte-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "COMMON TABLE EXPRESSIONS (CTE)",
    sectionDescription: "Creating modular subqueries, temporary result sets, and recursive tree traversals",
    command: "WITH RECURSIVE org AS (SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, e.manager_id FROM employees e INNER JOIN org o ON e.manager_id = o.id) SELECT * FROM org;",
    description: "traverse organizational hierarchies and graph structures recursively using WITH RECURSIVE"
  },
  {
    id: "pg-win-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "WINDOW FUNCTIONS & ANALYTICS",
    sectionDescription: "Row numbering, ranking across partitions, and historical lag calculations",
    command: "SELECT name, dept, salary, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rank FROM employees;",
    description: "assign a sequential 1-based row index to records grouped by department partitions"
  },
  {
    id: "pg-win-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "WINDOW FUNCTIONS & ANALYTICS",
    sectionDescription: "Row numbering, ranking across partitions, and historical lag calculations",
    command: "SELECT score, RANK() OVER (ORDER BY score DESC), DENSE_RANK() OVER (ORDER BY score DESC) FROM leaderboard;",
    description: "calculate rank with gaps alongside dense rank without gaps across ordered rows"
  },
  {
    id: "pg-win-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "WINDOW FUNCTIONS & ANALYTICS",
    sectionDescription: "Row numbering, ranking across partitions, and historical lag calculations",
    command: "SELECT date, revenue, LAG(revenue, 1) OVER (ORDER BY date) AS previous_day FROM daily_stats;",
    description: "access data from the preceding row without performing an expensive self-join using LAG()"
  },
  {
    id: "pg-win-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "WINDOW FUNCTIONS & ANALYTICS",
    sectionDescription: "Row numbering, ranking across partitions, and historical lag calculations",
    command: "SELECT date, revenue, LEAD(revenue, 1) OVER (ORDER BY date) AS next_day FROM daily_stats;",
    description: "inspect subsequent row data ahead of current record using LEAD() window function"
  },
  {
    id: "pg-agg-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATES & ARRAY OPERATIONS",
    sectionDescription: "String concatenation aggregation, array transformations, and unnesting",
    command: "SELECT department_id, STRING_AGG(employee_name, ', ' ORDER BY employee_name) FROM employees GROUP BY department_id;",
    description: "concatenate grouped string values into a formatted, sorted comma-separated text list"
  },
  {
    id: "pg-agg-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATES & ARRAY OPERATIONS",
    sectionDescription: "String concatenation aggregation, array transformations, and unnesting",
    command: "SELECT tag_category, ARRAY_AGG(tag_id) FROM tags GROUP BY tag_category;",
    description: "aggregate grouped values into a native PostgreSQL array structure"
  },
  {
    id: "pg-agg-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "AGGREGATES & ARRAY OPERATIONS",
    sectionDescription: "String concatenation aggregation, array transformations, and unnesting",
    command: "SELECT UNNEST(ARRAY['apple', 'banana', 'orange']);",
    description: "expand a PostgreSQL array into a set of separate individual rows"
  },
  {
    id: "pg-alter-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Schema migrations, modifying column constraints, and renaming entities",
    command: "ALTER TABLE [table_name] ADD COLUMN [column_name] VARCHAR(255) DEFAULT 'val';",
    description: "add a new column to an existing table schema with optional default value"
  },
  {
    id: "pg-alter-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Schema migrations, modifying column constraints, and renaming entities",
    command: "ALTER TABLE [table_name] DROP COLUMN [column_name];",
    description: "permanently delete a column and its stored data values from existing table"
  },
  {
    id: "pg-alter-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Schema migrations, modifying column constraints, and renaming entities",
    command: "ALTER TABLE [table_name] ALTER COLUMN [column_name] TYPE TEXT;",
    description: "alter and convert the underlying data type of an existing table column"
  },
  {
    id: "pg-alter-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Schema migrations, modifying column constraints, and renaming entities",
    command: "ALTER TABLE [table_name] ALTER COLUMN [column_name] SET NOT NULL;",
    description: "add a strict NOT NULL constraint on a column to prevent null value storage"
  },
  {
    id: "pg-alter-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "TABLE MODIFICATION (ALTER TABLE)",
    sectionDescription: "Schema migrations, modifying column constraints, and renaming entities",
    command: "ALTER TABLE [old_table] RENAME TO [new_table];",
    description: "rename an existing PostgreSQL table to a new identifier name"
  },
  {
    id: "pg-idx-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES, PERFORMANCE & VACUUM",
    sectionDescription: "Creating B-tree & GIN indexes, analyzing execution plans, and vacuuming tables",
    command: "CREATE INDEX [idx_name] ON [table_name] ([column_name]);",
    description: "create standard B-tree index on table column to accelerate filter lookups"
  },
  {
    id: "pg-idx-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES, PERFORMANCE & VACUUM",
    sectionDescription: "Creating B-tree & GIN indexes, analyzing execution plans, and vacuuming tables",
    command: "CREATE INDEX [idx_name] ON [table_name] USING GIN ([jsonb_column]);",
    description: "create Generalized Inverted Index (GIN) on JSONB column for rapid key search"
  },
  {
    id: "pg-idx-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES, PERFORMANCE & VACUUM",
    sectionDescription: "Creating B-tree & GIN indexes, analyzing execution plans, and vacuuming tables",
    command: "CREATE UNIQUE INDEX [idx_name] ON [table_name] ([column_name]);",
    description: "create unique constraint index enforcing non-repeating column values"
  },
  {
    id: "pg-idx-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES, PERFORMANCE & VACUUM",
    sectionDescription: "Creating B-tree & GIN indexes, analyzing execution plans, and vacuuming tables",
    command: "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM [table_name] WHERE [id] = 1;",
    description: "execute query and output actual runtime execution plan with cache buffer statistics"
  },
  {
    id: "pg-idx-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "INDEXES, PERFORMANCE & VACUUM",
    sectionDescription: "Creating B-tree & GIN indexes, analyzing execution plans, and vacuuming tables",
    command: "VACUUM (VERBOSE, ANALYZE) [table_name];",
    description: "reclaim dead tuple disk space, remove dead rows, and update optimizer statistics"
  },
  {
    id: "pg-role-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "CREATE ROLE [username] WITH LOGIN PASSWORD '[password]';",
    description: "create a new PostgreSQL user account with interactive login authentication enabled"
  },
  {
    id: "pg-role-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "GRANT ALL PRIVILEGES ON DATABASE [database_name] TO [username];",
    description: "grant complete administrative permissions on specified database to role"
  },
  {
    id: "pg-role-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO [username];",
    description: "grant full DML data read and write privileges on all schema tables to user"
  },
  {
    id: "pg-role-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO [username];",
    description: "configure automated read permissions for role on all tables created in the future"
  },
  {
    id: "pg-role-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "ALTER ROLE [username] WITH PASSWORD '[new_password]';",
    description: "update or reset the authentication login password for an existing database role"
  },
  {
    id: "pg-role-6",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "REVOKE ALL ON ALL TABLES IN SCHEMA public FROM [username];",
    description: "revoke and strip all table permissions in schema from specified user role"
  },
  {
    id: "pg-role-7",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "ROLES, USERS & PERMISSIONS",
    sectionDescription: "Managing cluster roles, configuring login passwords, and granting object access",
    command: "DROP ROLE IF EXISTS [username];",
    description: "delete and remove a role account from the PostgreSQL cluster catalog"
  },
  {
    id: "pg-backup-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "IMPORT, EXPORT & BACKUP",
    sectionDescription: "Importing CSV files, streaming data dumps, and restoring database archives",
    command: "\\copy [table_name] FROM '[file.csv]' WITH (FORMAT csv, HEADER true);",
    description: "client-side fast bulk import of a CSV data file directly into PostgreSQL table"
  },
  {
    id: "pg-backup-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "IMPORT, EXPORT & BACKUP",
    sectionDescription: "Importing CSV files, streaming data dumps, and restoring database archives",
    command: "\\copy (SELECT * FROM [table_name] WHERE [status] = 'active') TO '[export.csv]' WITH (FORMAT csv, HEADER true);",
    description: "export query output results directly into a formatted CSV file with column headers"
  },
  {
    id: "pg-backup-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "IMPORT, EXPORT & BACKUP",
    sectionDescription: "Importing CSV files, streaming data dumps, and restoring database archives",
    command: "pg_dump -U [user] -h [host] -Fc [database_name] > [backup.dump]",
    description: "export database backup into PostgreSQL custom compressed archive format"
  },
  {
    id: "pg-backup-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "IMPORT, EXPORT & BACKUP",
    sectionDescription: "Importing CSV files, streaming data dumps, and restoring database archives",
    command: "pg_restore -U [user] -d [database_name] -v [backup.dump]",
    description: "restore a PostgreSQL database from a pg_dump custom format archive with verbose output"
  },
  {
    id: "pg-backup-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "IMPORT, EXPORT & BACKUP",
    sectionDescription: "Importing CSV files, streaming data dumps, and restoring database archives",
    command: "pg_dumpall -U [user] -h [host] > [cluster_backup.sql]",
    description: "dump all databases and cluster global objects including roles and tablespaces"
  },
  {
    id: "pg-ext-1",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "EXTENSIONS & SYSTEM MONITORING",
    sectionDescription: "Enabling cryptographic modules, auditing connections, and terminating locks",
    command: "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";",
    description: "install extension providing functions for generating universally unique identifiers (UUIDs)"
  },
  {
    id: "pg-ext-2",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "EXTENSIONS & SYSTEM MONITORING",
    sectionDescription: "Enabling cryptographic modules, auditing connections, and terminating locks",
    command: "CREATE EXTENSION IF NOT EXISTS pgcrypto;",
    description: "enable cryptographic hashing and encryption functions like crypt and gen_salt"
  },
  {
    id: "pg-ext-3",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "EXTENSIONS & SYSTEM MONITORING",
    sectionDescription: "Enabling cryptographic modules, auditing connections, and terminating locks",
    command: "SELECT pid, usename, client_addr, state, query FROM pg_stat_activity WHERE state != 'idle';",
    description: "inspect currently running queries, client IP addresses, and active server connections"
  },
  {
    id: "pg-ext-4",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "EXTENSIONS & SYSTEM MONITORING",
    sectionDescription: "Enabling cryptographic modules, auditing connections, and terminating locks",
    command: "SELECT pg_terminate_backend([pid]);",
    description: "terminate a stuck, locked, or runaway database query process thread immediately"
  },
  {
    id: "pg-ext-5",
    category: "sql-postgresql",
    os: ["windows", "linux", "macos"],
    section: "EXTENSIONS & SYSTEM MONITORING",
    sectionDescription: "Enabling cryptographic modules, auditing connections, and terminating locks",
    command: "SELECT pg_size_pretty(pg_database_size('[database_name]'));",
    description: "report total disk space consumed by a database in human-readable MB or GB format"
  }
];

// Attach globally
window.COMMANDS_DATA = COMMANDS_DATA;
