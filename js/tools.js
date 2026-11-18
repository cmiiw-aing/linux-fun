/**
 * Linux Mastery - Interactive Visual Tools & Utilities
 * 1. Kalkulator Hak Akses CHMOD Interaktif (Oktal & Simbolik)
 * 2. Visualizer Hirarki Direktori (Filesystem Hierarchy Standard - FHS)
 * 3. Bash Script Playground Simulator
 */

class PermissionCalculator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.state = {
      user: { r: true, w: true, x: true },
      group: { r: true, w: false, x: true },
      others: { r: true, w: false, x: true }
    };
    this.render();
  }

  calculateOctal() {
    let u = (this.state.user.r ? 4 : 0) + (this.state.user.w ? 2 : 0) + (this.state.user.x ? 1 : 0);
    let g = (this.state.group.r ? 4 : 0) + (this.state.group.w ? 2 : 0) + (this.state.group.x ? 1 : 0);
    let o = (this.state.others.r ? 4 : 0) + (this.state.others.w ? 2 : 0) + (this.state.others.x ? 1 : 0);
    return `${u}${g}${o}`;
  }

  calculateSymbolic() {
    let s = "-";
    s += this.state.user.r ? "r" : "-";
    s += this.state.user.w ? "w" : "-";
    s += this.state.user.x ? "x" : "-";
    s += this.state.group.r ? "r" : "-";
    s += this.state.group.w ? "w" : "-";
    s += this.state.group.x ? "x" : "-";
    s += this.state.others.r ? "r" : "-";
    s += this.state.others.w ? "w" : "-";
    s += this.state.others.x ? "x" : "-";
    return s;
  }

  getSecurityNote(octal) {
    if (octal === "777") {
      return { level: "danger", text: "🚨 SANGAT BERBAHAYA! Semua pengguna di sistem dapat membaca, memodifikasi, dan menghapus file ini. Jangan gunakan di server produksi!" };
    }
    if (octal === "755") {
      return { level: "good", text: "✅ Standar Script / Direktori: Pemilik memiliki akses penuh (rwx), grup dan pengguna lain hanya bisa membaca & mengeksekusi." };
    }
    if (octal === "644") {
      return { level: "good", text: "✅ Standar Berkas Teks & Web: Pemilik dapat membaca & mengedit (rw-), pengguna lain hanya dapat membaca (r--)." };
    }
    if (octal === "600") {
      return { level: "secure", text: "🔒 Privasi Tinggi (Kunci SSH): Hanya pemilik yang dapat membaca & mengedit file. Sangat tepat untuk id_rsa atau berkas sandi." };
    }
    if (octal.endsWith("7") || octal.endsWith("6") || octal.endsWith("2")) {
      return { level: "warning", text: "⚠️ Peringatan: Pengguna luar (Others) memiliki hak tulis (Write). Pastikan ini memang disengaja." };
    }
    return { level: "info", text: "ℹ️ Mode permission khusus terkonfigurasi." };
  }

  setPreset(u, g, o) {
    let parse = (val) => ({
      r: (val & 4) === 4,
      w: (val & 2) === 2,
      x: (val & 1) === 1
    });
    this.state.user = parse(u);
    this.state.group = parse(g);
    this.state.others = parse(o);
    this.render();
  }

  render() {
    let octal = this.calculateOctal();
    let symbolic = this.calculateSymbolic();
    let note = this.getSecurityNote(octal);

    this.container.innerHTML = `
      <div class="perm-calc-card">
        <div class="calc-presets">
          <span class="preset-label">Preset Populer:</span>
          <button class="btn-preset" data-u="7" data-g="5" data-o="5">755 (Script / Bin)</button>
          <button class="btn-preset" data-u="6" data-g="4" data-o="4">644 (Berkas Normal)</button>
          <button class="btn-preset" data-u="6" data-g="0" data-o="0">600 (Kunci Rahasia/SSH)</button>
          <button class="btn-preset btn-preset-danger" data-u="7" data-g="7" data-o="7">777 (Full Access)</button>
        </div>

        <div class="calc-grid">
          <!-- User / Owner -->
          <div class="calc-col">
            <div class="col-title">👤 Pemilik (User/Owner)</div>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-u-r" ${this.state.user.r ? 'checked' : ''}> Read (4)
            </label>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-u-w" ${this.state.user.w ? 'checked' : ''}> Write (2)
            </label>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-u-x" ${this.state.user.x ? 'checked' : ''}> Execute (1)
            </label>
          </div>

          <!-- Group -->
          <div class="calc-col">
            <div class="col-title">👥 Grup (Group)</div>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-g-r" ${this.state.group.r ? 'checked' : ''}> Read (4)
            </label>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-g-w" ${this.state.group.w ? 'checked' : ''}> Write (2)
            </label>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-g-x" ${this.state.group.x ? 'checked' : ''}> Execute (1)
            </label>
          </div>

          <!-- Others -->
          <div class="calc-col">
            <div class="col-title">🌍 Orang Lain (Others)</div>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-o-r" ${this.state.others.r ? 'checked' : ''}> Read (4)
            </label>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-o-w" ${this.state.others.w ? 'checked' : ''}> Write (2)
            </label>
            <label class="checkbox-row">
              <input type="checkbox" id="chk-o-x" ${this.state.others.x ? 'checked' : ''}> Execute (1)
            </label>
          </div>
        </div>

        <div class="calc-results-box">
          <div class="result-item">
            <span class="res-label">Nilai Oktal:</span>
            <span class="res-val text-neon">${octal}</span>
          </div>
          <div class="result-item">
            <span class="res-label">Notasi Simbolik:</span>
            <span class="res-val text-yellow">${symbolic}</span>
          </div>
          <div class="result-item">
            <span class="res-label">Sintaks Perintah:</span>
            <code class="res-cmd">chmod ${octal} nama_file.sh</code>
          </div>
        </div>

        <div class="calc-note note-${note.level}">
          ${note.text}
        </div>
      </div>
    `;

    // Pasang listeners
    const bind = (id, target, key) => {
      let el = this.container.querySelector(id);
      if (el) {
        el.addEventListener("change", (e) => {
          this.state[target][key] = e.target.checked;
          this.render();
        });
      }
    };

    bind("#chk-u-r", "user", "r");
    bind("#chk-u-w", "user", "w");
    bind("#chk-u-x", "user", "x");
    bind("#chk-g-r", "group", "r");
    bind("#chk-g-w", "group", "w");
    bind("#chk-g-x", "group", "x");
    bind("#chk-o-r", "others", "r");
    bind("#chk-o-w", "others", "w");
    bind("#chk-o-x", "others", "x");

    this.container.querySelectorAll(".btn-preset").forEach(btn => {
      btn.addEventListener("click", () => {
        let u = parseInt(btn.dataset.u);
        let g = parseInt(btn.dataset.g);
        let o = parseInt(btn.dataset.o);
        this.setPreset(u, g, o);
      });
    });
  }
}

