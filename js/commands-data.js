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
,
  // ==========================================
  // PYTHON: PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)
  // ==========================================
  {
    id: "py-pip-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install [package_name]",
    description: "install the latest stable release of a package from the Python Package Index (PyPI)"
  },
  {
    id: "py-pip-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install [package_name]==[version]",
    description: "install an exact pinned release version of a package (e.g. requests==2.31.0)"
  },
  {
    id: "py-pip-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install \"[package_name]>=[version]\"",
    description: "install a package satisfying minimum compatible version constraint"
  },
  {
    id: "py-pip-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install --upgrade [package_name]",
    description: "upgrade an existing installed package to its newest available release on PyPI"
  },
  {
    id: "py-pip-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install --upgrade --force-reinstall [package_name]",
    description: "reinstall a package and all dependencies even if they are currently up to date"
  },
  {
    id: "py-pip-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install -r requirements.txt",
    description: "batch install all pinned project dependencies listed in a requirements file"
  },
  {
    id: "py-pip-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install --no-cache-dir [package_name]",
    description: "install package without saving wheel archive cache to disk (essential for minimal Docker images)"
  },
  {
    id: "py-pip-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install -e .",
    description: "install current project in editable development mode so code changes reflect instantly"
  },
  {
    id: "py-pip-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install git+https://github.com/[user]/[repo].git",
    description: "install package directly from a remote Git repository branch or commit tag"
  },
  {
    id: "py-pip-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install [package_name] --pre",
    description: "allow installation of alpha, beta, and development pre-release versions"
  },
  {
    id: "py-pip-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install --index-url [custom_url] [package_name]",
    description: "install package from a private corporate repository or custom PyPI mirror index"
  },
  {
    id: "py-pip-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP PACKAGE MANAGEMENT (INSTALLATION & UPGRADES)",
    sectionDescription: "Installing, upgrading, and version-pinning libraries from the Python Package Index",
    command: "pip install --trusted-host [host] -i [url] [package_name]",
    description: "install behind corporate proxy or internal mirror host bypassing SSL verification"
  },
  // ==========================================
  // PYTHON: PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP
  // ==========================================
  {
    id: "py-audit-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip list",
    description: "display all currently installed Python packages and their version numbers in formatted table"
  },
  {
    id: "py-audit-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip list --outdated",
    description: "list all installed packages that have newer version releases available on PyPI"
  },
  {
    id: "py-audit-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip freeze > requirements.txt",
    description: "export an exact snapshot of installed packages with locked versions to requirements.txt"
  },
  {
    id: "py-audit-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip show [package_name]",
    description: "display metadata for package including version, author, license, location, and dependencies"
  },
  {
    id: "py-audit-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip show -f [package_name]",
    description: "list all installed files, modules, and binary paths belonging to a specific package"
  },
  {
    id: "py-audit-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip check",
    description: "verify that installed packages have compatible dependencies and identify broken requirements"
  },
  {
    id: "py-audit-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip uninstall -y [package_name]",
    description: "uninstall package immediately without prompting for interactive confirmation"
  },
  {
    id: "py-audit-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip cache dir",
    description: "display the system filesystem path of pip's local HTTP and wheel download cache"
  },
  {
    id: "py-audit-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip cache list",
    description: "display list of all pre-built binary wheel archives cached locally on the machine"
  },
  {
    id: "py-audit-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip cache purge",
    description: "delete all cached wheel files and downloaded tarballs to reclaim disk space"
  },
  {
    id: "py-audit-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PIP INSPECTION, DEPENDENCY AUDIT & CLEANUP",
    sectionDescription: "Auditing dependencies, exporting requirement locks, checking conflicts, and cache management",
    command: "pip download -r requirements.txt -d ./wheels",
    description: "download wheel archives for dependencies into folder for air-gapped offline deployment"
  },
  // ==========================================
  // PYTHON: VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)
  // ==========================================
  {
    id: "py-venv-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "python -m venv .venv",
    description: "create an isolated local virtual environment directory using Python standard library"
  },
  {
    id: "py-venv-2",
    category: "python",
    os: ["linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "source .venv/bin/activate",
    description: "activate virtual environment in Bash, Zsh, or POSIX Unix terminal shell"
  },
  {
    id: "py-venv-3",
    category: "python",
    os: ["windows"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: ".\\.venv\\Scripts\\activate",
    description: "activate virtual environment in Windows PowerShell or Command Prompt"
  },
  {
    id: "py-venv-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "deactivate",
    description: "deactivate current virtual environment and restore default system Python shell"
  },
  {
    id: "py-venv-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "python -m venv --clear .venv",
    description: "wipe and recreate virtual environment folder cleanly from scratch"
  },
  {
    id: "py-venv-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "python -m venv --system-site-packages .venv",
    description: "create virtual environment with inherit access to global system site-packages"
  },
  {
    id: "py-venv-7",
    category: "python",
    os: ["linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "which python",
    description: "display exact filesystem executable path of active Python interpreter on Unix"
  },
  {
    id: "py-venv-8",
    category: "python",
    os: ["windows"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "where.exe python",
    description: "display all registered Python interpreter executable paths in Windows PATH"
  },
  {
    id: "py-venv-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "conda create -n [env_name] python=[version]",
    description: "create isolated Anaconda/Miniconda environment with specific Python version"
  },
  {
    id: "py-venv-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "conda activate [env_name]",
    description: "activate specified Anaconda/Miniconda virtual environment"
  },
  {
    id: "py-venv-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "conda deactivate",
    description: "deactivate active Conda environment and return to base system terminal"
  },
  {
    id: "py-venv-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "conda env list",
    description: "display list of all Conda virtual environments created on local system"
  },
  {
    id: "py-venv-13",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "VIRTUAL ENVIRONMENTS (VENV, VIRTUALENV & CONDA)",
    sectionDescription: "Creating and activating isolated Python runtimes to prevent dependency pollution",
    command: "conda env export > environment.yml",
    description: "export entire Conda environment configuration including native C-libraries to YAML"
  },
  // ==========================================
  // PYTHON: MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)
  // ==========================================
  {
    id: "py-pm-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "pipenv install [package_name]",
    description: "install package, add dependency entry to Pipfile, and lock hashes in Pipfile.lock"
  },
  {
    id: "py-pm-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "pipenv shell",
    description: "spawn a new interactive shell session activated within the Pipenv virtual environment"
  },
  {
    id: "py-pm-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry new [project_name]",
    description: "scaffold a modern Python package repository with standard pyproject.toml layout"
  },
  {
    id: "py-pm-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry init",
    description: "interactively configure and create pyproject.toml configuration in existing directory"
  },
  {
    id: "py-pm-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry add [package_name]",
    description: "add dependency to pyproject.toml, resolve graph, and install into Poetry virtualenv"
  },
  {
    id: "py-pm-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry add --group dev [package_name]",
    description: "add dependency designated strictly for development and testing environments"
  },
  {
    id: "py-pm-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry install",
    description: "install all exact dependencies and transitive packages recorded in poetry.lock"
  },
  {
    id: "py-pm-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry run python [script.py]",
    description: "execute script inside Poetry virtual environment without manual activation"
  },
  {
    id: "py-pm-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "poetry show --tree",
    description: "render hierarchical tree showing installed packages and their nested sub-dependencies"
  },
  {
    id: "py-pm-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "uv venv",
    description: "instantly create a virtual environment in milliseconds using the Rust-based uv tool"
  },
  {
    id: "py-pm-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "uv pip install -r requirements.txt",
    description: "install project requirements with 10-100x speedup as drop-in replacement for pip"
  },
  {
    id: "py-pm-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "MODERN PROJECT MANAGERS (POETRY, UV & PIPENV)",
    sectionDescription: "Next-generation dependency resolution, deterministic lockfiles, and Rust-accelerated tooling",
    command: "uv pip compile requirements.in -o requirements.txt",
    description: "compile high-level dependency declarations into pinned deterministic lockfile"
  },
  // ==========================================
  // PYTHON: RUNTIME EXECUTION & CLI FLAGS
  // ==========================================
  {
    id: "py-cli-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python [script.py]",
    description: "execute Python script file through the standard CPython interpreter"
  },
  {
    id: "py-cli-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -m [module_name]",
    description: "run installed library module as script by executing its __main__.py entrypoint"
  },
  {
    id: "py-cli-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -c \"[python_code]\"",
    description: "execute inline Python code statement directly from terminal without creating a script file"
  },
  {
    id: "py-cli-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -i [script.py]",
    description: "execute script and remain in interactive REPL session allowing variable and state inspection"
  },
  {
    id: "py-cli-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -V",
    description: "display version number of active Python interpreter (equivalent to python --version)"
  },
  {
    id: "py-cli-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -v [script.py]",
    description: "run script in verbose mode tracing all imported module files and locations during runtime"
  },
  {
    id: "py-cli-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -O [script.py]",
    description: "run script with basic bytecode optimization (removes assert statements and sets __debug__ to False)"
  },
  {
    id: "py-cli-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -OO [script.py]",
    description: "run script with full optimization stripping assert statements as well as docstrings"
  },
  {
    id: "py-cli-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -u [script.py]",
    description: "force unbuffered binary stdout and stderr output (essential for real-time Docker container logs)"
  },
  {
    id: "py-cli-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -W ignore [script.py]",
    description: "run script suppressing all deprecation warnings, syntax warnings, and runtime notices"
  },
  {
    id: "py-cli-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -X dev [script.py]",
    description: "enable Python Development Mode activating memory debug hooks and asyncio checks"
  },
  {
    id: "py-cli-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "RUNTIME EXECUTION & CLI FLAGS",
    sectionDescription: "Invoking Python interpreter scripts, inline expressions, interactive shells, and runtime flags",
    command: "python -X faulthandler [script.py]",
    description: "dump complete Python tracebacks automatically on segmentation fault or fatal crash"
  },
  // ==========================================
  // PYTHON: BUILT-IN CLI UTILITIES & MODULES
  // ==========================================
  {
    id: "py-tool-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m http.server [port]",
    description: "start instant zero-configuration local HTTP server serving current directory (default port 8000)"
  },
  {
    id: "py-tool-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m http.server [port] --bind 127.0.0.1",
    description: "start local HTTP server bound exclusively to localhost preventing local network exposure"
  },
  {
    id: "py-tool-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m json.tool [input.json] [output.json]",
    description: "validate, reformat, and pretty-print JSON files with 4-space indent from command line"
  },
  {
    id: "py-tool-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "curl -s [url] | python -m json.tool",
    description: "pipe raw REST API JSON response directly into pretty-printer for terminal formatting"
  },
  {
    id: "py-tool-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m timeit -s \"[setup_code]\" \"[code_snippet]\"",
    description: "benchmark execution speed of Python snippet with statistical repetitions and timing"
  },
  {
    id: "py-tool-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m zipfile -c [archive.zip] [folder/]",
    description: "compress directory and files into a standard ZIP archive from terminal without external tools"
  },
  {
    id: "py-tool-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m zipfile -e [archive.zip] [output_dir]",
    description: "extract contents of ZIP archive into specified destination directory"
  },
  {
    id: "py-tool-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m tarfile -c [archive.tar.gz] [folder/]",
    description: "compress directory into gzip-compressed tarball archive directly from command line"
  },
  {
    id: "py-tool-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m tarfile -e [archive.tar.gz] [output_dir]",
    description: "extract tarball archive contents into designated target destination directory"
  },
  {
    id: "py-tool-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m site",
    description: "print interpreter module search paths (sys.path) and user site-packages directory locations"
  },
  {
    id: "py-tool-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m calendar [year]",
    description: "render complete 12-month calendar grid in terminal output for specified calendar year"
  },
  {
    id: "py-tool-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "BUILT-IN CLI UTILITIES & MODULES",
    sectionDescription: "Instant web servers, JSON formatters, benchmarks, and archive tools shipped with Python",
    command: "python -m webbrowser -t \"[url]\"",
    description: "launch default web browser and open target URL in a new browser tab from command line"
  },
  // ==========================================
  // PYTHON: DEBUGGING, PROFILING & BYTECODE
  // ==========================================
  {
    id: "py-dbg-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m pdb [script.py]",
    description: "launch Python Interactive Debugger from the entrypoint of script for step-by-step debugging"
  },
  {
    id: "py-dbg-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m pdb -c continue [script.py]",
    description: "run script under pdb and pause into interactive debugger only upon uncaught exception"
  },
  {
    id: "py-dbg-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m cProfile -s time [script.py]",
    description: "profile script execution time sorted by internal time spent inside individual functions"
  },
  {
    id: "py-dbg-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m cProfile -s cumulative [script.py]",
    description: "profile execution time sorted by cumulative time spent including called sub-functions"
  },
  {
    id: "py-dbg-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m cProfile -o profile.pstats [script.py]",
    description: "export profiling metrics into binary pstats file for SnakeViz or gprof2dot visualization"
  },
  {
    id: "py-dbg-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m trace --trace [script.py]",
    description: "execute script while printing every executed line of code to terminal in real-time"
  },
  {
    id: "py-dbg-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m trace --count [script.py]",
    description: "record exact execution frequency count for every source line to perform coverage analysis"
  },
  {
    id: "py-dbg-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m py_compile [script.py]",
    description: "compile Python source file into .pyc bytecode to detect syntax errors without running"
  },
  {
    id: "py-dbg-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m compileall [directory/]",
    description: "recursively compile all Python files in directory tree into bytecode in __pycache__"
  },
  {
    id: "py-dbg-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & BYTECODE",
    sectionDescription: "Interactive step debugging, bottleneck profiling, execution tracing, and bytecode inspection",
    command: "python -m dis [script.py]",
    description: "disassemble script into low-level CPython bytecode instructions, opcodes, and stack operations"
  },
  // ==========================================
  // PYTHON: TESTING FRAMEWORKS (PYTEST & UNITTEST)
  // ==========================================
  {
    id: "py-test-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest",
    description: "automatically discover and execute all unit and integration test suites in current project"
  },
  {
    id: "py-test-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest -v",
    description: "run pytest in verbose mode displaying individual test function names and pass/fail status"
  },
  {
    id: "py-test-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest -s",
    description: "disable stdout and stderr capture so print statements and log outputs appear live"
  },
  {
    id: "py-test-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest -k \"[expression]\"",
    description: "filter and execute only test functions matching keyword expression or function substring"
  },
  {
    id: "py-test-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest -m \"[marker]\"",
    description: "run only test cases decorated with specific custom marker (e.g. smoke, integration, slow)"
  },
  {
    id: "py-test-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest -x",
    description: "halt pytest test runner execution immediately upon encountering the very first test failure"
  },
  {
    id: "py-test-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest --maxfail=[n]",
    description: "stop test suite execution after reaching specified maximum number of failed tests"
  },
  {
    id: "py-test-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest --lf",
    description: "re-run only test cases that failed in the immediate preceding test execution session"
  },
  {
    id: "py-test-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest --cov=[package_name]",
    description: "measure and report statement test coverage percentage across specified package"
  },
  {
    id: "py-test-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "pytest --cov=[package_name] --cov-report=html",
    description: "generate interactive visual HTML test coverage report into htmlcov/ directory"
  },
  {
    id: "py-test-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "python -m unittest discover -s tests -p \"test_*.py\"",
    description: "discover and run all unit test classes using built-in standard library unittest runner"
  },
  {
    id: "py-test-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "python -m unittest [tests/test_api.py]",
    description: "run tests inside a single specific test file using built-in unittest module"
  },
  {
    id: "py-test-13",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "TESTING FRAMEWORKS (PYTEST & UNITTEST)",
    sectionDescription: "Automated test discovery, parallel execution, assertions, and code coverage measurement",
    command: "python -m doctest -v [script.py]",
    description: "discover and execute interactive docstring unit tests embedded inside module functions"
  },
  // ==========================================
  // PYTHON: CODE QUALITY, LINTING & FORMATTING
  // ==========================================
  {
    id: "py-qual-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "ruff check .",
    description: "run blazing-fast Rust-based linter across entire codebase to detect errors and anti-patterns"
  },
  {
    id: "py-qual-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "ruff check --fix .",
    description: "automatically apply safe linting fixes and code optimizations across repository"
  },
  {
    id: "py-qual-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "ruff format .",
    description: "format entire codebase adhering to Black-compatible formatting rules with instant Rust speed"
  },
  {
    id: "py-qual-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "black [path/]",
    description: "uncompromisingly format Python source files according to Black standard styling rules"
  },
  {
    id: "py-qual-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "black --check --diff [path/]",
    description: "check if files comply with Black formatting and preview the diff without writing changes"
  },
  {
    id: "py-qual-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "flake8 [path/]",
    description: "analyze Python codebase for PEP 8 styling violations, syntax errors, and complexity issues"
  },
  {
    id: "py-qual-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "flake8 --max-line-length=100 [path/]",
    description: "run flake8 linter with customized maximum allowed line length limit"
  },
  {
    id: "py-qual-8",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "mypy [path/]",
    description: "perform static type analysis verifying PEP 484 type annotations across Python files"
  },
  {
    id: "py-qual-9",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "mypy --strict [path/]",
    description: "run static type checking with strict type flags enabled disallowing untyped definitions"
  },
  {
    id: "py-qual-10",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "isort [path/]",
    description: "sort and organize import statements alphabetically and grouped by standard library and third party"
  },
  {
    id: "py-qual-11",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "bandit -r [path/]",
    description: "recursively scan codebase for common security vulnerabilities, weak hashes, and injection flaws"
  },
  {
    id: "py-qual-12",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "CODE QUALITY, LINTING & FORMATTING",
    sectionDescription: "Enforcing PEP 8 styling, static type checking, automated code formatting, and security audits",
    command: "pre-commit run --all-files",
    description: "manually execute all configured Git pre-commit verification hooks across every project file"
  },
  // ==========================================
  // PYTHON: PACKAGING, WHEELS & PYPI PUBLISHING
  // ==========================================
  {
    id: "py-pkg-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, validating package manifests, and publishing to PyPI",
    command: "python -m pip install --upgrade build twine",
    description: "install official PyPA package build engine and secure upload distribution tools"
  },
  {
    id: "py-pkg-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, validating package manifests, and publishing to PyPI",
    command: "python -m build",
    description: "build both source distribution (.tar.gz) and binary wheel (.whl) packages into dist/ folder"
  },
  {
    id: "py-pkg-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, validating package manifests, and publishing to PyPI",
    command: "twine check dist/*",
    description: "validate package metadata and verify that README markdown renders properly for PyPI"
  },
  {
    id: "py-pkg-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, validating package manifests, and publishing to PyPI",
    command: "twine upload dist/*",
    description: "upload built binary wheels and source packages to the official Python Package Index (PyPI)"
  },
  {
    id: "py-pkg-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, vintage package manifests, and publishing to PyPI",
    command: "twine upload --repository testpypi dist/*",
    description: "publish package to TestPyPI sandbox repository to verify distribution before production release"
  },
  {
    id: "py-pkg-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, validating package manifests, and publishing to PyPI",
    command: "python setup.py sdist bdist_wheel",
    description: "legacy build command to produce source distribution and wheel archives for setup.py projects"
  },
  {
    id: "py-pkg-7",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING, WHEELS & PYPI PUBLISHING",
    sectionDescription: "Building distributable wheel archives, validating package manifests, and publishing to PyPI",
    command: "pip wheel --no-deps -w ./wheels -r requirements.txt",
    description: "compile binary wheel archives for all requirements without installing them locally"
  },
  // ==========================================
  // PYTHON: INTERACTIVE REPL & JUPYTER ECOSYSTEM
  // ==========================================
  {
    id: "py-repl-1",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "INTERACTIVE REPL & JUPYTER ECOSYSTEM",
    sectionDescription: "Interactive Python exploration, IPython enhancements, and Jupyter notebook management",
    command: "python",
    description: "launch standard interactive Python REPL shell for instant prototyping and testing"
  },
  {
    id: "py-repl-2",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "INTERACTIVE REPL & JUPYTER ECOSYSTEM",
    sectionDescription: "Interactive Python exploration, IPython enhancements, and Jupyter notebook management",
    command: "python -m IPython",
    description: "launch enhanced IPython shell with syntax highlighting, autocomplete, and magic commands"
  },
  {
    id: "py-repl-3",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "INTERACTIVE REPL & JUPYTER ECOSYSTEM",
    sectionDescription: "Interactive Python exploration, IPython enhancements, and Jupyter notebook management",
    command: "jupyter notebook",
    description: "launch local Jupyter Notebook server and open interactive web workspace in default browser"
  },
  {
    id: "py-repl-4",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "INTERACTIVE REPL & JUPYTER ECOSYSTEM",
    sectionDescription: "Interactive Python exploration, IPython enhancements, and Jupyter notebook management",
    command: "jupyter lab",
    description: "launch modern extensible JupyterLab workspace environment in default browser"
  },
  {
    id: "py-repl-5",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "INTERACTIVE REPL & JUPYTER ECOSYSTEM",
    sectionDescription: "Interactive Python exploration, IPython enhancements, and Jupyter notebook management",
    command: "jupyter nbconvert --to script [notebook.ipynb]",
    description: "convert interactive Jupyter notebook (.ipynb) into clean standalone Python script (.py)"
  },
  {
    id: "py-repl-6",
    category: "python",
    os: ["windows", "linux", "macos"],
    section: "INTERACTIVE REPL & JUPYTER ECOSYSTEM",
    sectionDescription: "Interactive Python exploration, IPython enhancements, and Jupyter notebook management",
    command: "jupyter nbconvert --to html [notebook.ipynb]",
    description: "export Jupyter notebook with interactive cell outputs and charts into standalone HTML page"
  }
,
  // ==========================================
  // NODE.JS: NPM PACKAGE INSTALLATION & DEPENDENCIES
  // ==========================================
  {
    id: "node-npm-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm init -y",
    description: "scaffold a new Node.js project instantly with default package.json values"
  },
  {
    id: "node-npm-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm init",
    description: "interactively configure package.json setting name, version, description, and author"
  },
  {
    id: "node-npm-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install [package_name]",
    description: "install package from npm registry and add to production dependencies in package.json"
  },
  {
    id: "node-npm-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install -D [package_name]",
    description: "install package strictly as a development dependency in devDependencies (e.g. nodemon, typescript)"
  },
  {
    id: "node-npm-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install -g [package_name]",
    description: "install package globally on system path to use as a global terminal command line tool"
  },
  {
    id: "node-npm-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install [package_name]@[version]",
    description: "install an exact specified semantic version or distribution tag of a package"
  },
  {
    id: "node-npm-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install [package_name]@latest",
    description: "install or update package to the newest stable release published on npm registry"
  },
  {
    id: "node-npm-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install --save-exact [package_name]",
    description: "install package and save exact pinned version without adding ^ or ~ semver prefix"
  },
  {
    id: "node-npm-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install --legacy-peer-deps",
    description: "bypass peer dependency conflicts and install packages ignoring strict peer requirement trees"
  },
  {
    id: "node-npm-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install --force",
    description: "force npm to fetch remote resources and overwrite existing installed dependencies"
  },
  {
    id: "node-npm-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install --no-optional",
    description: "skip installation of optional dependencies to speed up install times and minimize container size"
  },
  {
    id: "node-npm-12",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM PACKAGE INSTALLATION & DEPENDENCIES",
    sectionDescription: "Initializing projects, installing libraries, and managing package dependencies",
    command: "npm install [user]/[repo]",
    description: "install package source code directly from a GitHub repository branch or commit hash"
  },
  // ==========================================
  // NODE.JS: NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS
  // ==========================================
  {
    id: "node-audit-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm list",
    description: "display a hierarchical tree of all installed packages and dependencies in node_modules"
  },
  {
    id: "node-audit-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm list --depth=0",
    description: "display only top-level project dependencies without printing nested sub-dependencies"
  },
  {
    id: "node-audit-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm list -g --depth=0",
    description: "display all globally installed packages on the system with their installed versions"
  },
  {
    id: "node-audit-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm outdated",
    description: "check registry to inspect which installed packages have newer versions available"
  },
  {
    id: "node-audit-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm update",
    description: "update all dependencies to the highest version permitted by package.json semver constraints"
  },
  {
    id: "node-audit-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm update [package_name]",
    description: "update a single specified package to its latest semver-compatible release"
  },
  {
    id: "node-audit-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm uninstall [package_name]",
    description: "remove package from node_modules, package.json dependencies, and package-lock.json"
  },
  {
    id: "node-audit-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm uninstall -g [package_name]",
    description: "uninstall globally installed package binary from the operating system"
  },
  {
    id: "node-audit-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm audit",
    description: "scan project dependency tree for known security vulnerabilities and generate advisory report"
  },
  {
    id: "node-audit-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm audit fix",
    description: "automatically install compatible semver updates to fix identified security vulnerabilities"
  },
  {
    id: "node-audit-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm audit fix --force",
    description: "aggressively install major version upgrades to resolve deep vulnerabilities (may introduce breaking changes)"
  },
  {
    id: "node-audit-12",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm ci",
    description: "clean install exact locked dependencies from package-lock.json (standard for CI/CD and Docker builds)"
  },
  {
    id: "node-audit-13",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm cache clean --force",
    description: "delete all data from npm local package cache directory to reclaim storage"
  },
  {
    id: "node-audit-14",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPM AUDIT, DEPENDENCY INSPECTION & SCRIPTS",
    sectionDescription: "Inspecting dependency trees, checking outdated modules, auditing vulnerabilities, and clean CI installs",
    command: "npm cache verify",
    description: "verify integrity of npm cache data, garbage collect extraneous data, and validate index"
  },
  // ==========================================
  // NODE.JS: NPX RUNTIME & ON-DEMAND EXECUTION
  // ==========================================
  {
    id: "node-npx-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx [package_name]",
    description: "fetch, execute, and discard a CLI package binary on demand without saving to node_modules"
  },
  {
    id: "node-npx-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx --no-install [command]",
    description: "enforce execution of locally installed project binary only and fail if not installed"
  },
  {
    id: "node-npx-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx -p [package_name] [command]",
    description: "execute specific binary command exposed by an on-demand downloaded npm package"
  },
  {
    id: "node-npx-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx create-next-app@latest [app_name]",
    description: "scaffold a complete modern Next.js web application with TypeScript, Tailwind CSS, and App Router"
  },
  {
    id: "node-npx-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx tsx [script.ts]",
    description: "execute TypeScript files directly in Node.js runtime without ahead-of-time compilation"
  },
  {
    id: "node-npx-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx nodemon [script.js]",
    description: "launch Node.js application with automatic process restart upon detecting source file changes"
  },
  {
    id: "node-npx-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx rimraf [folder_name]",
    description: "cross-platform recursive directory deletion utility (works reliably across Windows, Linux, and macOS)"
  },
  {
    id: "node-npx-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx kill-port [port]",
    description: "terminate any process holding a specific local TCP port (e.g. npx kill-port 3000)"
  },
  {
    id: "node-npx-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx prettier --write .",
    description: "execute Prettier code formatter across all repository files without permanent installation"
  },
  {
    id: "node-npx-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NPX RUNTIME & ON-DEMAND EXECUTION",
    sectionDescription: "Executing command-line binaries on demand without permanent local or global installation",
    command: "npx npm-check-updates -u",
    description: "upgrade all package.json dependencies to their latest major releases bypassing semver ranges"
  },
  // ==========================================
  // NODE.JS: NODE.JS CLI RUNTIME FLAGS & EXECUTION
  // ==========================================
  {
    id: "node-cli-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node [script.js]",
    description: "execute JavaScript file sequentially through the Node.js V8 runtime engine"
  },
  {
    id: "node-cli-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node -e \"[javascript_code]\"",
    description: "evaluate inline JavaScript code string directly from terminal without saving a file"
  },
  {
    id: "node-cli-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node -p \"[javascript_code]\"",
    description: "evaluate JavaScript expression and print the returned value directly to terminal stdout"
  },
  {
    id: "node-cli-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node -v",
    description: "print installed Node.js runtime version number (equivalent to node --version)"
  },
  {
    id: "node-cli-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --watch [script.js]",
    description: "run script with native built-in file watcher and auto-restart on file edits (Node.js 18+)"
  },
  {
    id: "node-cli-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --env-file=.env [script.js]",
    description: "natively load environment variables from .env file into process.env without dotenv (Node.js 20+)"
  },
  {
    id: "node-cli-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --max-old-space-size=[megabytes] [script.js]",
    description: "increase V8 heap memory limit ceiling (e.g. --max-old-space-size=4096 for 4GB heap)"
  },
  {
    id: "node-cli-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --check [script.js]",
    description: "verify syntax and parse script for errors without executing any of the code"
  },
  {
    id: "node-cli-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --trace-uncaught [script.js]",
    description: "print full stack trace identifying exact origin point of uncaught exception"
  },
  {
    id: "node-cli-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --trace-warnings [script.js]",
    description: "print full stack traces for process runtime warnings and deprecation alerts"
  },
  {
    id: "node-cli-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --enable-source-maps [script.js]",
    description: "enable native source map resolution for accurate stack traces in compiled/bundled code"
  },
  {
    id: "node-cli-12",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS CLI RUNTIME FLAGS & EXECUTION",
    sectionDescription: "Invoking the V8 engine, evaluating expressions, watch mode, memory management, and runtime flags",
    command: "node --experimental-vm-modules [script.js]",
    description: "enable experimental ECMAScript module support inside the Node.js VM context"
  },
  // ==========================================
  // NODE.JS: DEBUGGING, PROFILING & PERFORMANCE AUDIT
  // ==========================================
  {
    id: "node-dbg-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --inspect [script.js]",
    description: "enable V8 inspector agent on 127.0.0.1:9229 for remote debugging via Chrome DevTools or VS Code"
  },
  {
    id: "node-dbg-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --inspect-brk [script.js]",
    description: "launch inspector and pause execution at first line of script awaiting debugger connection"
  },
  {
    id: "node-dbg-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --inspect=0.0.0.0:9229 [script.js]",
    description: "bind debugger to all network interfaces allowing remote debugging across Docker containers"
  },
  {
    id: "node-dbg-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --prof [script.js]",
    description: "generate V8 execution CPU profile log file (isolate-*.log) for performance bottleneck analysis"
  },
  {
    id: "node-dbg-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --prof-process isolate-*.log > processed.txt",
    description: "parse raw V8 profiling log into human-readable text report showing function tick frequencies"
  },
  {
    id: "node-dbg-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --cpu-prof [script.js]",
    description: "generate .cpuprofile file natively importable into Chrome DevTools Performance panel"
  },
  {
    id: "node-dbg-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --heap-prof [script.js]",
    description: "generate V8 heap allocation sampling profile upon process exit to diagnose memory leaks"
  },
  {
    id: "node-dbg-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --trace-gc [script.js]",
    description: "print every V8 garbage collection event with memory space reclamation to terminal stdout"
  },
  {
    id: "node-dbg-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "DEBUGGING, PROFILING & PERFORMANCE AUDIT",
    sectionDescription: "V8 inspector agent, Chrome DevTools debugging, CPU profiling, heap snapshots, and GC telemetry",
    command: "node --expose-gc -e \"gc()\"",
    description: "expose V8 engine manual garbage collection function to JavaScript runtime code"
  },
  // ==========================================
  // NODE.JS: NODE.JS INTERACTIVE REPL COMMANDS
  // ==========================================
  {
    id: "node-repl-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: "node",
    description: "launch interactive Node.js REPL prompt for live JavaScript code evaluation"
  },
  {
    id: "node-repl-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".help",
    description: "print help menu showing all built-in REPL commands and interactive keyboard shortcuts"
  },
  {
    id: "node-repl-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".break",
    description: "break out of multiline input buffer or abort an incomplete expression in REPL"
  },
  {
    id: "node-repl-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".clear",
    description: "reset the REPL context object and clear multiline expression buffer"
  },
  {
    id: "node-repl-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".save [file_path]",
    description: "save all expressions and commands evaluated in current REPL session into a .js file"
  },
  {
    id: "node-repl-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".load [file_path]",
    description: "load and execute JavaScript file directly into active REPL session namespace"
  },
  {
    id: "node-repl-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".editor",
    description: "enter multiline editor mode allowing structured function typing (press Ctrl+D to execute)"
  },
  {
    id: "node-repl-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE.JS INTERACTIVE REPL COMMANDS",
    sectionDescription: "Interactive JavaScript exploration, session persistence, and built-in REPL dot-commands",
    command: ".exit",
    description: "exit interactive Node.js REPL session and return to system command line"
  },
  // ==========================================
  // NODE.JS: PROCESS & CLUSTER MANAGEMENT (PM2)
  // ==========================================
  {
    id: "node-pm2-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "npm install -g pm2",
    description: "install PM2 production process manager globally on the system"
  },
  {
    id: "node-pm2-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 start [app.js] --name [app_name]",
    description: "start Node.js application as a daemonized background process managed by PM2"
  },
  {
    id: "node-pm2-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 start [app.js] -i max",
    description: "launch application in cluster mode load-balanced across all available CPU cores"
  },
  {
    id: "node-pm2-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 list",
    description: "display status overview table of all managed processes, CPU usage, memory, and status"
  },
  {
    id: "node-pm2-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 logs [app_name]",
    description: "stream combined stdout and stderr log outputs for specified application in real-time"
  },
  {
    id: "node-pm2-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 logs --lines 100",
    description: "display the last 100 log lines across all managed background processes"
  },
  {
    id: "node-pm2-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 restart [app_name]",
    description: "restart specified running application process thread immediately"
  },
  {
    id: "node-pm2-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 reload all",
    description: "execute zero-downtime rolling reload across all clustered worker instances"
  },
  {
    id: "node-pm2-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 stop [app_name]",
    description: "stop application execution while keeping process configuration registered in PM2"
  },
  {
    id: "node-pm2-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 delete [app_name]",
    description: "stop process and remove its configuration completely from PM2 active registry"
  },
  {
    id: "node-pm2-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 monit",
    description: "open visual terminal dashboard monitoring real-time CPU, RAM, and event loop metrics"
  },
  {
    id: "node-pm2-12",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 save",
    description: "save current active process list snapshot to persist applications across server reboots"
  },
  {
    id: "node-pm2-13",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PROCESS & CLUSTER MANAGEMENT (PM2)",
    sectionDescription: "Daemonizing background services, cluster load-balancing, zero-downtime reloads, and logging",
    command: "pm2 startup",
    description: "generate and configure OS system service boot script to revive PM2 on server restart"
  },
  // ==========================================
  // NODE.JS: NODE VERSION MANAGEMENT (NVM & FNM)
  // ==========================================
  {
    id: "node-nvm-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm install [version]",
    description: "download and install specified Node.js version release (e.g. nvm install 20)"
  },
  {
    id: "node-nvm-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm install --lts",
    description: "download and install the latest Long Term Support (LTS) version of Node.js"
  },
  {
    id: "node-nvm-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm use [version]",
    description: "switch active Node.js interpreter version in current terminal session"
  },
  {
    id: "node-nvm-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm alias default [version]",
    description: "set default Node.js version to automatically load across all new terminal windows"
  },
  {
    id: "node-nvm-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm list",
    description: "display all Node.js versions currently installed on local machine (alias: nvm ls)"
  },
  {
    id: "node-nvm-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm ls-remote --lts",
    description: "query remote registry for all available Long Term Support versions released by Node.js team"
  },
  {
    id: "node-nvm-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm uninstall [version]",
    description: "remove a previously downloaded Node.js version and its binaries from local storage"
  },
  {
    id: "node-nvm-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "nvm which [version]",
    description: "display full filesystem binary path to Node.js executable for specified version"
  },
  {
    id: "node-nvm-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "fnm install [version]",
    description: "install Node.js version using ultra-fast Rust-based Fast Node Manager (fnm)"
  },
  {
    id: "node-nvm-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "fnm use [version]",
    description: "switch active Node.js version with sub-millisecond latency using fnm"
  },
  {
    id: "node-nvm-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "NODE VERSION MANAGEMENT (NVM & FNM)",
    sectionDescription: "Installing, switching, and managing multiple concurrent Node.js runtime versions",
    command: "fnm default [version]",
    description: "set persistent system default Node.js version inside fnm configuration"
  },
  // ==========================================
  // NODE.JS: MODERN PACKAGE MANAGERS (PNPM & YARN)
  // ==========================================
  {
    id: "node-alt-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "pnpm install",
    description: "install dependencies using hard links saving up to 70% disk space through global content-addressable store"
  },
  {
    id: "node-alt-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "pnpm add [package_name]",
    description: "install package and record into production dependencies in pnpm project"
  },
  {
    id: "node-alt-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "pnpm add -D [package_name]",
    description: "install package as development dependency in devDependencies using pnpm"
  },
  {
    id: "node-alt-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "pnpm remove [package_name]",
    description: "uninstall package and clean up hard links from pnpm workspace"
  },
  {
    id: "node-alt-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "pnpm dlx [package_name]",
    description: "fetch and execute CLI package binary on demand without installing it (pnpm equivalent of npx)"
  },
  {
    id: "node-alt-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "pnpm update --interactive --latest",
    description: "launch interactive terminal UI to inspect and choose packages to upgrade to newest versions"
  },
  {
    id: "node-alt-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "yarn install",
    description: "install all dependencies locked in yarn.lock using Yarn package manager"
  },
  {
    id: "node-alt-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "yarn add [package_name]",
    description: "add package to dependencies and update yarn.lock hash entries"
  },
  {
    id: "node-alt-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "yarn add --dev [package_name]",
    description: "add package to devDependencies using Yarn"
  },
  {
    id: "node-alt-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "yarn dlx [package_name]",
    description: "execute one-off package binary without modifying project dependencies in Yarn v2+"
  },
  {
    id: "node-alt-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "MODERN PACKAGE MANAGERS (PNPM & YARN)",
    sectionDescription: "Disk-efficient content-addressable storage, strict dependency resolution, and workspace tooling",
    command: "corepack enable",
    description: "activate native Node.js Corepack bridge for managing pnpm and yarn without global npm installs"
  },
  // ==========================================
  // NODE.JS: TESTING, LINTING & BUILD AUTOMATION
  // ==========================================
  {
    id: "node-test-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "node --test",
    description: "discover and run unit tests natively using built-in Node.js test runner without extra libraries (Node 18+)"
  },
  {
    id: "node-test-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "node --test \"tests/**/*.test.js\"",
    description: "execute matching test files with native test runner using glob pattern"
  },
  {
    id: "node-test-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx jest",
    description: "execute Jest testing framework test runner across project test suites"
  },
  {
    id: "node-test-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx jest --watch",
    description: "run Jest in interactive watch mode re-running tests related to changed source files"
  },
  {
    id: "node-test-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx jest --coverage",
    description: "run test suites and generate comprehensive code coverage report in terminal and coverage/"
  },
  {
    id: "node-test-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx vitest",
    description: "execute modern Vite-powered unit test runner with instant HMR and multithreading"
  },
  {
    id: "node-test-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx eslint .",
    description: "analyze all JavaScript and TypeScript source files for syntax errors and coding style violations"
  },
  {
    id: "node-test-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx eslint . --fix",
    description: "automatically apply safe fixes for code style and formatting violations across project"
  },
  {
    id: "node-test-9",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npx tsc --noEmit",
    description: "run TypeScript compiler static type analysis across project without emitting compiled .js files"
  },
  {
    id: "node-test-10",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npm run [script_name]",
    description: "execute custom automation script defined under the scripts property in package.json"
  },
  {
    id: "node-test-11",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npm test",
    description: "shorthand command to run test command defined in package.json scripts"
  },
  {
    id: "node-test-12",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "TESTING, LINTING & BUILD AUTOMATION",
    sectionDescription: "Native Node test runner, Jest/Vitest frameworks, ESLint code standards, and TypeScript checks",
    command: "npm start",
    description: "shorthand command to execute entrypoint start command defined in package.json scripts"
  },
  // ==========================================
  // NODE.JS: PACKAGING & REGISTRY PUBLISHING
  // ==========================================
  {
    id: "node-pub-1",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm pack",
    description: "create a distribution tarball archive (.tgz) of package exactly as it would be published to npm"
  },
  {
    id: "node-pub-2",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm publish",
    description: "publish package distribution archive to the official public npm registry"
  },
  {
    id: "node-pub-3",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm publish --access public",
    description: "publish scoped organization package (@scope/name) with public registry accessibility"
  },
  {
    id: "node-pub-4",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm publish --tag beta",
    description: "publish pre-release package version tagged under a custom distribution tag without affecting latest"
  },
  {
    id: "node-pub-5",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm deprecate [package_name]@[version] \"[message]\"",
    description: "mark specific package release as deprecated showing warning message during user installations"
  },
  {
    id: "node-pub-6",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm unpublish [package_name] --force",
    description: "remove published package release completely from npm registry (within allowed 72-hour window)"
  },
  {
    id: "node-pub-7",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm whoami",
    description: "display username currently logged into npm registry from local environment"
  },
  {
    id: "node-pub-8",
    category: "nodejs",
    os: ["windows", "linux", "macos"],
    section: "PACKAGING & REGISTRY PUBLISHING",
    sectionDescription: "Inspecting package tarballs, semver version tagging, authentication, and publishing to npm",
    command: "npm login",
    description: "authenticate terminal session with npm registry credentials and generate auth token"
  }
,
  // ==========================================
  // CSS: FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)
  // ==========================================
  {
    id: "css-flex-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "display: flex; justify-content: center; align-items: center;",
    description: "create a flexbox container and center all child items both horizontally and vertically"
  },
  {
    id: "css-flex-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "display: flex; justify-content: space-between; align-items: center;",
    description: "distribute flex children with maximum space between edges and centered vertical alignment (standard navbar)"
  },
  {
    id: "css-flex-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "display: flex; flex-direction: column; gap: 1rem;",
    description: "stack flex items vertically in a single column with uniform 1rem spacing between elements"
  },
  {
    id: "css-flex-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "display: flex; flex-wrap: wrap; gap: 12px;",
    description: "allow flex items to wrap automatically onto new rows when exceeding container width"
  },
  {
    id: "css-flex-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "flex: 1 1 0%;",
    description: "allow flex item to grow and shrink equally from an initial zero basis point (equal width columns)"
  },
  {
    id: "css-flex-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "flex-shrink: 0;",
    description: "prevent a flex item or icon from collapsing or shrinking when container width narrows"
  },
  {
    id: "css-flex-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "margin-left: auto;",
    description: "push specific flex child all the way to the far right edge inside a flex parent"
  },
  {
    id: "css-flex-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "align-self: flex-end;",
    description: "override parent cross-axis alignment for an individual flex child element"
  },
  {
    id: "css-flex-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "display: inline-flex; align-items: center; gap: 8px;",
    description: "create an inline flex container with vertically aligned icon and text badge layout"
  },
  {
    id: "css-flex-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "justify-content: space-evenly;",
    description: "distribute items with equal spacing between each item and before first / after last item"
  },
  {
    id: "css-flex-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "order: -1;",
    description: "reorder an individual flex child visually to render before all preceding sibling elements"
  },
  {
    id: "css-flex-12",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FLEXBOX LAYOUT (1D CONTAINERS & ALIGNMENT)",
    sectionDescription: "Flexible 1-dimensional box layouts, item distribution, alignment, and wrapping",
    command: "min-height: 100vh; display: flex; flex-direction: column;",
    description: "classic sticky-footer container setup ensuring footer stays pinned to viewport bottom"
  },
  // ==========================================
  // CSS: CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)
  // ==========================================
  {
    id: "css-grid-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;",
    description: "create a fully responsive auto-fitting card grid that wraps without writing media queries"
  },
  {
    id: "css-grid-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "display: grid; place-items: center;",
    description: "two-line ultimate centering technique aligning children both horizontally and vertically"
  },
  {
    id: "css-grid-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "display: grid; grid-template-columns: 240px 1fr; min-height: 100vh;",
    description: "standard application dashboard layout with fixed-width sidebar and fluid main content area"
  },
  {
    id: "css-grid-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-column: 1 / -1;",
    description: "span a grid child across the entire horizontal width from first track to last track"
  },
  {
    id: "css-grid-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-template-columns: repeat(3, 1fr); gap: 20px;",
    description: "define three equal-width fractional columns with uniform 20px gutters"
  },
  {
    id: "css-grid-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-template-areas: \"header header\" \"sidebar main\" \"footer footer\";",
    description: "define visual semantic layout template using named template area strings"
  },
  {
    id: "css-grid-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-area: header;",
    description: "assign element to fill the corresponding named grid-template-area position"
  },
  {
    id: "css-grid-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-column: span 2; grid-row: span 2;",
    description: "expand grid item to span across 2 columns and 2 rows (featured bento-box card)"
  },
  {
    id: "css-grid-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-auto-flow: dense;",
    description: "instruct grid algorithm to automatically backfill empty gaps with smaller elements"
  },
  {
    id: "css-grid-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-template-rows: auto 1fr auto; min-height: 100vh;",
    description: "holy grail page layout with header height based on content, expanding main body, and footer"
  },
  {
    id: "css-grid-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "display: subgrid;",
    description: "adopt and align directly with the row and column track sizing of the parent grid container"
  },
  {
    id: "css-grid-12",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CSS GRID LAYOUT (2D TEMPLATES & AUTO-FIT)",
    sectionDescription: "Two-dimensional grid tracks, auto-responsive card matrices, and named area layouts",
    command: "grid-template-columns: minmax(150px, 30%) 1fr;",
    description: "constrain first column between 150px min and 30% max with remaining space given to second column"
  },
  // ==========================================
  // CSS: CENTERING TECHNIQUES & BOX ALIGNMENT
  // ==========================================
  {
    id: "css-center-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "margin-inline: auto;",
    description: "modern logical property to center block-level element horizontally inside parent container"
  },
  {
    id: "css-center-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
    description: "absolute centering pattern that centers element precisely regardless of its width or height"
  },
  {
    id: "css-center-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "position: absolute; inset: 0; margin: auto;",
    description: "modern zero-transform absolute centering technique utilizing inset: 0 and margin auto"
  },
  {
    id: "css-center-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "text-align: center;",
    description: "center all inline and inline-block children (text, buttons, images) horizontally"
  },
  {
    id: "css-center-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "display: flex; justify-content: center;",
    description: "center flex children along the main horizontal axis"
  },
  {
    id: "css-center-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "display: flex; align-items: center;",
    description: "center flex children along the cross vertical axis"
  },
  {
    id: "css-center-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "display: grid; place-content: center;",
    description: "center entire grid track structure within the grid container space"
  },
  {
    id: "css-center-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "line-height: [element_height];",
    description: "center single line of text vertically by matching line-height to fixed container height"
  },
  {
    id: "css-center-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "vertical-align: middle;",
    description: "align inline-block element or table cell vertically with adjacent inline text"
  },
  {
    id: "css-center-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CENTERING TECHNIQUES & BOX ALIGNMENT",
    sectionDescription: "Universal horizontal, vertical, and absolute centering patterns for all element types",
    command: "max-width: 1200px; margin-inline: auto; padding-inline: 24px;",
    description: "standard responsive website wrapper constraining content with centered margins and side gutters"
  },
  // ==========================================
  // CSS: POSITIONING, Z-INDEX & STACKING CONTEXTS
  // ==========================================
  {
    id: "css-pos-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "position: relative;",
    description: "establish a positioned reference context for absolute positioned child elements without breaking flow"
  },
  {
    id: "css-pos-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "position: absolute; top: 0; right: 0;",
    description: "pin element to top-right corner of its closest positioned ancestor container"
  },
  {
    id: "css-pos-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;",
    description: "lock navigation bar to the top of viewport staying visible throughout page scroll"
  },
  {
    id: "css-pos-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "position: sticky; top: 0; z-index: 10;",
    description: "element scrolls naturally until reaching specified viewport threshold, then sticks in place"
  },
  {
    id: "css-pos-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); z-index: 9999;",
    description: "full-screen modal backdrop overlay covering entire viewport with dark translucent tint"
  },
  {
    id: "css-pos-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "inset: 0;",
    description: "modern shorthand for top: 0; right: 0; bottom: 0; left: 0; in positioned elements"
  },
  {
    id: "css-pos-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "z-index: 1;",
    description: "elevate stacking order of positioned element to render on top of default sibling elements"
  },
  {
    id: "css-pos-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "isolation: isolate;",
    description: "create a new independent stacking context without requiring z-index or transform hacks"
  },
  {
    id: "css-pos-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "position: static;",
    description: "reset element to default normal document flow removing custom top/left/z-index offsets"
  },
  {
    id: "css-pos-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "POSITIONING, Z-INDEX & STACKING CONTEXTS",
    sectionDescription: "Document flow control, sticky headers, fixed overlays, modals, and stacking levels",
    command: "pointer-events: none;",
    description: "make element transparent to mouse clicks and touch events passing them to elements underneath"
  },
  // ==========================================
  // CSS: BOX MODEL, SPACING & SIZING
  // ==========================================
  {
    id: "css-box-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "*, *::before, *::after { box-sizing: border-box; }",
    description: "universal box-sizing reset including padding and border inside total width and height calculations"
  },
  {
    id: "css-box-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "aspect-ratio: 16 / 9;",
    description: "enforce precise responsive widescreen aspect ratio regardless of container width"
  },
  {
    id: "css-box-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "width: min(100%, 800px);",
    description: "responsive container sizing using smaller of 100% viewport width or fixed 800px maximum"
  },
  {
    id: "css-box-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    description: "truncate single-line overflowing text with an ellipsis (...) instead of wrapping"
  },
  {
    id: "css-box-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;",
    description: "multi-line text truncation clamping paragraph to exactly 3 lines with trailing ellipsis"
  },
  {
    id: "css-box-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "overflow-y: auto; overflow-x: hidden;",
    description: "enable vertical scrolling on demand while strictly hiding horizontal overflow"
  },
  {
    id: "css-box-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "border-radius: 9999px;",
    description: "create perfect pill / capsule shaped rounded button or badge"
  },
  {
    id: "css-box-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "border-radius: 50%; aspect-ratio: 1 / 1;",
    description: "create a circular profile avatar container from any square element"
  },
  {
    id: "css-box-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "object-fit: cover; object-position: center;",
    description: "scale image or video to completely cover container while preserving natural aspect ratio"
  },
  {
    id: "css-box-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "BOX MODEL, SPACING & SIZING",
    sectionDescription: "Dimensions, margins, padding, box-sizing models, overflow management, and aspect ratios",
    command: "padding-block: 1rem; padding-inline: 2rem;",
    description: "logical properties specifying 1rem top/bottom padding and 2rem left/right padding"
  },
  // ==========================================
  // CSS: TYPOGRAPHY, WEBFONTS & TEXT EFFECTS
  // ==========================================
  {
    id: "css-type-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;",
    description: "system font stack providing native OS typography with instant zero-download rendering speed"
  },
  {
    id: "css-type-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "font-family: 'Google Sans Code', 'Fira Code', 'Courier New', monospace;",
    description: "modern monospaced code font stack for terminal displays, code snippets, and editors"
  },
  {
    id: "css-type-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "font-size: clamp(1.25rem, 2.5vw, 2.5rem);",
    description: "fluid typography scaling smoothly between 1.25rem minimum and 2.5rem maximum without media queries"
  },
  {
    id: "css-type-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "background: linear-gradient(135deg, #4285f4, #ea4335); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
    description: "render vibrant multi-color gradient text clipping background gradient onto glyphs"
  },
  {
    id: "css-type-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "letter-spacing: -0.02em; line-height: 1.2;",
    description: "tight modern editorial typography for bold display headlines and hero titles"
  },
  {
    id: "css-type-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "line-height: 1.6; letter-spacing: 0.01em;",
    description: "optimal readability typography settings for long-form body copy and article paragraphs"
  },
  {
    id: "css-type-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem;",
    description: "standard micro-copy styling for uppercase category badges, chip labels, and breadcrumbs"
  },
  {
    id: "css-type-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);",
    description: "subtle drop shadow behind text to enhance contrast and legibility over photographic backgrounds"
  },
  {
    id: "css-type-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "hyphens: auto; word-break: break-word;",
    description: "automatically hyphenate long words and prevent layout breakage on mobile viewports"
  },
  {
    id: "css-type-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
    description: "render crisp subpixel font glyphs on WebKit, Chrome, Safari, and macOS browsers"
  },
  {
    id: "css-type-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "@font-face { font-family: 'CustomFont'; src: url('font.woff2') format('woff2'); font-display: swap; }",
    description: "define local custom webfont utilizing WOFF2 compression and font-display: swap for fast FCP"
  },
  {
    id: "css-type-12",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TYPOGRAPHY, WEBFONTS & TEXT EFFECTS",
    sectionDescription: "Font families, variable fonts, font-face declarations, line heights, and gradient text",
    command: "font-variant-numeric: tabular-nums;",
    description: "format numbers with equal tabular monospaced width ensuring numbers align in columns and tables"
  },
  // ==========================================
  // CSS: COLORS, GRADIENTS & BLEND MODES
  // ==========================================
  {
    id: "css-color-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "background: linear-gradient(180deg, #1e1f20 0%, #131314 100%);",
    description: "smooth vertical gradient transition between elevated surface dark tone and background"
  },
  {
    id: "css-color-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "background: radial-gradient(circle at top left, #3b82f6, transparent 60%);",
    description: "radial glow accent radiating outward from the top-left corner of the container"
  },
  {
    id: "css-color-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "background: conic-gradient(from 0deg, #4285f4, #34a853, #fbbc05, #ea4335, #4285f4);",
    description: "conic angle gradient creating circular chromatic color wheel or gradient border effect"
  },
  {
    id: "css-color-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "background-size: cover; background-position: center; background-repeat: no-repeat;",
    description: "fill background image across entire container maintaining aspect ratio without tiling"
  },
  {
    id: "css-color-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "background-attachment: fixed;",
    description: "fix background image in place creating parallax scroll effect as page scrolls past"
  },
  {
    id: "css-color-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "color: currentColor;",
    description: "inherit text color dynamically into borders, SVG fill, or box shadows"
  },
  {
    id: "css-color-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "mix-blend-mode: multiply;",
    description: "blend foreground element pixels with underlying background layer using multiply algorithm"
  },
  {
    id: "css-color-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "background-blend-mode: overlay;",
    description: "combine background image with background color overlay for dramatic tint effects"
  },
  {
    id: "css-color-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "color: hsl(217deg 91% 60% / 80%);",
    description: "modern space-separated HSL notation with 80% opacity alpha channel"
  },
  {
    id: "css-color-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "accent-color: #4285f4;",
    description: "customize brand accent color for native HTML checkboxes, radio buttons, and range sliders"
  },
  {
    id: "css-color-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "COLORS, GRADIENTS & BLEND MODES",
    sectionDescription: "Color notations, linear/radial/conic gradients, alpha channels, and blending algorithms",
    command: "caret-color: #8ab4f8;",
    description: "customize color of text insertion caret cursor inside text inputs and textareas"
  },
  // ==========================================
  // CSS: TRANSFORMS & 3D SPATIAL EFFECTS
  // ==========================================
  {
    id: "css-tf-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform: translateY(-4px);",
    description: "lift card slightly upward on hover to create interactive tactile elevation"
  },
  {
    id: "css-tf-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform: scale(1.05);",
    description: "magnify element by 5% smoothly without altering layout geometry of surrounding elements"
  },
  {
    id: "css-tf-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform: rotate(180deg);",
    description: "rotate element 180 degrees (standard for collapsible accordion arrow toggles)"
  },
  {
    id: "css-tf-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform-origin: center center;",
    description: "set pivot point for scale, rotate, and skew transformations (e.g. top left, bottom right)"
  },
  {
    id: "css-tf-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform: translate(-50%, -50%);",
    description: "shift element backwards by exactly half its own width and height for coordinate centering"
  },
  {
    id: "css-tf-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "perspective: 1000px;",
    description: "establish 3D depth perspective viewing distance for children with 3D transforms"
  },
  {
    id: "css-tf-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform-style: preserve-3d;",
    description: "instruct child elements to remain positioned in 3D spatial coordinate planes"
  },
  {
    id: "css-tf-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "backface-visibility: hidden;",
    description: "hide the reverse side of an element when rotated in 3D (essential for card flip widgets)"
  },
  {
    id: "css-tf-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "transform: rotateX(15deg) rotateY(-15deg);",
    description: "apply 3D isometric tilt angle across both X and Y axes"
  },
  {
    id: "css-tf-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSFORMS & 3D SPATIAL EFFECTS",
    sectionDescription: "Translation, scaling, rotation, skewing, 3D perspectives, and transform origins",
    command: "translate: 0 -4px; scale: 1.02;",
    description: "modern individual transform properties allowing translation and scaling without overriding each other"
  },
  // ==========================================
  // CSS: TRANSITIONS & KEYFRAME ANIMATIONS
  // ==========================================
  {
    id: "css-anim-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);",
    description: "standard Google Material Design easing curve for smooth interactive UI state transitions"
  },
  {
    id: "css-anim-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "transition: transform 0.2s ease, opacity 0.2s ease;",
    description: "explicitly transition only composite-friendly properties (transform and opacity) for 60fps performance"
  },
  {
    id: "css-anim-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "animation: spin 1s linear infinite;",
    description: "infinitely rotating loading spinner animation with constant angular velocity"
  },
  {
    id: "css-anim-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
    description: "keyframe sequence rotating element 360 degrees around central axis"
  },
  {
    id: "css-anim-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "animation: fadeIn 0.3s ease-out forwards;",
    description: "fade-in animation that persists final keyframe styling upon completion (forwards fill mode)"
  },
  {
    id: "css-anim-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }",
    description: "classic smooth entrance animation combining opacity fade with subtle upward slide"
  },
  {
    id: "css-anim-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
    description: "subtle pulsing animation loop ideal for live activity badges or skeleton loading placeholders"
  },
  {
    id: "css-anim-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "animation-delay: 0.15s;",
    description: "stagger entry animation timing for cascade effects across list items"
  },
  {
    id: "css-anim-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "animation-play-state: paused;",
    description: "pause running CSS animation dynamically (e.g. on :hover to pause ticker or carousel)"
  },
  {
    id: "css-anim-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "will-change: transform, opacity;",
    description: "inform browser compositor ahead of time to allocate GPU layer for butter-smooth animation"
  },
  {
    id: "css-anim-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "TRANSITIONS & KEYFRAME ANIMATIONS",
    sectionDescription: "Hardware-accelerated transitions, custom cubic-bezier easings, and keyframe loops",
    command: "@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }",
    description: "accessibility media query disabling animations for users with vestibular motion sensitivity"
  },
  // ==========================================
  // CSS: FILTERS, GLASSMORPHISM & BOX SHADOWS
  // ==========================================
  {
    id: "css-fx-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);",
    description: "natural layered ambient card drop shadow with soft realistic diffusion"
  },
  {
    id: "css-fx-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);",
    description: "high-elevation floating modal or dropdown menu shadow with prominent depth"
  },
  {
    id: "css-fx-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.2);",
    description: "inner shadow giving input fields, wells, or pressed buttons an inset recessed appearance"
  },
  {
    id: "css-fx-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background: rgba(30, 31, 32, 0.75);",
    description: "frosted glassmorphism effect blurring content underneath header or modal surface"
  },
  {
    id: "css-fx-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));",
    description: "cast shadow adhering strictly to the alpha contours of transparent PNGs or SVGs"
  },
  {
    id: "css-fx-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "filter: grayscale(100%);",
    description: "convert image or element completely to black and white monochrome"
  },
  {
    id: "css-fx-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "filter: brightness(1.2) contrast(1.1);",
    description: "enhance image vibrancy by boosting brightness by 20% and contrast by 10%"
  },
  {
    id: "css-fx-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "filter: blur(8px);",
    description: "apply Gaussian blur filter across element contents (ideal for placeholder image previews)"
  },
  {
    id: "css-fx-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.4);",
    description: "clean accessibility focus ring outline without distorting element box dimensions"
  },
  {
    id: "css-fx-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "FILTERS, GLASSMORPHISM & BOX SHADOWS",
    sectionDescription: "Drop shadows, frosted glass blur, backdrop filters, brightness, and visual elevation",
    command: "clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);",
    description: "clip container into an angled modern diagonal section break divider"
  },
  // ==========================================
  // CSS: MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS
  // ==========================================
  {
    id: "css-mq-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@media (max-width: 768px) { .nav-bar { flex-direction: column; } }",
    description: "apply mobile layout styles when screen width is 768px or narrower (tablet/mobile breakpoint)"
  },
  {
    id: "css-mq-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@media (min-width: 1024px) { .container { grid-template-columns: repeat(4, 1fr); } }",
    description: "expand layout to 4 columns on desktop monitors 1024px and wider"
  },
  {
    id: "css-mq-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@media (prefers-color-scheme: dark) { :root { --bg-color: #131314; --text-color: #e3e3e3; } }",
    description: "automatically detect operating system dark mode preference and apply dark theme tokens"
  },
  {
    id: "css-mq-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@media (hover: hover) and (pointer: fine) { .card:hover { transform: translateY(-4px); } }",
    description: "enable hover effects exclusively on devices with precise pointers (mouse) preventing sticky touch bugs"
  },
  {
    id: "css-mq-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "container-type: inline-size; container-name: card-container;",
    description: "declare container context enabling child components to adapt based on parent width (CSS Container Queries)"
  },
  {
    id: "css-mq-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@container card-container (min-width: 400px) { .card { display: flex; flex-direction: row; } }",
    description: "switch card to horizontal layout when parent container width exceeds 400px regardless of screen size"
  },
  {
    id: "css-mq-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "height: 100dvh;",
    description: "dynamic viewport height adapting in real time to mobile browser address bar expansions/retractions"
  },
  {
    id: "css-mq-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);",
    description: "pad content away from iPhone notches, rounded screen corners, and home indicator bars"
  },
  {
    id: "css-mq-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@media print { .no-print { display: none !important; } body { color: #000; background: #fff; } }",
    description: "clean printer stylesheet hiding navigation and optimizing page for paper printing"
  },
  {
    id: "css-mq-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "@media (orientation: landscape) and (max-height: 500px) { .nav { display: none; } }",
    description: "target mobile devices held in horizontal landscape orientation with limited vertical height"
  },
  {
    id: "css-mq-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "width: min(90vw, 1200px);",
    description: "responsive width taking 90% of screen on small displays and capping at 1200px on widescreen displays"
  },
  {
    id: "css-mq-12",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "MEDIA QUERIES, CONTAINER QUERIES & RESPONSIVENESS",
    sectionDescription: "Breakpoints, device adaptation, dark/light themes, container queries, and logical units",
    command: "scroll-behavior: smooth;",
    description: "enable smooth animated scrolling across page when clicking internal anchor hash links"
  },
  // ==========================================
  // CSS: CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS
  // ==========================================
  {
    id: "css-var-1",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: ":root { --primary: #8ab4f8; --surface: #1e1f20; --bg: #131314; }",
    description: "declare globally scoped CSS design tokens and color variables on root pseudo-class"
  },
  {
    id: "css-var-2",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "color: var(--text-color, #ffffff);",
    description: "resolve CSS variable with fallback value in case the variable is undefined"
  },
  {
    id: "css-var-3",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "width: calc(100% - 32px);",
    description: "dynamically compute element dimension mixing percentage widths and fixed pixel gutter margins"
  },
  {
    id: "css-var-4",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: ":is(h1, h2, h3, h4) { font-family: 'Google Sans Flex', sans-serif; }",
    description: "match any selector in the list with specificity equal to the most specific item in the group"
  },
  {
    id: "css-var-5",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: ":where(button, input, select) { all: unset; }",
    description: "match multiple selectors with zero (0) specificity making CSS resets easily overridable"
  },
  {
    id: "css-var-6",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "header:has(.nav-menu.open) { background: rgba(0, 0, 0, 0.95); }",
    description: "the CSS parent selector: style parent element conditionally if it contains a matching child (:has)"
  },
  {
    id: "css-var-7",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "button:not(:disabled):hover { transform: translateY(-2px); cursor: pointer; }",
    description: "negation pseudo-class targeting buttons only when not in a disabled state"
  },
  {
    id: "css-var-8",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: ":focus-visible { outline: 2px solid #8ab4f8; outline-offset: 2px; }",
    description: "display accessibility focus ring exclusively for keyboard navigation while suppressing on mouse clicks"
  },
  {
    id: "css-var-9",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "&::before { content: ''; position: absolute; inset: 0; }",
    description: "native CSS nesting selector (&) creating an absolute positioned pseudo-element layer"
  },
  {
    id: "css-var-10",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "input::placeholder { color: #80868b; opacity: 1; }",
    description: "customize color and opacity of form input placeholder text"
  },
  {
    id: "css-var-11",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "user-select: none; -webkit-user-select: none;",
    description: "prevent user from highlighting or selecting text on interactive UI buttons and icons"
  },
  {
    id: "css-var-12",
    category: "css",
    os: ["windows", "linux", "macos"],
    section: "CUSTOM PROPERTIES (VARIABLES) & MODERN SELECTORS",
    sectionDescription: "Root custom properties, variable cascading, fallbacks, calc(), and modern pseudo-classes",
    command: "all: unset;",
    description: "completely strip all default user-agent styling, borders, and margins from an HTML element"
  }
];

// Attach globally
window.COMMANDS_DATA = COMMANDS_DATA;
