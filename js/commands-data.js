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
];

// Attach globally
window.COMMANDS_DATA = COMMANDS_DATA;