// 2. FHS Directory Visualizer
const FHS_DATA = [
  { path: "/", title: "Root Directory", desc: "Akar utama dari seluruh sistem file Linux. Semua file dan perangkat bercabang dari sini." },
  { path: "/bin", title: "Essential User Binaries", desc: "Perintah penting dasar yang dibutuhkan saat booting dan single-user mode (ls, cp, rm, bash)." },
  { path: "/boot", title: "Boot Loader Files", desc: "File kernel Linux (vmlinuz), initramfs, dan konfigurasi boot loader GRUB." },
  { path: "/dev", title: "Device Nodes", desc: "File representasi perangkat keras (harddisk /dev/sda, memori, terminal, /dev/null)." },
  { path: "/etc", title: "System Configurations", desc: "Pusat file konfigurasi teks sistem dan layanan (passwd, fstab, nginx, network)." },
  { path: "/home", title: "User Home Directories", desc: "Folder pribadi setiap user untuk menyimpan dokumen, unduhan, dan preferensi (.bashrc)." },
  { path: "/lib", title: "Shared Libraries", desc: "Pustaka pustaka bersama (.so) yang dibutuhkan oleh binary di /bin dan /sbin." },
  { path: "/media", title: "Removable Media", desc: "Titik mount otomatis untuk media lepas-pasang seperti flashdisk USB dan CD-ROM." },
  { path: "/mnt", title: "Temporary Mounts", desc: "Folder tempat sysadmin melakukan mount filesystem sementara secara manual." },
  { path: "/opt", title: "Optional Add-on Apps", desc: "Software pihak ketiga yang mandiri (misal: Google Chrome, Discord, package komersial)." },
  { path: "/proc", title: "Kernel & Process Virtual FS", desc: "Filesystem semu di RAM yang menampilkan info proses aktif dan status kernel real-time." },
  { path: "/root", title: "Root User Home", desc: "Direktori home khusus milik pengguna superuser Administrator (root)." },
  { path: "/sbin", title: "System Binaries", desc: "Program administrasi sistem khusus root (fdisk, reboot, iptables, ip)." },
  { path: "/tmp", title: "Temporary Files", desc: "Tempat berkas sementara. Biasanya otomatis dikosongkan setiap kali komputer di-restart." },
  { path: "/usr", title: "User Utilities & Apps", desc: "Program aplikasi sekunder pengguna, dokumentasi, dan library (/usr/bin, /usr/share)." },
  { path: "/var", title: "Variable Files & Logs", desc: "Data yang ukurannya dinamis membesar, seperti log server (/var/log) dan antrean spool." }
];

