# 🐧 Linux Mastery - Platform Pembelajaran Linux Lengkap & Lab Interaktif

Aplikasi web modern, interaktif, dan komprehensif untuk mempelajari sistem operasi Linux dari dasar hingga tingkat lanjut, dilengkapi simulator terminal bash nyata, virtual filesystem (VFS), misi hands-on lab terpandu berhadiah XP, kamus 100+ perintah dengan pencarian instan, kalkulator hak akses (chmod), visualizer hirarki FHS, dan kuis evaluasi pemahaman bersertifikat.

---

## 🌟 Fitur Utama Aplikasi

### 1. 📖 9 Modul Pembelajaran Terstruktur (Kurikulum Lengkap)
- **Modul 1: Fondasi & Arsitektur Linux** (Sejarah, Mengapa Linux, 4 Lapisan Arsitektur OS, Pohon Keluarga Distro: Debian, RHEL, Arch, Alpine, Kali).
- **Modul 2: Struktur Direktori Linux (FHS)** (Filosofi "Everything is a File", membedah `/`, `/bin`, `/etc`, `/var`, `/home`, `/dev`, `/proc`).
- **Modul 3: Navigasi & Operasi File Lengkap** (`pwd`, `cd`, `ls -lah`, `mkdir -p`, `touch`, `cp -r`, `mv`, `rm -rf`, wildcards `*`, `?`).
- **Modul 4: Pipa, Redirection & Pemrosesan Teks** (Standard streams: stdin, stdout, stderr, operator `>`, `>>`, the power of pipe `|`, `grep`, `wc`, `head`, `tail -f`).
- **Modul 5: Hak Akses File & Keamanan (Permissions)** (Membedah string `rwxr-xr-x`, rumus matematika oktal 755/644/600, `chmod`, `chown`, bahaya `777` dan `sudo`).
- **Modul 6: Manajemen Proses & Monitoring Sistem** (PID, `ps aux`, `top`, sinyal `kill -15` vs `kill -9`, foreground/background `&`, `jobs`, `fg`, `bg`).
- **Modul 7: Jaringan, Remote Server & SSH** (`ip a`, `ping`, `curl`, `ss -tulpn`, koneksi remote aman dengan SSH Key).
- **Modul 8: Manajemen Paket & Software** (Konsep repository, perbandingan `apt`, `dnf`, `pacman`, serta format Snap/Flatpak).
- **Modul 9: Bash Scripting & Otomasi Sistem** (Shebang `#!/bin/bash`, variabel, if-else, looping for/while, dan cron job).
- *Setiap modul dilengkapi tombol "Coba di Terminal" yang dapat diklik langsung untuk menguji perintah secara real-time.*

### 2. 💻 Terminal Simulator Interaktif (Bash & Virtual File System)
- **In-Memory Virtual File System (VFS)**: Mendukung struktur direktori realistis lengkap dengan file konfigurasi (`/etc/passwd`, `/etc/nginx/nginx.conf`, `/var/log/syslog`).
- **Dukungan Perintah Luas**: `pwd`, `ls [-la]`, `cd`, `mkdir [-p]`, `touch`, `rm [-rf]`, `cp [-r]`, `mv`, `cat`, `grep`, `wc [-l]`, `chmod`, `whoami`, `uname [-a]`, `hostname`, `date`, `uptime`, `ps aux`, `kill [PID]`, `free`, `df`, `ip a`, `ping`, `curl`, `tree`, `history`, `man`, `clear`.
- **Package Manager Simulator (`apt`)**: Anda dapat menjalankan `apt update` dan `apt install neofetch` atau `apt install cowsay` yang benar-benar membuka program baru tersebut di terminal!
- **Fitur Shell Modern**:
  - Dukungan Operator Redirection (`>` dan `>>`).
  - Dukungan Pipa Tunggal (`cat ... | grep ... | wc -l`).
  - Autocomplete Otomatis menggunakan tombol <kbd>Tab</kbd> (baik untuk nama perintah maupun nama file/folder).
  - Navigasi Riwayat Perintah (History) menggunakan tombol panah atas <kbd>↑</kbd> dan bawah <kbd>↓</kbd>.
  - Efek suara audio terminal (bisa diaktifkan/dinonaktifkan kapan saja).

