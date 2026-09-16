// CmdVault Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentCategory = "github-git";
  let currentOs = "all";
  let searchQuery = "";

  // DOM Elements
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const navTabs = document.querySelectorAll(".nav-tab");
  const osPills = document.querySelectorAll(".os-pill");
  const commandsContainer = document.getElementById("commands-container");
  const emptyState = document.getElementById("empty-state");
  const resetSearchBtn = document.getElementById("reset-search-btn");
  const authBtn = document.getElementById("auth-btn");
  const userProfile = document.getElementById("user-profile");
  const userAvatar = document.getElementById("user-avatar");
  const userName = document.getElementById("user-name");
  const logoutBtn = document.getElementById("logout-btn");
  const themeToggle = document.getElementById("theme-toggle");
  const toastContainer = document.getElementById("toast-container");

  // Check saved theme
  const savedTheme = localStorage.getItem("cmdvault_theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  // Theme Toggle Handler
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("cmdvault_theme", isLight ? "light" : "dark");
    });
  }

  // Auth Handling
  if (window.CmdVaultAuth) {
    window.CmdVaultAuth.subscribeAuth((user) => {
      if (user) {
        if (authBtn) authBtn.style.display = "none";
        if (userProfile) {
          userProfile.classList.add("active");
          userAvatar.src = user.photoURL || "icons/GITHUB ICON 1.png";
          userName.textContent = user.displayName || user.email || "GitHub User";
        }
      } else {
        if (authBtn) authBtn.style.display = "flex";
        if (userProfile) userProfile.classList.remove("active");
      }
    });

    if (authBtn) {
      authBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        showToast("Opening GitHub Authentication...");
        const result = await window.CmdVaultAuth.loginWithGithub();
        if (result.success) {
          showToast(`Welcome, ${result.user.displayName || "Developer"}!`);
        } else {
          showToast(`Sign in error: ${result.error || "Failed"}`, 4000);
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        await window.CmdVaultAuth.logoutUser();
        showToast("Signed out successfully");
      });
    }
  }

  // Category Nav Tabs
  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      navTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.category;
      renderCommands();
    });
  });

  // OS Pills
  osPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const selectedOs = pill.dataset.os;
      if (currentOs === selectedOs) {
        // Toggle off back to all
        currentOs = "all";
        pill.classList.remove("active");
      } else {
        osPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        currentOs = selectedOs;
      }
      renderCommands();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.classList.toggle("visible", searchQuery.length > 0);
      }
      renderCommands();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClear.classList.remove("visible");
      searchInput.focus();
      renderCommands();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      currentOs = "all";
      osPills.forEach((p) => p.classList.remove("active"));
      if (searchClear) searchClear.classList.remove("visible");
      renderCommands();
    });
  }

  // Render Commands Function
  function renderCommands() {
    if (!window.COMMANDS_DATA) return;

    let filtered = window.COMMANDS_DATA;

    // Filter by category
    if (currentCategory && !searchQuery) {
      filtered = filtered.filter((item) => item.category === currentCategory);
    }

    // Filter by OS
    if (currentOs && currentOs !== "all") {
      filtered = filtered.filter((item) => item.os.includes(currentOs));
    }

    // Filter by search query (across all categories if search active)
    if (searchQuery) {
      filtered = window.COMMANDS_DATA.filter((item) => {
        const cmdMatch = item.command.toLowerCase().includes(searchQuery);
        const descMatch = item.description.toLowerCase().includes(searchQuery);
        const secMatch = item.section.toLowerCase().includes(searchQuery);
        const catMatch = item.category.toLowerCase().includes(searchQuery);
        return cmdMatch || descMatch || secMatch || catMatch;
      });
    }

    if (filtered.length === 0) {
      commandsContainer.innerHTML = "";
      if (emptyState) emptyState.classList.add("visible");
      return;
    }

    if (emptyState) emptyState.classList.remove("visible");

    // Group commands by section
    const grouped = {};
    filtered.forEach((item) => {
      if (!grouped[item.section]) {
        grouped[item.section] = {
          section: item.section,
          sectionDescription: item.sectionDescription,
          commands: []
        };
      }
      grouped[item.section].commands.push(item);
    });

    // Build HTML
    let html = "";
    const sections = Object.values(grouped);

    sections.forEach((group, idx) => {
      html += `
        <section class="command-section" data-section="${escapeHtml(group.section)}">
          <h2 class="section-heading">${escapeHtml(group.section)}</h2>
          ${group.sectionDescription ? `<p class="section-desc">${escapeHtml(group.sectionDescription)}</p>` : ""}
          <div class="command-group">
      `;

      group.commands.forEach((item) => {
        html += `
          <div class="command-item" data-id="${item.id}">
            <div class="command-box">
              <code class="command-code">${highlightMatch(escapeHtml(item.command), searchQuery)}</code>
              <button class="copy-btn" title="Copy to clipboard" data-copy="${escapeHtml(item.command)}">
                <img src="icons/copy.svg" alt="Copy" width="22" height="22" />
              </button>
            </div>
            <p class="command-explanation">${highlightMatch(escapeHtml(item.description), searchQuery)}</p>
          </div>
        `;
      });

      html += `
          </div>
          ${idx < sections.length - 1 ? '<hr class="section-divider" />' : ''}
        </section>
      `;
    });

    commandsContainer.innerHTML = html;

    // Attach copy listeners
    const copyButtons = commandsContainer.querySelectorAll(".copy-btn");
    copyButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const textToCopy = btn.getAttribute("data-copy");
        copyToClipboard(textToCopy, btn);
      });
    });
  }

  // Clipboard Copy Action
  function copyToClipboard(text, btnElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerCopyFeedback(btnElement);
        showToast("Copied to clipboard!");
      }).catch(() => fallbackCopy(text, btnElement));
    } else {
      fallbackCopy(text, btnElement);
    }
  }

  function fallbackCopy(text, btnElement) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
      triggerCopyFeedback(btnElement);
      showToast("Copied to clipboard!");
    } catch (err) {
      showToast("Could not copy command", 2500);
    }
    document.body.removeChild(textarea);
  }

  function triggerCopyFeedback(btnElement) {
    btnElement.classList.add("copied");
    const originalContent = btnElement.innerHTML;
    btnElement.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#10b981"/>
      </svg>
    `;
    setTimeout(() => {
      btnElement.classList.remove("copied");
      btnElement.innerHTML = originalContent;
    }, 1800);
  }

  // Toast Notification
  function showToast(message, duration = 2500) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  function escapeHtml(string) {
    return String(string)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.replace(regex, "<mark style='background-color: rgba(96, 165, 250, 0.35); color: inherit; padding: 1px 4px; border-radius: 3px;'>$1</mark>");
  }

  // Initial Render
  renderCommands();
});
