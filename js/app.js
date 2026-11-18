/**
 * Linux Mastery - Main Application Coordinator
 * Mengelola navigasi tab, inisialisasi modul, stats XP, dan integrasi antar komponen.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi VFS & Terminal Simulator Utama
  const vfs = new VirtualFileSystem();
  const mainTerminalContainer = document.getElementById("terminal-view-container");
  const mainTerminal = new LinuxTerminal(mainTerminalContainer, vfs);

  // Inisialisasi Lab Manager
  const labManager = new LabManager(LINUX_LABS, mainTerminal);

  // Inisialisasi Kalkulator CHMOD
  const permCalc = new PermissionCalculator("perm-calc-container");

  // Inisialisasi FHS Visualizer
  initFHSVisualizer("fhs-tree-container");

  // Inisialisasi Bash Script Playground
  initBashPlayground("bash-playground-container");

  // Inisialisasi Kuis Pemahaman
  const quizManager = new LinuxQuizManager("quiz-view-container");

  // State XP & Rank
  function updateHeaderStats() {
    let xp = parseInt(localStorage.getItem("linux_xp") || "0");
    let completed = Object.keys(JSON.parse(localStorage.getItem("linux_completed_missions") || "{}")).length;

    let level = 1;
    let rankName = "Pemula (Newbie)";
    if (xp >= 1500) { level = 5; rankName = "DevOps Master"; }
    else if (xp >= 1000) { level = 4; rankName = "Senior SysAdmin"; }
    else if (xp >= 600) { level = 3; rankName = "Junior SysAdmin"; }
    else if (xp >= 250) { level = 2; rankName = "Linux Operator"; }

    let xpEl = document.getElementById("header-xp-val");
    let levelEl = document.getElementById("header-level-val");
    if (xpEl) xpEl.textContent = `${xp} XP`;
    if (levelEl) levelEl.textContent = `Lvl ${level} (${rankName})`;
  }
  updateHeaderStats();

  labManager.onStateChange = () => {
    updateHeaderStats();
    renderLabsUI();
  };

  // Navigasi Tab Sidebar
  const navButtons = document.querySelectorAll(".nav-item-btn");
  const viewPanels = document.querySelectorAll(".view-panel");

  function switchTab(targetId) {
    navButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.target === targetId);
    });
    viewPanels.forEach(panel => {
      panel.classList.toggle("active", panel.id === targetId);
    });

    // Auto-focus terminal jika pindah ke tab terminal
    if (targetId === "view-terminal") {
      setTimeout(() => mainTerminal.inputElem.focus(), 100);
    }
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.target);
    });
  });

  // Delegasi tombol "Coba di Terminal" di seluruh aplikasi
  document.addEventListener("click", (e) => {
    let btn = e.target.closest(".btn-try-cmd") || e.target.closest(".btn-mini-run");
    if (btn) {
      let cmd = btn.dataset.cmd;
      if (cmd) {
        // Pindah ke tab terminal dan jalankan
        switchTab("view-terminal");
        mainTerminal.executeCommand(cmd);
      }
    }
  });

  // ==========================================================================
  // Render Kurikulum Modul
  // ==========================================================================
  const modulesNavList = document.getElementById("modules-nav-list");
  const moduleViewer = document.getElementById("module-content-display");

  function renderCurriculum() {
    if (!modulesNavList || !moduleViewer) return;

    modulesNavList.innerHTML = "";
    LINUX_CURRICULUM.forEach((mod, index) => {
      let btn = document.createElement("button");
      btn.className = "module-nav-btn" + (index === 0 ? " active" : "");
      btn.innerHTML = `
        <span class="mod-btn-title">${mod.title}</span>
        <div class="mod-btn-meta">
          <span class="tag-badge">${mod.badge}</span>
          <span>⏱️ ${mod.duration}</span>
        </div>
      `;
      btn.addEventListener("click", () => {
        modulesNavList.querySelectorAll(".module-nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        showModule(mod);
      });
      modulesNavList.appendChild(btn);
    });

    showModule(LINUX_CURRICULUM[0]);
  }

  function showModule(mod) {
    moduleViewer.innerHTML = `
      <div class="module-header-box">
        <div class="mod-badges">
          <span class="tag-badge">${mod.badge}</span>
          <span class="tag-badge">Estimasi: ${mod.duration}</span>
        </div>
        <h2>${mod.title}</h2>
        <p class="mod-summary">${mod.summary}</p>
      </div>
      <div class="module-body-content">
        ${mod.content}
      </div>
    `;
  }
  renderCurriculum();

  // ==========================================================================
  // Render Kamus Perintah (100+ Commands Database)
  // ==========================================================================
  const commandsGrid = document.getElementById("commands-grid");
  const searchInput = document.getElementById("cmd-search-input");
  const catPills = document.querySelectorAll(".cat-pill");
  let activeCategory = "Semua";

  function renderCommands() {
    if (!commandsGrid) return;
    let query = (searchInput.value || "").toLowerCase().trim();

    let filtered = LINUX_COMMANDS.filter(cmd => {
      let matchesCategory = activeCategory === "Semua" || cmd.category === activeCategory;
      let matchesQuery = !query || 
                         cmd.name.toLowerCase().includes(query) || 
                         cmd.desc.toLowerCase().includes(query) || 
                         cmd.syntax.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      commandsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
          🔍 Tidak ditemukan perintah yang cocok dengan "<strong>${query}</strong>". Coba kata kunci lain.
        </div>
      `;
      return;
    }

    commandsGrid.innerHTML = filtered.map(cmd => {
      let examplesHtml = cmd.examples.map(ex => `
        <div class="cmd-ex-item">
          <span>${ex.cmd}</span>
          <button class="btn-mini-run" data-cmd="${ex.cmd}">Coba</button>
        </div>
      `).join("");

      return `
        <div class="cmd-card">
          <div>
            <div class="cmd-card-header">
              <h4>${cmd.name}</h4>
              <span class="cmd-cat-tag">${cmd.category}</span>
            </div>
            <p class="cmd-desc">${cmd.desc}</p>
            <div class="cmd-syntax-box">${cmd.syntax}</div>
          </div>
          <div class="cmd-examples">
            <span>Contoh Nyata:</span>
            ${examplesHtml}
          </div>
        </div>
      `;
    }).join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => renderCommands());
  }

  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.cat;
      renderCommands();
    });
  });
  renderCommands();

  // ==========================================================================
  // Render Hands-on Labs UI
  // ==========================================================================
  const labsSidebar = document.getElementById("labs-sidebar");
  const labMainView = document.getElementById("lab-main-view");

  function renderLabsUI() {
    if (!labsSidebar || !labMainView) return;

    let currentLab = labManager.getActiveLab();

    // Render selector list
    labsSidebar.innerHTML = labManager.labs.map(lab => {
      let doneCount = lab.missions.filter(m => m.completed).length;
      let total = lab.missions.length;
      let isActive = lab.id === currentLab.id;
      return `
        <div class="lab-selector-card ${isActive ? 'active' : ''}" data-labid="${lab.id}">
          <div class="lab-sel-title">${lab.title}</div>
          <div class="lab-sel-meta">
            <span>${lab.rank}</span>
            <span>⭐ ${doneCount}/${total} Selesai</span>
          </div>
        </div>
      `;
    }).join("");

    labsSidebar.querySelectorAll(".lab-selector-card").forEach(card => {
      card.addEventListener("click", () => {
        labManager.setActiveLab(card.dataset.labid);
      });
    });

    // Render active lab content
    let allCompleted = currentLab.missions.every(m => m.completed);
    let missionsHtml = currentLab.missions.map(m => `
      <div class="mission-item-card ${m.completed ? 'completed' : ''}">
        <div class="mission-checkbox">${m.completed ? '✔' : ''}</div>
        <div class="mission-content">
          <h5>${m.title}</h5>
          <p>${m.instruction}</p>
          <div class="m-hint">💡 Petunjuk: ${m.hint}</div>
        </div>
      </div>
    `).join("");

    labMainView.innerHTML = `
      <div class="lab-status-card">
        <div class="lab-header-row">
          <div>
            <h3>${currentLab.title}</h3>
            <span class="tag-badge">${currentLab.rank}</span>
            <span class="tag-badge" style="color: #34d399;">+${currentLab.xp} Total XP</span>
          </div>
          <button id="btn-reset-lab" class="term-btn">Reset Misi Lab</button>
        </div>
        <p class="lab-desc">${currentLab.description}</p>
        
        ${allCompleted ? `
          <div class="mission-success-banner" style="display:block; margin-bottom: 1rem;">
            🏆 <strong>SELAMAT!</strong> Anda telah menuntaskan seluruh misi di lab ini. Terus tingkatkan kemampuan ke level berikutnya!
          </div>
        ` : ''}

        <div class="missions-list">
          ${missionsHtml}
        </div>
      </div>
    `;

    let resetBtn = labMainView.querySelector("#btn-reset-lab");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Reset status penyelesaian misi pada lab ini?")) {
          labManager.resetCurrentLab();
        }
      });
    }
  }
  renderLabsUI();

  // Sub-tabs di dalam menu "Alat Bantu"
  const toolTabButtons = document.querySelectorAll(".tool-tab-btn");
  const toolSections = document.querySelectorAll(".tool-section-card");

  toolTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toolTabButtons.forEach(b => b.classList.remove("active"));
      toolSections.forEach(s => s.style.display = "none");

      btn.classList.add("active");
      let targetSection = document.getElementById(btn.dataset.tool);
      if (targetSection) targetSection.style.display = "block";
    });
  });

  // Tombol Cepat Buka Terminal di Header
  const quickTermBtn = document.getElementById("btn-quick-terminal");
  if (quickTermBtn) {
    quickTermBtn.addEventListener("click", () => {
      switchTab("view-terminal");
    });
  }
});