function initFHSVisualizer(containerId) {
  let container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="fhs-visualizer-layout">
      <div class="fhs-tree-panel">
        <div class="fhs-tree-header">Pohon Direktori Linux (FHS)</div>
        <div class="fhs-node-list" id="fhs-node-list"></div>
      </div>
      <div class="fhs-detail-panel" id="fhs-detail-panel">
        <div class="fhs-detail-placeholder">Pilih salah satu folder di sebelah kiri untuk melihat anatomi dan fungsinya.</div>
      </div>
    </div>
  `;

  let listEl = container.querySelector("#fhs-node-list");
  let detailEl = container.querySelector("#fhs-detail-panel");

  FHS_DATA.forEach((item, index) => {
    let btn = document.createElement("button");
    btn.className = "fhs-folder-btn" + (index === 0 ? " active" : "");
    btn.innerHTML = `<span class="folder-icon">📁</span> <span class="folder-name">${item.path}</span>`;
    btn.addEventListener("click", () => {
      container.querySelectorAll(".fhs-folder-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showDetail(item);
    });
    listEl.appendChild(btn);
  });

  function showDetail(item) {
    detailEl.innerHTML = `
      <div class="fhs-card-detail">
        <div class="fhs-card-header">
          <span class="fhs-icon-big">📂</span>
          <div>
            <h3>${item.path}</h3>
            <span class="fhs-subtitle">${item.title}</span>
          </div>
        </div>
        <p class="fhs-desc">${item.desc}</p>
        <div class="fhs-action-row">
          <span class="tip-tag">💡 Contoh Perintah Terkait:</span>
          <code>ls -la ${item.path}</code>
        </div>
      </div>
    `;
  }

  showDetail(FHS_DATA[0]);
}

// 3. Bash Script Playground Simulator
const BASH_TEMPLATES = {
  hello: `#!/bin/bash
# Script Perkenalan
NAMA="DevOps Engineer"
echo "Halo, $NAMA!"
echo "Waktu eksekusi: $(date)"
echo "Kernel yang digunakan: $(uname -r)"
`,
  condition: `#!/bin/bash
# Pengecekan Keberadaan File
TARGET="/etc/passwd"

if [ -f "$TARGET" ]; then
    echo "Berkas konfigurasi $TARGET DITEMUKAN!"
    BARIS=$(wc -l < "$TARGET")
    echo "Jumlah pengguna terdaftar: $BARIS akun"
else
    echo "Peringatan: Berkas $TARGET tidak ditemukan."
fi
`,
  loop: `#!/bin/bash
# Simulasi Pembersihan Log
echo "=== Memulai Siklus Kompresi Log ==="
for HARI in Senin Selasa Rabu Kamis Jumat; do
    echo "[+] Mengarsipkan log hari $HARI..."
done
echo "Seluruh arsip berhasil dibuat dan dikompres."
`
};

function initBashPlayground(containerId) {
  let container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="playground-layout">
      <div class="playground-editor-pane">
        <div class="editor-header">
          <span class="editor-title">Editor Bash Script (bash-script.sh)</span>
          <div class="editor-templates">
            <span>Template:</span>
            <button class="btn-template" data-key="hello">Halo Dunia</button>
            <button class="btn-template" data-key="condition">If-Else File</button>
            <button class="btn-template" data-key="loop">Looping For</button>
          </div>
        </div>
        <textarea id="bash-code-input" class="bash-textarea" spellcheck="false"></textarea>
        <div class="editor-footer">
          <button id="btn-run-bash" class="btn-run-script">▶ Jalankan Script (bash)</button>
        </div>
      </div>
      <div class="playground-output-pane">
        <div class="editor-header">
          <span class="editor-title">Terminal Output</span>
          <button id="btn-clear-bash-out" class="term-btn">Bersihkan</button>
        </div>
        <pre id="bash-run-output" class="bash-output-box">Klik tombol "Jalankan Script" di samping kiri untuk menguji jalannya script.</pre>
      </div>
    </div>
  `;

  let textarea = container.querySelector("#bash-code-input");
  let outputBox = container.querySelector("#bash-run-output");
  textarea.value = BASH_TEMPLATES.hello;

  container.querySelectorAll(".btn-template").forEach(btn => {
    btn.addEventListener("click", () => {
      let key = btn.dataset.key;
      textarea.value = BASH_TEMPLATES[key] || "";
    });
  });

  container.querySelector("#btn-clear-bash-out").addEventListener("click", () => {
    outputBox.textContent = "";
  });

  container.querySelector("#btn-run-bash").addEventListener("click", () => {
    let code = textarea.value;
    outputBox.innerHTML = `<span class="text-neon">$ bash script.sh</span>\n`;
    
    // Simple script runner simulation
    setTimeout(() => {
      let lines = code.split("\n");
      let simOut = [];
      for (let line of lines) {
        let trimmed = line.trim();
        if (trimmed.startsWith("#") || trimmed === "") continue;
        if (trimmed.startsWith("echo ")) {
          let str = trimmed.slice(5).replace(/^['"]|['"]$/g, "")
                           .replace(/\$NAMA/g, "DevOps Engineer")
                           .replace(/\$\(date\)/g, new Date().toLocaleString("id-ID"))
                           .replace(/\$\(uname -r\)/g, "6.8.0-generic")
                           .replace(/\$BARIS/g, "5")
                           .replace(/\$TARGET/g, "/etc/passwd");
          simOut.push(str);
        } else if (trimmed.includes("Mengarsipkan log")) {
          simOut.push(trimmed.replace("echo ", "").replace(/['"]/g, ""));
        }
      }
      if (simOut.length === 0) {
        simOut.push("[Script selesai dieksekusi dengan kode keluar 0]");
      }
      outputBox.innerHTML += simOut.join("\n") + '\n\n<span class="text-dim">[Process completed with exit code 0]</span>';
    }, 200);
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PermissionCalculator, initFHSVisualizer, initBashPlayground };
}