### 3. 🎯 Misi Praktik Terpandu (Hands-on Labs Berhadiah XP)
- **Lab 1: Navigasi Dasar & Manajemen File Project (Pemula)**
- **Lab 2: Redirection, Log Writing & Menyaring Teks (Operator)**
- **Lab 3: Security Hardening & Hak Akses chmod (Junior Sysadmin)**
- **Lab 4: Incident Response & Berburu Proses Rogue (DevOps / SRE)**
- **Lab 5: Package Management & Server Setup (Cloud Engineer)**
- Dilengkapi **Real-Time Automated Validator** yang mendeteksi perubahan pada VFS dan status proses sistem, memberikan XP, dan menaikkan level peringkat (Level 1 Pemula hingga Level 5 DevOps Master).

### 4. 📚 Kamus Perintah Lengkap (100+ Commands Database)
- Pencarian instan dan filter kategori pill.
- Informasi lengkap nama perintah, kategori, sintaks, deskripsi mendalam, tabel flag, dan contoh penggunaan dunia nyata.
- Tombol aksi "Coba" yang langsung memindahkan Anda ke terminal untuk mengeksekusinya.

### 5. 🛠️ Alat Bantu & Visualizer Interaktif
- **Kalkulator Hak Akses CHMOD**: Checkbox interaktif untuk User, Group, Others yang menghitung nilai oktal (misal: 755), string simbolik (`rwxr-xr-x`), analisis keamanan (peringatan keamanan jika 777), dan generator perintah siap pakai.
- **Visualizer Pohon Direktori (FHS)**: Peta interaktif seluruh direktori akar `/` (`/bin`, `/etc`, `/var`, `/proc`, `/dev`, dll.) dengan penjelasan lengkap fungsi masing-masing folder.
- **Bash Script Playground**: Editor kode script Bash interaktif dengan template (Hello World, If-Else, Loop) dan tombol eksekusi simulasi.

### 6. 🏆 Evaluasi Pemahaman & Sertifikat Kelulusan
- 15+ Soal pilihan ganda komprehensif menguji pemahaman seluruh materi.
- Review kunci jawaban dan pembahasan mendalam di setiap nomor.
- Sertifikat Kelulusan digital resmi dengan nama pengguna, skor, predikat pangkat, tanggal kelulusan, dan tombol cetak / simpan PDF.

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini bersifat mandiri (zero external dependencies) dan dapat dijalankan dengan mudah melalui beberapa cara:

### Cara 1: Menjalankan Server Node.js Bawaan (Rekomendasi)
Buka terminal PowerShell / Command Prompt di folder proyek, lalu jalankan:
```bash
node server.js
```
Kemudian buka browser Anda di:
👉 **`http://localhost:3000`**

### Cara 2: Membuka Langsung File HTML
Anda juga dapat langsung membuka file `index.html` dengan cara:
- Klik ganda pada file `index.html` di File Explorer, atau
- Buka browser favorit Anda (Google Chrome, Edge, Firefox) lalu seret (drag-and-drop) file `index.html` ke jendela browser.

---

## 📁 Struktur Direktori Proyek

```
pembelajaran-linux/
├── index.html              # Antarmuka pengguna utama aplikasi
├── css/
│   └── styles.css          # Desain cyberpunk DevOps, tema gelap, responsif & animasi
├── js/
│   ├── app.js              # Koordinator utama aplikasi, navigasi tab & XP tracking
│   ├── terminal.js         # Mesin simulator terminal Bash & Virtual File System (VFS)
│   ├── curriculum.js       # 9 Modul pembelajaran lengkap terstruktur
│   ├── commands-db.js      # Database 100+ kamus perintah Linux
│   ├── labs.js             # 5 Hands-on labs & validasi otomatis
│   ├── tools.js            # Kalkulator CHMOD, FHS Tree & Bash Playground
│   └── quiz.js             # Mesin kuis evaluasi & generator sertifikat digital
├── server.js               # HTTP server statis mandiri Node.js (port 3000)
├── package.json            # Konfigurasi proyek & scripts
└── README.md               # Dokumentasi lengkap
```

Selamat belajar dan menguasai Linux! 🚀
