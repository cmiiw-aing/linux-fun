/**
 * Linux Mastery - Hands-On Interactive Labs & Mission Validator
 * Misi praktik terpandu dengan validasi otomatis terhadap state Terminal & VFS.
 */

const LINUX_LABS = [
  {
    id: "lab-1",
    title: "Lab 1: Navigasi Dasar & Manajemen File Project",
    rank: "Tingkat: Pemula",
    xp: 250,
    badge: "badge-novice.png",
    description: "Belajar bernavigasi di dalam terminal Linux, memeriksa posisi direktori, membuat struktur folder, dan membuat file project baru.",
    missions: [
      {
        id: "m1-1",
        title: "Periksa Lokasi Direktori Kerja Saat Ini",
        instruction: "Jalankan perintah <code>pwd</code> untuk melihat path direktori aktif Anda.",
        hint: "Ketik 'pwd' lalu tekan Enter.",
        check: (state, cmd) => cmd.trim() === "pwd",
        completed: false
      },
      {
        id: "m1-2",
        title: "Pastikan Berada di Direktori Home",
        instruction: "Pindah ke direktori home pengguna dengan perintah <code>cd ~</code> atau <code>cd /home/user</code>.",
        hint: "Gunakan 'cd ~' untuk langsung pulang ke home direktori.",
        check: (state) => state.vfs.currentPath === "/home/user",
        completed: false
      },
      {
        id: "m1-3",
        title: "Buat Folder Proyek Baru Bernama 'proyek-web'",
        instruction: "Gunakan perintah <code>mkdir proyek-web</code> di dalam folder home Anda.",
        hint: "Ketik 'mkdir proyek-web'. Pastikan Anda sedang berada di /home/user.",
        check: (state) => {
          let node = state.vfs.getNode("/home/user/proyek-web");
          return node !== null && node.type === "dir";
        },
        completed: false
      },
      {
        id: "m1-4",
        title: "Buat File 'index.html' di Dalam 'proyek-web'",
        instruction: "Gunakan perintah <code>touch proyek-web/index.html</code> (atau masuk ke folder lalu buat file).",
        hint: "Bisa ketik 'touch proyek-web/index.html' atau 'cd proyek-web' lalu 'touch index.html'.",
        check: (state) => {
          let node = state.vfs.getNode("/home/user/proyek-web/index.html");
          return node !== null && node.type === "file";
        },
        completed: false
      }
    ]
  },
  {
    id: "lab-2",
    title: "Lab 2: Redirection, Log Writing & Menyaring Teks",
    rank: "Tingkat: Operator",
    xp: 300,
    badge: "badge-operator.png",
    description: "Kuasai seni membelokkan output terminal ke dalam file menggunakan simbol redirection (>, >>) dan menyaring teks dengan grep.",
    missions: [
      {
        id: "m2-1",
        title: "Tulis Baris Pertama ke File 'server.log'",
        instruction: "Gunakan <code>echo \"status: running\" > server.log</code> untuk membuat dan mengisi file log.",
        hint: "Simbol > akan membuat file baru atau menimpa isi yang sudah ada.",
        check: (state) => {
          let node = state.vfs.getNode(state.vfs.currentPath + "/server.log") || state.vfs.getNode("/home/user/server.log");
          return node !== null && node.content && node.content.includes("status: running");
        },
        completed: false
      },
      {
        id: "m2-2",
        title: "Tambahkan Baris Kedua Menggunakan Append (>>)",
        instruction: "Gunakan <code>echo \"port: 8080\" >> server.log</code> tanpa menimpa baris sebelumnya.",
        hint: "Simbol >> menyisipkan teks baru di baris terbawah file.",
        check: (state) => {
          let node = state.vfs.getNode(state.vfs.currentPath + "/server.log") || state.vfs.getNode("/home/user/server.log");
          return node !== null && node.content && node.content.includes("status: running") && node.content.includes("port: 8080");
        },
        completed: false
      },
      {
        id: "m2-3",
        title: "Tampilkan Seluruh Isi File 'server.log'",
        instruction: "Gunakan perintah <code>cat server.log</code> untuk mencetak isi file ke layar terminal.",
        hint: "Ketik 'cat server.log'.",
        check: (state, cmd) => cmd.trim().startsWith("cat") && cmd.includes("server.log"),
        completed: false
      },
      {
        id: "m2-4",
        title: "Saring Log Menggunakan Perintah grep",
        instruction: "Cari baris yang mengandung kata 'running' dengan <code>grep running server.log</code>.",
        hint: "Ketik 'grep running server.log' untuk menyaring teks secara spesifik.",
        check: (state, cmd) => cmd.trim().startsWith("grep") && cmd.includes("running"),
        completed: false
      }
    ]
  },
  {
    id: "lab-3",
    title: "Lab 3: Security Hardening & Hak Akses (chmod)",
    rank: "Tingkat: Junior Sysadmin",
    xp: 350,
    badge: "badge-sysadmin.png",
    description: "Amankan file sistem dengan mengatur izin Read, Write, Execute (rwx) menggunakan kalkulasi oktal dan chmod.",
    missions: [
      {
        id: "m3-1",
        title: "Inspeksi Izin Awal File 'script.sh'",
        instruction: "Gunakan perintah <code>ls -l project/</code> untuk memeriksa permission file script.",
        hint: "Ketik 'ls -l project' atau 'ls -la project'.",
        check: (state, cmd) => cmd.trim().startsWith("ls") && cmd.includes("-l") && cmd.includes("project"),
        completed: false
      },
      {
        id: "m3-2",
        title: "Berikan Izin Eksekusi pada 'script.sh'",
        instruction: "Ubah izin file agar bisa dieksekusi dengan <code>chmod 755 project/script.sh</code> atau <code>chmod +x project/script.sh</code>.",
        hint: "Ketik 'chmod 755 project/script.sh' atau 'chmod +x project/script.sh'.",
        check: (state) => {
          let node = state.vfs.getNode("/home/user/project/script.sh");
          return node !== null && node.perms && node.perms.includes("x");
        },
        completed: false
      },
      {
        id: "m3-3",
        title: "Buat File Konfigurasi Rahasia '.env'",
        instruction: "Buat file rahasia dengan perintah <code>touch .env</code> di folder home.",
        hint: "Ketik 'touch .env'. File diawali titik adalah hidden file.",
        check: (state) => {
          let node = state.vfs.getNode("/home/user/.env");
          return node !== null;
        },
        completed: false
      },
      {
        id: "m3-4",
        title: "Kunci File '.env' dengan Permission 600",
        instruction: "Amankan file sehingga hanya Owner yang bisa membaca & menulis: <code>chmod 600 .env</code>.",
        hint: "Ketik 'chmod 600 .env'. Nilai 600 menghasilkan string -rw-------.",
        check: (state) => {
          let node = state.vfs.getNode("/home/user/.env");
          return node !== null && node.perms === "-rw-------";
        },
        completed: false
      }
    ]
  },
  {
    id: "lab-4",
    title: "Lab 4: Incident Response & Berburu Proses (Kill)",
    rank: "Tingkat: DevOps / SRE",
    xp: 400,
    badge: "badge-devops.png",
    description: "Sistem server mengalami lonjakan beban CPU 88%! Temukan proses penambang liar (miner) dan hentikan menggunakan sinyal kill.",
    missions: [
      {
        id: "m4-1",
        title: "Cek Daftar Proses yang Memakan Resource",
        instruction: "Jalankan <code>ps aux</code> untuk melihat semua proses yang sedang berjalan di sistem.",
        hint: "Ketik 'ps aux' atau 'ps'. Perhatikan kolom %CPU dan COMMAND.",
        check: (state, cmd) => cmd.trim().startsWith("ps"),
        completed: false
      },
      {
        id: "m4-2",
        title: "Temukan PID Proses Penambang 'crypto_miner.py'",
        instruction: "Perhatikan output ps aux. Cari baris dengan command 'crypto_miner.py' (PID 1205).",
        hint: "PID proses rogue adalah 1205.",
        check: (state, cmd) => true, // Informational checkpoint
        completed: false
      },
      {
        id: "m4-3",
        title: "Hentikan Proses Menggunakan Perintah kill",
        instruction: "Kirim sinyal terminasi dengan menjalankan <code>kill 1205</code> atau <code>kill -9 1205</code>.",
        hint: "Ketik 'kill 1205' lalu tekan Enter.",
        check: (state) => {
          return !state.processes.some(p => p.pid === 1205);
        },
        completed: false
      },
      {
        id: "m4-4",
        title: "Verifikasi Bahwa Proses Sudah Benar-Benar Mati",
        instruction: "Jalankan <code>ps aux</code> sekali lagi untuk memastikan CPU server sudah normal kembali.",
        hint: "Ketik 'ps aux' untuk verifikasi akhir.",
        check: (state, cmd) => cmd.trim().startsWith("ps") && !state.processes.some(p => p.pid === 1205),
        completed: false
      }
    ]
  },
  {
    id: "lab-5",
    title: "Lab 5: Package Management & Server Setup (apt)",
    rank: "Tingkat: Cloud Engineer",
    xp: 450,
    badge: "badge-cloud.png",
    description: "Simulasikan alur kerja instalasi software di server Linux berbasis Debian/Ubuntu menggunakan APT.",
    missions: [
      {
        id: "m5-1",
        title: "Update Indeks Repositori Paket",
        instruction: "Jalankan <code>apt update</code> untuk menyinkronkan daftar software terbaru.",
        hint: "Ketik 'apt update'.",
        check: (state, cmd) => cmd.trim().startsWith("apt update"),
        completed: false
      },
      {
        id: "m5-2",
        title: "Pasang Paket 'neofetch'",
        instruction: "Pasang paket sistem visual dengan perintah <code>apt install neofetch</code>.",
        hint: "Ketik 'apt install neofetch'.",
        check: (state) => state.vfs.installedPackages.has("neofetch"),
        completed: false
      },
      {
        id: "m5-3",
        title: "Jalankan neofetch untuk Pamerkan Sistem",
        instruction: "Ketik <code>neofetch</code> untuk menampilkan logo distro dan spesifikasi mesin.",
        hint: "Ketik 'neofetch' di terminal.",
        check: (state, cmd) => cmd.trim() === "neofetch",
        completed: false
      },
      {
        id: "m5-4",
        title: "Pasang dan Coba Program cowsay",
        instruction: "Ketik <code>apt install cowsay</code> lalu jalankan <code>cowsay hebat</code>.",
        hint: "Pasang dengan 'apt install cowsay' kemudian jalankan 'cowsay <pesan>'.",
        check: (state, cmd) => state.vfs.installedPackages.has("cowsay") && cmd.trim().startsWith("cowsay"),
        completed: false
      }
    ]
  }
];

