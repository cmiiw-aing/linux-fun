/**
 * Linux Mastery - Uji Pemahaman & Kuis Sertifikasi Linux Interaktif
 * 20 Soal komprehensif dari tingkat pemula hingga mahir dengan sertifikat digital.
 */

const LINUX_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Apa fungsi utama dari Kernel dalam sistem operasi Linux?",
    options: [
      "Mengedit file teks dan dokumen pengguna",
      "Sebagai jembatan antara perangkat keras (hardware) dan aplikasi perangkat lunak",
      "Menyediakan tampilan antarmuka grafis desktop seperti GNOME",
      "Menghubungkan komputer langsung ke internet tanpa kabel"
    ],
    answer: 1,
    explanation: "Kernel adalah inti dari sistem operasi yang mengelola alokasi CPU, RAM, storage, driver hardware, dan keamanan sistem."
  },
  {
    id: 2,
    question: "Di Linux, di manakah lokasi direktori utama tempat seluruh file konfigurasi sistem dan server disimpan?",
    options: [
      "/bin",
      "/var",
      "/etc",
      "/dev"
    ],
    answer: 2,
    explanation: "Direktori /etc (Editable Text Configuration) adalah tempat baku penyimpanan konfigurasi sistem seperti /etc/passwd, /etc/nginx, dan /etc/hosts."
  },
  {
    id: 3,
    question: "Manakah perintah yang benar untuk membuat hierarki folder bersarang 'app/src/components' sekaligus jika folder induknya belum ada?",
    options: [
      "mkdir -r app/src/components",
      "mkdir -p app/src/components",
      "mkdir -f app/src/components",
      "create-dir app/src/components"
    ],
    answer: 1,
    explanation: "Flag -p (parents) pada perintah mkdir akan membuat seluruh rantai folder induk secara otomatis tanpa memunculkan error."
  },
  {
    id: 4,
    question: "Jika sebuah file memiliki izin (permission) 755, apa artinya bagi pengguna 'Others' (orang lain di luar grup dan owner)?",
    options: [
      "Bisa membaca, menulis, dan mengeksekusi file (rwx)",
      "Hanya bisa membaca dan mengeksekusi file (r-x)",
      "Hanya bisa membaca file saja (r--)",
      "Sama sekali tidak memiliki hak akses (---)"
    ],
    answer: 1,
    explanation: "Angka terakhir '5' adalah untuk Others. Angka 5 didapat dari Read (4) + Execute (1) = 5 (r-x). Others tidak memiliki hak Write (2)."
  },
  {
    id: 5,
    question: "Apa perbedaan mendasar antara operator redirection '>' dan '>>' di terminal Linux?",
    options: [
      "'>' menambahkan di baris terakhir, sedangkan '>>' menimpa isi file lama",
      "'>' menimpa isi file lama (overwrite), sedangkan '>>' menambahkan teks di baris paling bawah (append)",
      "'>' hanya untuk input, sedangkan '>>' untuk output",
      "Keduanya memiliki fungsi yang persis sama tanpa perbedaan"
    ],
    answer: 1,
    explanation: "Operator '>' akan menghapus isi file lama dan menggantinya dengan output baru, sedangkan '>>' menambahkan teks ke baris terbawah tanpa merusak isi lama."
  },
  {
    id: 6,
    question: "Perintah pipa (pipe '|') digunakan untuk:",
    options: [
      "Menjalankan dua perintah secara paralel di background",
      "Mengalirkan stdout (output) dari perintah pertama menjadi stdin (input) bagi perintah kedua",
      "Menghubungkan dua komputer melalui kabel LAN",
      "Menghapus riwayat history terminal"
    ],
    answer: 1,
    explanation: "Pipa '|' menghubungkan keluaran program di sebelah kiri langsung ke masukan program di sebelah kanan, memungkinkan rantai pemrosesan data teks."
  },
  {
    id: 7,
    question: "Sinyal kill manakah yang mematikan proses secara paksa dan instan tanpa bisa dicegah oleh aplikasi tersebut?",
    options: [
      "SIGTERM (Sinyal 15)",
      "SIGKILL (Sinyal 9)",
      "SIGHUP (Sinyal 1)",
      "SIGINT (Sinyal 2)"
    ],
    answer: 1,
    explanation: "Sinyal 9 (SIGKILL) langsung diurus oleh kernel untuk mematikan proses saat itu juga tanpa memberikan kesempatan pada aplikasi untuk menangani pembersihan."
  },
  {
    id: 8,
    question: "Manakah package manager bawaan yang digunakan oleh distribusi Red Hat Enterprise Linux (RHEL) dan Fedora versi modern?",
    options: [
      "apt",
      "pacman",
      "dnf",
      "brew"
    ],
    answer: 2,
    explanation: "DNF (Dandified YUM) adalah manajer paket generasi terbaru untuk keluarga Fedora, Red Hat, dan CentOS/Rocky Linux."
  },
  {
    id: 9,
    question: "Izin berapakah yang paling tepat dan aman untuk file kunci privat SSH (~/.ssh/id_rsa)?",
    options: [
      "777",
      "755",
      "644",
      "600"
    ],
    answer: 3,
    explanation: "Nilai 600 (-rw-------) hanya memberikan hak baca dan tulis kepada pemilik (Owner), sedangkan Group dan Others tidak memiliki akses sama sekali. SSH akan menolak kunci privat jika permission-nya terlalu longgar."
  },
  {
    id: 10,
    question: "Perintah manakah yang digunakan untuk memantau penambahan baris baru pada file log server secara langsung (real-time stream)?",
    options: [
      "head -n 20 /var/log/syslog",
      "cat /var/log/syslog",
      "tail -f /var/log/syslog",
      "grep -r /var/log/syslog"
    ],
    answer: 2,
    explanation: "Opsi -f (follow) pada perintah tail membuat terminal tetap membuka file dan terus mencetak baris-baris baru begitu ada event log yang masuk."
  },
  {
    id: 11,
    question: "Apa arti dari baris shebang '#!/bin/bash' di baris paling pertama suatu script Linux?",
    options: [
      "Hanya baris komentar biasa yang diabaikan sistem",
      "Memberitahu sistem operasi interpreter program apa yang harus digunakan untuk mengeksekusi script tersebut",
      "Perintah untuk menginstal bash ke dalam komputer",
      "Perintah untuk mengunci file agar tidak bisa dibaca user lain"
    ],
    answer: 1,
    explanation: "Shebang (#!) memberi tahu kernel path ke interpreter yang bertugas mengeksekusi baris-baris instruksi di dalam file script."
  },
  {
    id: 12,
    question: "Perintah pengganti modern yang digunakan untuk melihat daftar socket dan port jaringan yang sedang listening di Linux adalah:",
    options: [
      "ss -tulpn",
      "ping -c 4",
      "traceroute",
      "ip route"
    ],
    answer: 0,
    explanation: "Perintah 'ss' (Socket Statistics) adalah pengganti modern dari netstat yang jauh lebih cepat dalam menampilkan status port TCP/UDP."
  },
  {
    id: 13,
    question: "File virtual di Linux yang berisi informasi tentang kapasitas dan konsumsi memori RAM sistem adalah:",
    options: [
      "/etc/ram.conf",
      "/proc/meminfo",
      "/var/log/ram.log",
      "/dev/memory"
    ],
    answer: 1,
    explanation: "/proc adalah pseudo-filesystem di RAM. File /proc/meminfo menyajikan statistik memori real-time yang dibaca oleh perintah 'free'."
  },
  {
    id: 14,
    question: "Perintah manakah yang digunakan untuk mengubah kepemilikan user dan grup pada folder secara rekursif?",
    options: [
      "chmod -R user:group /folder",
      "chown -R user:group /folder",
      "chgrp user:group /folder",
      "mv -R user:group /folder"
    ],
    answer: 1,
    explanation: "'chown' (Change Owner) dengan opsi -R (rekursif) digunakan untuk mengubah pemilik user sekaligus grup (user:group) pada folder beserta seluruh isinya."
  },
  {
    id: 15,
    question: "Jadwal cron job '0 3 * * * /backup.sh' akan dieksekusi:",
    options: [
      "Setiap 3 jam sekali sepanjang hari",
      "Setiap tanggal 3 setiap bulan",
      "Setiap hari tepat pada pukul 03:00 pagi",
      "Hanya pada hari Rabu pukul 00:00"
    ],
    answer: 2,
    explanation: "Kolom cron berurutan: Menit (0), Jam (3), Tanggal (*), Bulan (*), Hari (*). Jadi perintah dijalankan setiap hari pukul 03:00."
  }
];

class LinuxQuizManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.questions = LINUX_QUIZ_QUESTIONS;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.score = 0;
    this.isFinished = false;
    this.render();
  }

  render() {
    if (this.isFinished) {
      this.renderCertificate();
      return;
    }

    let q = this.questions[this.currentIndex];
    let total = this.questions.length;
    let progressPct = Math.round(((this.currentIndex) / total) * 100);
    let selectedOption = this.userAnswers[q.id];

    this.container.innerHTML = `
      <div class="quiz-container-card">
        <div class="quiz-header-bar">
          <div class="quiz-progress-text">Soal ${this.currentIndex + 1} dari ${total}</div>
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <div class="quiz-question-box">
          <h3 class="quiz-question-title">${q.question}</h3>
          
          <div class="quiz-options-list">
            ${q.options.map((opt, idx) => {
              let isSelected = selectedOption === idx;
              let extraClass = isSelected ? "selected" : "";
              return `
                <button class="quiz-option-btn ${extraClass}" data-idx="${idx}">
                  <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                  <span class="opt-text">${opt}</span>
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <div class="quiz-footer-actions">
          <button id="btn-quiz-prev" class="quiz-btn-nav" ${this.currentIndex === 0 ? 'disabled' : ''}>← Soal Sebelumnya</button>
          ${
            this.currentIndex === total - 1
              ? `<button id="btn-quiz-finish" class="quiz-btn-nav btn-primary">Selesaikan Kuis & Periksa Skor 🎯</button>`
              : `<button id="btn-quiz-next" class="quiz-btn-nav btn-primary">Soal Berikutnya →</button>`
          }
        </div>
      </div>
    `;

    // Pasang events
    this.container.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        let idx = parseInt(btn.dataset.idx);
        this.userAnswers[q.id] = idx;
        this.render();
      });
    });

    let prevBtn = this.container.querySelector("#btn-quiz-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.render();
        }
      });
    }

    let nextBtn = this.container.querySelector("#btn-quiz-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (this.currentIndex < total - 1) {
          this.currentIndex++;
          this.render();
        }
      });
    }

    let finishBtn = this.container.querySelector("#btn-quiz-finish");
    if (finishBtn) {
      finishBtn.addEventListener("click", () => {
        this.finishQuiz();
      });
    }
  }

  finishQuiz() {
    this.score = 0;
    this.questions.forEach(q => {
      if (this.userAnswers[q.id] === q.answer) {
        this.score++;
      }
    });
    this.isFinished = true;

    // Bonus XP
    let gainedXP = this.score * 20;
    let curXP = parseInt(localStorage.getItem("linux_xp") || "0");
    localStorage.setItem("linux_xp", (curXP + gainedXP).toString());

    this.render();
  }

  renderCertificate() {
    let total = this.questions.length;
    let pct = Math.round((this.score / total) * 100);
    let grade = "Novice";
    let badgeClass = "badge-novice";

    if (pct >= 85) {
      grade = "Master SysAdmin / DevOps";
      badgeClass = "badge-gold";
    } else if (pct >= 70) {
      grade = "Linux Professional Operator";
      badgeClass = "badge-silver";
    } else if (pct >= 50) {
      grade = "Linux Junior Practitioner";
      badgeClass = "badge-bronze";
    } else {
      grade = "Linux Enthusiast";
    }

    this.container.innerHTML = `
      <div class="cert-wrapper">
        <div class="cert-card">
          <div class="cert-header">
            <div class="cert-seal">🐧</div>
            <h2>SERTIFIKAT KELULUSAN PEMBELAJARAN LINUX</h2>
            <div class="cert-sub">Linux Mastery Certification of Completion</div>
          </div>

          <div class="cert-body">
            <p class="cert-present">Dengan bangga diberikan kepada:</p>
            <h1 class="cert-name" id="cert-user-name">Linux Practitioner</h1>
            
            <p class="cert-statement">
              Telah berhasil menyelesaikan rangkaian modul komprehensif, simulasi terminal, dan ujian evaluasi pemahaman sistem operasi Linux dengan predikat:
            </p>

            <div class="cert-rank-box">
              <span class="cert-rank-title">${grade}</span>
              <span class="cert-score-label">Skor Akhir: <strong>${this.score} / ${total}</strong> (${pct}%)</span>
            </div>

            <div class="cert-meta-row">
              <div class="cert-meta-col">
                <span class="meta-label">Tanggal Ujian:</span>
                <span class="meta-val">${new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="cert-meta-col">
                <span class="meta-label">Verifikasi Lab:</span>
                <span class="meta-val">Verified by Antigravity OS Node</span>
              </div>
            </div>
          </div>

          <div class="cert-actions">
            <button class="btn-cert-action" onclick="window.print()">🖨️ Cetak / Unduh PDF</button>
            <button class="btn-cert-action btn-secondary" id="btn-quiz-retry">🔄 Ulangi Ujian</button>
          </div>
        </div>

        <div class="quiz-review-section">
          <h3>Pembahasan & Kunci Jawaban</h3>
          <div class="review-list">
            ${this.questions.map((q, idx) => {
              let userChoice = this.userAnswers[q.id];
              let isCorrect = userChoice === q.answer;
              return `
                <div class="review-card ${isCorrect ? 'correct' : 'wrong'}">
                  <div class="review-q-title">
                    <span>${isCorrect ? '✅' : '❌'} Soal ${idx + 1}: ${q.question}</span>
                  </div>
                  <div class="review-q-answers">
                    <div>Jawaban Anda: <strong>${userChoice !== undefined ? q.options[userChoice] : 'Tidak dijawab'}</strong></div>
                    <div>Kunci Benar: <strong class="text-neon">${q.options[q.answer]}</strong></div>
                  </div>
                  <div class="review-explanation">
                    💡 <em>${q.explanation}</em>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;

    this.container.querySelector("#btn-quiz-retry").addEventListener("click", () => {
      this.currentIndex = 0;
      this.userAnswers = {};
      this.isFinished = false;
      this.score = 0;
      this.render();
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LINUX_QUIZ_QUESTIONS, LinuxQuizManager };
}
