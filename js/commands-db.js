/**
 * Linux Mastery - Database Kamus Perintah Linux Lengkap
 * Berisi 100+ perintah Linux esensial lengkap dengan sintaks, kategori, deskripsi & contoh nyata.
 */

const LINUX_COMMANDS = [
  // 1. Navigasi & Direktori
  {
    name: "pwd",
    category: "Navigasi & File",
    syntax: "pwd [-LP]",
    desc: "Menampilkan path lengkap direktori kerja saat ini (Print Working Directory).",
    examples: [
      { cmd: "pwd", note: "Cek di folder mana Anda saat ini berada" }
    ],
    flags: [
      { flag: "-L", desc: "Tampilkan logical path (mengikuti symlink)" },
      { flag: "-P", desc: "Tampilkan physical path (mengabaikan symlink)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "ls",
    category: "Navigasi & File",
    syntax: "ls [opsi] [direktori/file]",
    desc: "Melihat daftar file dan folder di dalam direktori.",
    examples: [
      { cmd: "ls", note: "Menampilkan file normal" },
      { cmd: "ls -la", note: "Format panjang lengkap termasuk file tersembunyi (hidden)" },
      { cmd: "ls -lh", note: "Menampilkan ukuran file dalam format yang mudah dibaca (KB/MB/GB)" }
    ],
    flags: [
      { flag: "-l", desc: "Tampilan format list panjang (permission, owner, size, date)" },
      { flag: "-a", desc: "Tampilkan semua file termasuk file diawali titik (.dotfiles)" },
      { flag: "-h", desc: "Human readable file size (1K, 234M, 2G)" },
      { flag: "-t", desc: "Urutkan berdasarkan waktu modifikasi terbaru" },
      { flag: "-R", desc: "Tampilkan direktori secara rekursif hingga subfolder terdalam" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "cd",
    category: "Navigasi & File",
    syntax: "cd [direktori]",
    desc: "Berpindah direktori kerja (Change Directory).",
    examples: [
      { cmd: "cd /var/log", note: "Pindah ke path absolut /var/log" },
      { cmd: "cd ..", note: "Pindah satu level naik ke folder induk" },
      { cmd: "cd ~", note: "Kembali ke home direktori user aktif" },
      { cmd: "cd -", note: "Kembali ke direktori sebelumnya (toggle)" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "mkdir",
    category: "Navigasi & File",
    syntax: "mkdir [opsi] <nama_folder>",
    desc: "Membuat direktori/folder baru (Make Directory).",
    examples: [
      { cmd: "mkdir proyek-baru", note: "Buat satu folder" },
      { cmd: "mkdir -p app/src/components", note: "Buat seluruh pohon subdirektori sekaligus jika belum ada" }
    ],
    flags: [
      { flag: "-p", desc: "Buat parent folder secara otomatis jika belum tersedia" },
      { flag: "-m", desc: "Tentukan permission mode saat membuat folder" },
      { flag: "-v", desc: "Verbose: tampilkan pesan untuk setiap folder yang dibuat" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "rmdir",
    category: "Navigasi & File",
    syntax: "rmdir <nama_folder>",
    desc: "Menghapus direktori yang benar-benar kosong.",
    examples: [
      { cmd: "rmdir folder_kosong", note: "Hapus folder jika tidak ada isinya" }
    ],
    flags: [
      { flag: "-p", desc: "Hapus juga direktori induk jika menjadi kosong" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "tree",
    category: "Navigasi & File",
    syntax: "tree [opsi] [direktori]",
    desc: "Menampilkan struktur hierarki direktori dan file dalam format pohon visual.",
    examples: [
      { cmd: "tree", note: "Tampilkan struktur pohon folder saat ini" },
      { cmd: "tree -L 2", note: "Batasi kedalaman visualisasi hanya 2 level" }
    ],
    flags: [
      { flag: "-L level", desc: "Tentukan batas kedalaman level direktori" },
      { flag: "-a", desc: "Sertakan file dan folder tersembunyi" },
      { flag: "-d", desc: "Hanya tampilkan direktori, abaikan file" }
    ],
    difficulty: "Pemula"
  },

  // 2. Operasi File (Buat, Salin, Pindah, Hapus)
  {
    name: "touch",
    category: "Navigasi & File",
    syntax: "touch <nama_file>",
    desc: "Membuat file kosong baru atau memperbarui timestamp file yang sudah ada.",
    examples: [
      { cmd: "touch catatan.txt", note: "Buat file kosong baru" },
      { cmd: "touch file1.txt file2.txt file3.txt", note: "Buat banyak file sekaligus" }
    ],
    flags: [
      { flag: "-a", desc: "Ubah hanya waktu akses (access time)" },
      { flag: "-m", desc: "Ubah hanya waktu modifikasi (modification time)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "cp",
    category: "Navigasi & File",
    syntax: "cp [opsi] <sumber> <tujuan>",
    desc: "Menyalin file atau folder (Copy).",
    examples: [
      { cmd: "cp config.example.json config.json", note: "Salin file ke file baru" },
      { cmd: "cp -r src/ backup-src/", note: "Salin seluruh isi folder secara rekursif" }
    ],
    flags: [
      { flag: "-r / -R", desc: "Salin direktori secara rekursif beserta isinya" },
      { flag: "-i", desc: "Minta konfirmasi interaktif sebelum menimpa file" },
      { flag: "-v", desc: "Tampilkan penjelasan proses penyalinan (verbose)" },
      { flag: "-u", desc: "Salin hanya jika file sumber lebih baru daripada file tujuan" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "mv",
    category: "Navigasi & File",
    syntax: "mv [opsi] <sumber> <tujuan>",
    desc: "Memindahkan atau mengganti nama file/direktori (Move/Rename).",
    examples: [
      { cmd: "mv draft.txt final.txt", note: "Mengganti nama file" },
      { cmd: "mv photo.jpg /home/user/Pictures/", note: "Memindahkan file ke direktori lain" }
    ],
    flags: [
      { flag: "-i", desc: "Minta konfirmasi sebelum menimpa file yang ada" },
      { flag: "-n", desc: "Jangan menimpa file yang sudah ada (no-clobber)" },
      { flag: "-v", desc: "Jelaskan apa yang sedang dipindahkan" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "rm",
    category: "Navigasi & File",
    syntax: "rm [opsi] <target>",
    desc: "Menghapus file atau folder (Remove). Hati-hati, file di Linux terhapus permanen tanpa Recycle Bin!",
    examples: [
      { cmd: "rm log.txt", note: "Hapus satu file" },
      { cmd: "rm -rf folder_lama/", note: "Hapus folder dan seluruh isinya secara paksa tanpa konfirmasi" }
    ],
    flags: [
      { flag: "-r / -R", desc: "Hapus direktori beserta isinya secara rekursif" },
      { flag: "-f", desc: "Paksa (force) penghapusan tanpa prompt konfirmasi dan abaikan error" },
      { flag: "-i", desc: "Minta konfirmasi sebelum menghapus setiap file" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "ln",
    category: "Navigasi & File",
    syntax: "ln [opsi] <target> <link_name>",
    desc: "Membuat tautan (link) antar file: Hard Link atau Symbolic Link (Symlink).",
    examples: [
      { cmd: "ln -s /var/www/html /home/user/web", note: "Buat symlink (shortcut) ke folder web" },
      { cmd: "ln file_asli hardlink_file", note: "Buat hardlink file" }
    ],
    flags: [
      { flag: "-s", desc: "Buat Symbolic (Soft) Link, mirip shortcut di Windows" },
      { flag: "-f", desc: "Hapus file link yang ada jika nama bertabrakan" }
    ],
    difficulty: "Menengah"
  },

  // 3. Membaca & Manipulasi Teks
  {
    name: "cat",
    category: "Teks & Filter",
    syntax: "cat [opsi] [file...]",
    desc: "Menampilkan seluruh isi file ke terminal atau menggabungkan beberapa file (Concatenate).",
    examples: [
      { cmd: "cat /etc/os-release", note: "Membaca informasi distro Linux" },
      { cmd: "cat part1.txt part2.txt > full.txt", note: "Menggabungkan dua file jadi satu" }
    ],
    flags: [
      { flag: "-n", desc: "Beri nomor pada setiap baris output" },
      { flag: "-b", desc: "Beri nomor baris hanya pada baris yang tidak kosong" },
      { flag: "-E", desc: "Tampilkan tanda $ di setiap akhir baris" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "less",
    category: "Teks & Filter",
    syntax: "less <nama_file>",
    desc: "Penampil teks interaktif per halaman (pager). Lebih hemat memori daripada cat untuk file raksasa.",
    examples: [
      { cmd: "less /var/log/syslog", note: "Buka log besar. Tekan 'q' untuk keluar, '/' untuk mencari kata" }
    ],
    flags: [
      { flag: "-N", desc: "Tampilkan nomor baris di samping kiri" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "head",
    category: "Teks & Filter",
    syntax: "head [opsi] <nama_file>",
    desc: "Menampilkan baris-baris pertama dari suatu file (default: 10 baris pertama).",
    examples: [
      { cmd: "head data.csv", note: "Lihat 10 baris pertama" },
      { cmd: "head -n 25 access.log", note: "Lihat 25 baris teratas" }
    ],
    flags: [
      { flag: "-n N", desc: "Cetak N baris teratas" },
      { flag: "-c N", desc: "Cetak N byte pertama file" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "tail",
    category: "Teks & Filter",
    syntax: "tail [opsi] <nama_file>",
    desc: "Menampilkan baris-baris terakhir dari suatu file (default: 10 baris terakhir).",
    examples: [
      { cmd: "tail -n 20 error.log", note: "Lihat 20 baris terbawah" },
      { cmd: "tail -f /var/log/nginx/access.log", note: "Pantau penambahan log server secara real-time!" }
    ],
    flags: [
      { flag: "-f", desc: "Follow: pantau penambahan baris baru secara terus menerus (live stream)" },
      { flag: "-n N", desc: "Tampilkan N baris terakhir" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "grep",
    category: "Teks & Filter",
    syntax: "grep [opsi] 'pola' <file>",
    desc: "Mencari baris teks yang cocok dengan pola atau regex tertentu di dalam file.",
    examples: [
      { cmd: "grep '404' access.log", note: "Cari semua request HTTP 404 pada web log" },
      { cmd: "grep -ri 'db_password' /etc/app/", note: "Cari string rekursif tanpa case sensitive" }
    ],
    flags: [
      { flag: "-i", desc: "Abaikan huruf besar/kecil (case-insensitive)" },
      { flag: "-r / -R", desc: "Cari rekursif ke seluruh subfolder" },
      { flag: "-n", desc: "Tampilkan nomor baris tempat kata ditemukan" },
      { flag: "-v", desc: "Invert match: tampilkan baris yang TIDAK mengandung kata kunci" },
      { flag: "-c", desc: "Hitung total jumlah baris yang cocok" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "wc",
    category: "Teks & Filter",
    syntax: "wc [opsi] <file>",
    desc: "Menghitung jumlah baris, kata, dan byte/karakter pada file (Word Count).",
    examples: [
      { cmd: "wc file.txt", note: "Tampilkan baris, kata, dan karakter" },
      { cmd: "cat users.txt | wc -l", note: "Hitung total jumlah baris/pengguna" }
    ],
    flags: [
      { flag: "-l", desc: "Hanya hitung total baris (lines)" },
      { flag: "-w", desc: "Hanya hitung total kata (words)" },
      { flag: "-c", desc: "Hanya hitung total byte/karakter" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "sort",
    category: "Teks & Filter",
    syntax: "sort [opsi] <file>",
    desc: "Mengurutkan baris teks secara alfabetis atau numerik.",
    examples: [
      { cmd: "sort nama.txt", note: "Urutkan daftar nama A-Z" },
      { cmd: "sort -n -r skor.txt", note: "Urutkan angka dari tertinggi ke terendah" }
    ],
    flags: [
      { flag: "-n", desc: "Urutkan berdasarkan nilai angka (numerik)" },
      { flag: "-r", desc: "Balik urutan (reverse: Z-A atau terbesar ke terkecil)" },
      { flag: "-u", desc: "Hapus duplikat baris (unique)" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "uniq",
    category: "Teks & Filter",
    syntax: "uniq [opsi] [input [output]]",
    desc: "Menyaring atau melaporkan baris duplikat yang berurutan.",
    examples: [
      { cmd: "sort ip.txt | uniq", note: "Ambil daftar unik alamat IP" },
      { cmd: "sort log.txt | uniq -c", note: "Hitung frekuensi kemunculan setiap baris" }
    ],
    flags: [
      { flag: "-c", desc: "Hitung berapa kali setiap baris berulang" },
      { flag: "-d", desc: "Hanya tampilkan baris yang duplikat" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "sed",
    category: "Teks & Filter",
    syntax: "sed [opsi] 'ekspresi' <file>",
    desc: "Stream editor untuk menyaring dan memanipulasi teks secara dinamis (Find & Replace otomatis).",
    examples: [
      { cmd: "sed 's/localhost/192.168.1.100/g' config.txt", note: "Ganti semua kata localhost menjadi IP baru" },
      { cmd: "sed -i 's/debug = true/debug = false/g' settings.ini", note: "Ganti teks langsung di dalam file" }
    ],
    flags: [
      { flag: "-i", desc: "Simpan perubahan langsung ke file asli (in-place edit)" },
      { flag: "-e", desc: "Jalankan beberapa script command sekaligus" }
    ],
    difficulty: "Mahir"
  },
  {
    name: "awk",
    category: "Teks & Filter",
    syntax: "awk 'pola { aksi }' <file>",
    desc: "Bahasa pemrosesan pola dan ekstraksi kolom data teks yang sangat ampuh.",
    examples: [
      { cmd: "awk '{print $1, $3}' data.txt", note: "Cetak hanya kolom ke-1 dan kolom ke-3" },
      { cmd: "awk -F: '{print $1}' /etc/passwd", note: "Ekstrak semua username di sistem Linux" }
    ],
    flags: [
      { flag: "-F delimiter", desc: "Tentukan pembatas kolom (default: spasi/tab)" }
    ],
    difficulty: "Mahir"
  },
  {
    name: "echo",
    category: "Teks & Filter",
    syntax: "echo [opsi] [teks]",
    desc: "Mencetak teks atau variabel lingkungan ke terminal.",
    examples: [
      { cmd: "echo \"Halo Dunia\"", note: "Cetak string ke layar" },
      { cmd: "echo $USER", note: "Cetak nilai variabel lingkungan user" },
      { cmd: "echo \"server=10.0.0.1\" > config.env", note: "Tulis teks ke file dengan redirection (>)" }
    ],
    flags: [
      { flag: "-e", desc: "Aktifkan interpretasi escape sequence (seperti \\n untuk baris baru)" },
      { flag: "-n", desc: "Jangan tambahkan baris baru di akhir cetakan" }
    ],
    difficulty: "Pemula"
  },

  // 4. Hak Akses & Keamanan (Permissions & Ownership)
  {
    name: "chmod",
    category: "Hak Akses & Keamanan",
    syntax: "chmod [opsi] <mode> <file/folder>",
    desc: "Mengubah izin hak akses (permission) file atau folder (r=Read, w=Write, x=Execute).",
    examples: [
      { cmd: "chmod +x deploy.sh", note: "Beri izin eksekusi agar script bisa dijalankan" },
      { cmd: "chmod 755 app.py", note: "Owner: rwx (7), Group: r-x (5), Others: r-x (5)" },
      { cmd: "chmod 600 ~/.ssh/id_rsa", note: "Privat: hanya owner yang bisa membaca & menulis kunci SSH" }
    ],
    flags: [
      { flag: "-R", desc: "Ubah permission secara rekursif ke seluruh subfolder dan file" },
      { flag: "-v", desc: "Tampilkan detail setiap file yang diubah izinnya" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "chown",
    category: "Hak Akses & Keamanan",
    syntax: "chown [opsi] <owner>[:group] <file/folder>",
    desc: "Mengubah pemilik (owner) dan grup suatu file atau folder.",
    examples: [
      { cmd: "chown www-data /var/www/html", note: "Ganti pemilik ke user web server" },
      { cmd: "chown -R user:developers /opt/project", note: "Ganti owner dan grup secara rekursif" }
    ],
    flags: [
      { flag: "-R", desc: "Terapkan perubahan kepemilikan secara rekursif" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "chgrp",
    category: "Hak Akses & Keamanan",
    syntax: "chgrp [opsi] <group> <file>",
    desc: "Mengubah kepemilikan grup pada file atau folder.",
    examples: [
      { cmd: "chgrp sudo script.sh", note: "Ubah grup file menjadi sudo" }
    ],
    flags: [
      { flag: "-R", desc: "Ubah grup secara rekursif" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "sudo",
    category: "Hak Akses & Keamanan",
    syntax: "sudo [perintah]",
    desc: "Menjalankan perintah dengan hak istimewa superuser/root (Superuser Do).",
    examples: [
      { cmd: "sudo apt update", note: "Update daftar paket dengan izin root" },
      { cmd: "sudo systemctl restart nginx", note: "Restart service web server" }
    ],
    flags: [
      { flag: "-i", desc: "Buka shell interaktif root lengkap dengan environment root" },
      { flag: "-u user", desc: "Jalankan perintah sebagai user spesifik tertentu" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "su",
    category: "Hak Akses & Keamanan",
    syntax: "su [opsi] [username]",
    desc: "Beralih ke akun user lain (Switch User) atau masuk ke akun root.",
    examples: [
      { cmd: "su -", note: "Beralih menjadi root beserta variabel lingkungannya" },
      { cmd: "su - devuser", note: "Beralih ke akun user bernama devuser" }
    ],
    flags: [
      { flag: "-", desc: "Muat variabel lingkungan dari target user" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "passwd",
    category: "Hak Akses & Keamanan",
    syntax: "passwd [username]",
    desc: "Mengubah kata sandi akun pengguna.",
    examples: [
      { cmd: "passwd", note: "Ganti password akun Anda saat ini" },
      { cmd: "sudo passwd john", note: "Ganti password akun user 'john' oleh admin" }
    ],
    flags: [
      { flag: "-l", desc: "Kunci akun user (lock)" },
      { flag: "-u", desc: "Buka kunci akun (unlock)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "whoami",
    category: "Hak Akses & Keamanan",
    syntax: "whoami",
    desc: "Menampilkan nama pengguna yang sedang aktif di sesi terminal saat ini.",
    examples: [
      { cmd: "whoami", note: "Ketahui siapa user aktif (misal: user atau root)" }
    ],
    flags: [],
    difficulty: "Pemula"
  },

  // 5. Manajemen Proses & Monitoring Sistem
  {
    name: "ps",
    category: "Sistem & Proses",
    syntax: "ps [opsi]",
    desc: "Menampilkan snapshot proses-proses yang sedang berjalan di sistem (Process Status).",
    examples: [
      { cmd: "ps", note: "Tampilkan proses di terminal aktif" },
      { cmd: "ps aux", note: "Tampilkan SEMUA proses dari seluruh user di sistem secara detail" },
      { cmd: "ps -ef | grep python", note: "Cari proses python yang sedang aktif" }
    ],
    flags: [
      { flag: "a", desc: "Tampilkan proses milik semua user" },
      { flag: "u", desc: "Tampilkan user yang menjalankan beserta penggunaan CPU & Memori" },
      { flag: "x", desc: "Sertakan proses yang berjalan tanpa terminal (background daemons)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "top",
    category: "Sistem & Proses",
    syntax: "top",
    desc: "Task manager interaktif real-time di terminal untuk memantau CPU, RAM, dan proses aktif.",
    examples: [
      { cmd: "top", note: "Buka monitor sistem real-time (tekan 'q' untuk keluar, 'k' untuk kill proses)" }
    ],
    flags: [
      { flag: "-u user", desc: "Hanya pantau proses milik user tertentu" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "htop",
    category: "Sistem & Proses",
    syntax: "htop",
    desc: "Versi modern & berwarna dari top dengan tampilan bar visual, mouse support, dan shortcut navigasi.",
    examples: [
      { cmd: "htop", note: "Pantau CPU multi-core, memori bar, dan kelola proses dengan visual modern" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "kill",
    category: "Sistem & Proses",
    syntax: "kill [sinyal] <PID>",
    desc: "Mengirim sinyal ke proses tertentu berdasarkan nomor PID (Process ID).",
    examples: [
      { cmd: "kill 1234", note: "Kirim sinyal anggun SIGTERM (15) meminta proses berhenti normal" },
      { cmd: "kill -9 1234", note: "Kirim sinyal paksa SIGKILL (9) yang langsung mematikan proses seketika" }
    ],
    flags: [
      { flag: "-15", desc: "SIGTERM: Terminasi anggun (default)" },
      { flag: "-9", desc: "SIGKILL: Paksa bunuh proses tanpa ampun" },
      { flag: "-1", desc: "SIGHUP: Minta proses mereload file konfigurasi" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "killall",
    category: "Sistem & Proses",
    syntax: "killall [opsi] <nama_proses>",
    desc: "Menghentikan semua proses berdasarkan nama aplikasinya, bukan nomor PID.",
    examples: [
      { cmd: "killall firefox", note: "Matikan semua instance browser Firefox" },
      { cmd: "killall -9 node", note: "Paksa hentikan semua proses Node.js" }
    ],
    flags: [
      { flag: "-9", desc: "Kirim sinyal SIGKILL" },
      { flag: "-i", desc: "Minta konfirmasi sebelum mematikan proses" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "free",
    category: "Sistem & Proses",
    syntax: "free [opsi]",
    desc: "Menampilkan jumlah memori RAM dan Swap yang terpakai serta yang masih tersedia.",
    examples: [
      { cmd: "free -m", note: "Tampilkan dalam satuan Megabytes (MB)" },
      { cmd: "free -h", note: "Format mudah dibaca (Human readable: GB/MB)" }
    ],
    flags: [
      { flag: "-h", desc: "Tampilkan satuan dalam format human readable" },
      { flag: "-m", desc: "Tampilkan ukuran dalam Megabytes" },
      { flag: "-g", desc: "Tampilkan ukuran dalam Gigabytes" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "df",
    category: "Sistem & Proses",
    syntax: "df [opsi]",
    desc: "Memeriksa sisa ruang penyimpanan hard disk pada partisi filesystem (Disk Free).",
    examples: [
      { cmd: "df -h", note: "Cek kapasitas sisa disk dengan satuan GB/MB yang jelas" },
      { cmd: "df -Th", note: "Sertakan tipe filesystem (ext4, btrfs, xfs, vfat)" }
    ],
    flags: [
      { flag: "-h", desc: "Human readable (GB, MB)" },
      { flag: "-T", desc: "Tampilkan jenis filesystem" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "du",
    category: "Sistem & Proses",
    syntax: "du [opsi] [folder]",
    desc: "Memeriksa penggunaan ruang disk oleh direktori atau file tertentu (Disk Usage).",
    examples: [
      { cmd: "du -sh /var/log", note: "Cek total ukuran folder /var/log" },
      { cmd: "du -h --max-depth=1 /home/user", note: "Lihat ukuran masing-masing subfolder di dalam home" }
    ],
    flags: [
      { flag: "-s", desc: "Summary: hanya tampilkan total ukuran tanpa mendaftar file satu per satu" },
      { flag: "-h", desc: "Human readable (K, M, G)" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "uptime",
    category: "Sistem & Proses",
    syntax: "uptime",
    desc: "Menampilkan berapa lama sistem Linux sudah menyala sejak booting terakhir dan load average.",
    examples: [
      { cmd: "uptime", note: "Lihat jam sistem, durasi up, jumlah user aktif, dan load average 1/5/15 menit" },
      { cmd: "uptime -p", note: "Tampilan cantik ringkas (pretty)" }
    ],
    flags: [
      { flag: "-p", desc: "Pretty format (e.g. up 2 weeks, 3 days, 1 hour)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "uname",
    category: "Sistem & Proses",
    syntax: "uname [opsi]",
    desc: "Menampilkan informasi arsitektur kernel Linux dan sistem operasi.",
    examples: [
      { cmd: "uname -a", note: "Tampilkan semua info: nama OS, hostname, versi kernel, tanggal rilis, arsitektur x86_64" },
      { cmd: "uname -r", note: "Hanya tampilkan nomor rilis kernel" }
    ],
    flags: [
      { flag: "-a", desc: "Semua informasi lengkap (all)" },
      { flag: "-r", desc: "Kernel release" },
      { flag: "-m", desc: "Arsitektur mesin hardware (misal: x86_64, aarch64)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "systemctl",
    category: "Sistem & Proses",
    syntax: "systemctl [aksi] <nama_service>",
    desc: "Mengontrol dan mengelola layanan sistem (Systemd Service Manager).",
    examples: [
      { cmd: "sudo systemctl status nginx", note: "Cek status apakah web server aktif/berjalan" },
      { cmd: "sudo systemctl restart docker", note: "Restart service Docker" },
      { cmd: "sudo systemctl enable ssh", note: "Atur agar SSH otomatis menyala saat komputer dinyalakan (boot)" }
    ],
    flags: [],
    difficulty: "Menengah"
  },
  {
    name: "journalctl",
    category: "Sistem & Proses",
    syntax: "journalctl [opsi]",
    desc: "Membaca dan mencari log dari Systemd Journal.",
    examples: [
      { cmd: "journalctl -u nginx -f", note: "Pantau log service nginx secara live (stream)" },
      { cmd: "journalctl -xe", note: "Lihat log error sistem terbaru dengan penjelasan lengkap" }
    ],
    flags: [
      { flag: "-u service", desc: "Filter log unit service tertentu" },
      { flag: "-f", desc: "Follow / streaming log terbaru" },
      { flag: "-e", desc: "Langsung lompat ke baris log paling akhir" }
    ],
    difficulty: "Menengah"
  },

  // 6. Jaringan & Remote Server
  {
    name: "ip",
    category: "Jaringan & Remote",
    syntax: "ip [objek] [aksi]",
    desc: "Perintah modern untuk mengkonfigurasi dan menampilkan antarmuka jaringan, routing, dan device.",
    examples: [
      { cmd: "ip a", note: "Tampilkan semua alamat IP pada antarmuka jaringan (Address)" },
      { cmd: "ip route", note: "Tampilkan tabel routing gateway default" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "ping",
    category: "Jaringan & Remote",
    syntax: "ping [opsi] <tujuan>",
    desc: "Menguji konektivitas jaringan ke host atau server lain menggunakan paket ICMP Echo Request.",
    examples: [
      { cmd: "ping 8.8.8.8", note: "Cek koneksi internet ke DNS Google" },
      { cmd: "ping -c 4 google.com", note: "Kirim hanya 4 paket pengujian lalu berhenti" }
    ],
    flags: [
      { flag: "-c N", desc: "Kirim N jumlah paket ping lalu stop" },
      { flag: "-i detik", desc: "Interval jeda antar pengiriman paket" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "curl",
    category: "Jaringan & Remote",
    syntax: "curl [opsi] <url>",
    desc: "Mentransfer data dari atau ke server melalui berbagai protokol (HTTP, HTTPS, FTP, dll.).",
    examples: [
      { cmd: "curl https://api.ipify.org", note: "Dapatkan alamat IP publik Anda" },
      { cmd: "curl -I https://google.com", note: "Ambil hanya HTTP Header respons server" },
      { cmd: "curl -O https://example.com/file.zip", note: "Unduh file dan simpan dengan nama aslinya" }
    ],
    flags: [
      { flag: "-I", desc: "Tampilkan hanya header respons HTTP" },
      { flag: "-s", desc: "Silent mode (sembunyikan progress meter)" },
      { flag: "-O", desc: "Simpan output ke file dengan nama remote" },
      { flag: "-X METHOD", desc: "Tentukan HTTP method (GET, POST, PUT, DELETE)" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "wget",
    category: "Jaringan & Remote",
    syntax: "wget [opsi] <url>",
    desc: "Pengunduh file dari internet melalui terminal non-interaktif yang andal.",
    examples: [
      { cmd: "wget https://wordpress.org/latest.tar.gz", note: "Unduh arsip instalasi dari web" },
      { cmd: "wget -c https://example.com/bigfile.iso", note: "Lanjutkan download yang terputus (resume)" }
    ],
    flags: [
      { flag: "-c", desc: "Continue: lanjutkan unduhan file yang terputus sebelumnya" },
      { flag: "-b", desc: "Unduh di background" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "ssh",
    category: "Jaringan & Remote",
    syntax: "ssh [opsi] user@host",
    desc: "Masuk dan mengoperasikan server jarak jauh secara aman terenkripsi (Secure Shell).",
    examples: [
      { cmd: "ssh root@192.168.1.50", note: "Login ke server remote dengan IP lokal" },
      { cmd: "ssh -i ~/.ssh/id_rsa ubuntu@ec2-instance.aws", note: "Login menggunakan SSH Private Key" },
      { cmd: "ssh -p 2222 user@server.com", note: "Login ke port SSH non-standar (2222)" }
    ],
    flags: [
      { flag: "-p port", desc: "Tentukan port tujuan (default: 22)" },
      { flag: "-i keyfile", desc: "Gunakan private key identitas khusus" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "scp",
    category: "Jaringan & Remote",
    syntax: "scp [opsi] <sumber> <tujuan>",
    desc: "Menyalin file antar komputer secara aman melalui jaringan terenkripsi SSH (Secure Copy Protocol).",
    examples: [
      { cmd: "scp app.tar.gz root@10.0.0.5:/var/www/", note: "Upload file lokal ke server remote" },
      { cmd: "scp root@10.0.0.5:/var/log/syslog ./syslog-backup", note: "Download file dari server remote ke lokal" }
    ],
    flags: [
      { flag: "-r", desc: "Salin seluruh folder secara rekursif" },
      { flag: "-P port", desc: "Tentukan port SSH" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "ss",
    category: "Jaringan & Remote",
    syntax: "ss [opsi]",
    desc: "Memeriksa socket dan port jaringan yang sedang terbuka/listening (pengganti modern netstat).",
    examples: [
      { cmd: "ss -tulpn", note: "Tampilkan semua port TCP & UDP yang sedang listening beserta nomor PID aplikasinya" }
    ],
    flags: [
      { flag: "-t", desc: "Tampilkan port TCP" },
      { flag: "-u", desc: "Tampilkan port UDP" },
      { flag: "-l", desc: "Hanya tampilkan socket yang sedang listening" },
      { flag: "-p", desc: "Tampilkan nama proses dan PID" },
      { flag: "-n", desc: "Tampilkan angka numerik port tanpa menerjemahkan nama layanan" }
    ],
    difficulty: "Menengah"
  },

  // 7. Manajemen Paket (Package Management)
  {
    name: "apt",
    category: "Manajemen Paket",
    syntax: "apt [opsi] <perintah> [paket]",
    desc: "Manajer paket tingkat tinggi untuk distribusi keluarga Debian, Ubuntu, dan Linux Mint.",
    examples: [
      { cmd: "sudo apt update", note: "Perbarui katalog index daftar paket software dari server repository" },
      { cmd: "sudo apt upgrade", note: "Perbarui semua software yang terpasang ke versi terbaru" },
      { cmd: "sudo apt install git nginx", note: "Pasang software Git dan Nginx" },
      { cmd: "sudo apt remove --purge apache2", note: "Hapus software beserta seluruh konfigurasi" }
    ],
    flags: [
      { flag: "-y", desc: "Otomatis setujui prompt konfirmasi (yes) saat instalasi" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "dnf",
    category: "Manajemen Paket",
    syntax: "dnf [perintah] [paket]",
    desc: "Manajer paket generasi baru untuk keluarga Red Hat, Fedora, dan CentOS/Rocky Linux.",
    examples: [
      { cmd: "sudo dnf install htop", note: "Instal paket htop di Fedora/RHEL" },
      { cmd: "sudo dnf check-update", note: "Periksa apakah ada update software" }
    ],
    flags: [],
    difficulty: "Menengah"
  },
  {
    name: "pacman",
    category: "Manajemen Paket",
    syntax: "pacman [opsi] [paket]",
    desc: "Manajer paket ultra-cepat bawaan Arch Linux dan turunannya (Manjaro, EndeavourOS).",
    examples: [
      { cmd: "sudo pacman -Syu", note: "Sinkronisasi database repo dan update seluruh sistem (Full System Upgrade)" },
      { cmd: "sudo pacman -S neofetch", note: "Pasang software neofetch" },
      { cmd: "sudo pacman -Rns paket", note: "Hapus paket beserta dependency yang tidak terpakai" }
    ],
    flags: [
      { flag: "-S", desc: "Sync / install paket dari repository" },
      { flag: "-y", desc: "Download database paket terbaru dari server" },
      { flag: "-u", desc: "Upgrade paket yang sudah terpasang" }
    ],
    difficulty: "Menengah"
  },

  // 8. Arsip & Kompresi File
  {
    name: "tar",
    category: "Arsip & Kompresi",
    syntax: "tar [opsi] <arsip> [target]",
    desc: "Menggabungkan banyak file ke dalam satu file arsip pita (Tape Archive) dan mengompresnya.",
    examples: [
      { cmd: "tar -czvf backup.tar.gz /var/www", note: "Kompres folder menjadi arsip .tar.gz (gzip)" },
      { cmd: "tar -xzvf archive.tar.gz", note: "Ekstrak arsip .tar.gz ke direktori saat ini" },
      { cmd: "tar -tvf data.tar.gz", note: "Intip isi arsip tanpa mengekstraknya" }
    ],
    flags: [
      { flag: "-c", desc: "Create: buat arsip baru" },
      { flag: "-x", desc: "Extract: ekstrak isi arsip" },
      { flag: "-z", desc: "Gunakan kompresi gzip (.gz)" },
      { flag: "-j", desc: "Gunakan kompresi bzip2 (.bz2)" },
      { flag: "-v", desc: "Verbose: tampilkan daftar file yang sedang diproses" },
      { flag: "-f", desc: "File: tentukan nama file arsip target" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "zip",
    category: "Arsip & Kompresi",
    syntax: "zip [opsi] <hasil.zip> [file/folder]",
    desc: "Membuat file arsip berekstensi .zip yang kompatibel langsung dengan Windows.",
    examples: [
      { cmd: "zip -r arsip.zip folder_dokumen/", note: "Kompres seluruh isi folder menjadi ZIP" }
    ],
    flags: [
      { flag: "-r", desc: "Rekursif kompres seluruh subfolder" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "unzip",
    category: "Arsip & Kompresi",
    syntax: "unzip [opsi] <file.zip>",
    desc: "Mengekstrak file arsip berekstensi .zip.",
    examples: [
      { cmd: "unzip data.zip -d /home/user/extracted/", note: "Ekstrak ke folder tujuan spesifik" }
    ],
    flags: [
      { flag: "-d folder", desc: "Tentukan lokasi folder tujuan ekstraksi" }
    ],
    difficulty: "Pemula"
  },

  // 9. Pencarian & File System
  {
    name: "find",
    category: "Pencarian File",
    syntax: "find [path] [kriteria] [aksi]",
    desc: "Mencari file dan direktori di filesystem berdasarkan nama, ukuran, waktu, atau permission secara mendalam.",
    examples: [
      { cmd: "find . -name \"*.log\"", note: "Cari semua file berakhiran .log di folder ini dan subfoldernya" },
      { cmd: "find /var/www -type f -size +100M", note: "Cari file berukuran lebih besar dari 100 MB" },
      { cmd: "find /tmp -mtime +7 -delete", note: "Hapus file di /tmp yang tidak dimodifikasi selama 7 hari" }
    ],
    flags: [
      { flag: "-name pola", desc: "Cari berdasarkan nama file (case-sensitive)" },
      { flag: "-iname pola", desc: "Cari nama file tanpa peduli huruf besar/kecil" },
      { flag: "-type f/d", desc: "Filter tipe: f (file biasa), d (direktori)" },
      { flag: "-size +/-N", desc: "Filter ukuran file (+50M, -10k)" }
    ],
    difficulty: "Menengah"
  },
  {
    name: "which",
    category: "Pencarian File",
    syntax: "which <nama_program>",
    desc: "Menemukan lokasi path binary yang dieksekusi dari variabel environment PATH.",
    examples: [
      { cmd: "which python3", note: "Cari tahu di mana python3 terpasang (misal: /usr/bin/python3)" },
      { cmd: "which nginx", note: "Ketahui path executable nginx" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "file",
    category: "Pencarian File",
    syntax: "file <nama_file>",
    desc: "Mendeteksi dan menentukan tipe konten asli suatu file (tidak tertipu oleh ekstensi nama file).",
    examples: [
      { cmd: "file dokumen", note: "Deteksi apakah file adalah teks ASCII, gambar PNG, atau script ELF binary" }
    ],
    flags: [],
    difficulty: "Pemula"
  },

  // 10. Bash, Utility & Bonus Perintah Keren
  {
    name: "history",
    category: "Bash & Utility",
    syntax: "history [jumlah]",
    desc: "Menampilkan daftar riwayat perintah yang pernah Anda ketikkan di terminal sebelumnya.",
    examples: [
      { cmd: "history", note: "Lihat semua riwayat perintah dengan nomor urut" },
      { cmd: "!42", note: "Jalankan kembali perintah nomor 42" },
      { cmd: "!!", note: "Jalankan kembali perintah terakhir yang baru saja dieksekusi" }
    ],
    flags: [
      { flag: "-c", desc: "Bersihkan seluruh riwayat history sesi saat ini" }
    ],
    difficulty: "Pemula"
  },
  {
    name: "alias",
    category: "Bash & Utility",
    syntax: "alias nama='perintah asli'",
    desc: "Membuat singkatan atau nama panggilan khusus untuk perintah terminal yang panjang.",
    examples: [
      { cmd: "alias ll='ls -lah'", note: "Cukup ketik 'll' untuk menjalankan 'ls -lah'" },
      { cmd: "alias update='sudo apt update && sudo apt upgrade -y'", note: "Buat shortcut 1 kata untuk update sistem" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "crontab",
    category: "Bash & Utility",
    syntax: "crontab [opsi]",
    desc: "Mengatur jadwal eksekusi otomatis suatu script atau perintah pada waktu tertentu (Job Scheduler).",
    examples: [
      { cmd: "crontab -e", note: "Buka editor untuk menambah jadwal cron job baru" },
      { cmd: "crontab -l", note: "Lihat daftar jadwal cron job yang sedang aktif" }
    ],
    flags: [
      { flag: "-e", desc: "Edit tabel cron job" },
      { flag: "-l", desc: "List jadwal aktif" }
    ],
    difficulty: "Mahir"
  },
  {
    name: "neofetch",
    category: "Bash & Utility",
    syntax: "neofetch",
    desc: "Menampilkan logo distro Linux dalam ASCII art bersama spek OS, Kernel, Uptime, Shell, dan RAM.",
    examples: [
      { cmd: "neofetch", note: "Pamerkan info spesifikasi sistem Linux Anda" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "cowsay",
    category: "Bash & Utility",
    syntax: "cowsay [teks]",
    desc: "Program santai yang menampilkan gambar sapi ASCII berbicara mengucapkan pesan Anda.",
    examples: [
      { cmd: "cowsay \"Linux itu seru dan fleksibel!\"", note: "Sapi ASCII mengucapkan kalimat" }
    ],
    flags: [],
    difficulty: "Pemula"
  },
  {
    name: "clear",
    category: "Bash & Utility",
    syntax: "clear",
    desc: "Membersihkan layar terminal dari teks-teks sebelumnya (atau tekan Ctrl + L).",
    examples: [
      { cmd: "clear", note: "Bersihkan layar kembali rapi" }
    ],
    flags: [],
    difficulty: "Pemula"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LINUX_COMMANDS };
}