class LabManager {
  constructor(labs, terminalInstance) {
    this.labs = JSON.parse(JSON.stringify(labs));
    this.terminal = terminalInstance;
    this.activeLabId = this.labs[0].id;
    this.userXP = parseInt(localStorage.getItem("linux_xp") || "0");
    this.completedMissions = JSON.parse(localStorage.getItem("linux_completed_missions") || "{}");

    // Restore completion state from localStorage
    this.labs.forEach(lab => {
      lab.missions.forEach(m => {
        if (this.completedMissions[m.id]) {
          m.completed = true;
        }
      });
    });

    this.onStateChange = null;
    this.bindTerminalListener();
  }

  bindTerminalListener() {
    this.terminal.onCommandExecuted = ({ command, vfs, processes }) => {
      this.validateActiveMissions(command, { vfs, processes });
    };
  }

  getActiveLab() {
    return this.labs.find(l => l.id === this.activeLabId) || this.labs[0];
  }

  setActiveLab(labId) {
    this.activeLabId = labId;
    if (this.onStateChange) this.onStateChange();
  }

  validateActiveMissions(lastCommand, state) {
    let currentLab = this.getActiveLab();
    let updated = false;

    currentLab.missions.forEach(mission => {
      if (!mission.completed) {
        let isSuccess = false;
        try {
          isSuccess = mission.check(state, lastCommand);
        } catch (e) {
          console.error("Lab validation error:", e);
        }

        if (isSuccess) {
          mission.completed = true;
          this.completedMissions[mission.id] = true;
          this.userXP += 50;
          updated = true;
          
          this.terminal.printLine(`
            <div class="mission-success-banner">
              ⭐ <strong>MISI SELESAI:</strong> ${mission.title} (+50 XP)
            </div>
          `);
        }
      }
    });

    if (updated) {
      localStorage.setItem("linux_completed_missions", JSON.stringify(this.completedMissions));
      localStorage.setItem("linux_xp", this.userXP.toString());
      if (this.onStateChange) this.onStateChange();
    }
  }

  resetCurrentLab() {
    let lab = this.getActiveLab();
    lab.missions.forEach(m => {
      m.completed = false;
      delete this.completedMissions[m.id];
    });
    localStorage.setItem("linux_completed_missions", JSON.stringify(this.completedMissions));
    if (this.onStateChange) this.onStateChange();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LINUX_LABS, LabManager };
}
