/**
 * Linux Mastery - Kurikulum Lengkap Pembelajaran Linux (9 Modul Esensial)
 * Dibuat khusus dalam Bahasa Indonesia dengan pendekatan praktis & interaktif.
 */

const LINUX_CURRICULUM = [
  {
    id: "modul-1",
    title: "Modul 1: Fondasi & Arsitektur Linux",
    badge: "Dasar",
    duration: "25 Menit",
    summary: "Memahami mengapa Linux menguasai 90%+ server dunia, perbandingan Kernel vs Distro, dan anatomi sistem operasi.",
    content: `
      <div class="lesson-section">
        <h3>1. Mengapa Linux Sangat Populer & Penting?</h3>
        <p>
          Linux diciptakan pertama kali oleh <strong>Linus Torvalds</strong> pada tahun 1991 sebagai sistem operasi mirip UNIX (Unix-like) yang bersifat <em>Open Source</em>. Saat ini, Linux adalah fondasi dari:
        </p>
        <ul class="lesson-list">
          <li><strong>Cloud & Internet:</strong> Lebih dari 90% infrastruktur cloud dunia (AWS, Google Cloud, Azure) menggunakan Linux.</li>
          <li><strong>Superkomputer:</strong> 100% dari 500 superkomputer tercepat di dunia berjalan di atas Linux.</li>
          <li><strong>Perangkat Bergerak:</strong> Sistem operasi <em>Android</em> dibangun di atas Kernel Linux.</li>
          <li><strong>DevOps & Container:</strong> Docker dan Kubernetes dirancang secara native untuk Linux.</li>
        </ul>

        <div class="callout callout-info">
          <div class="callout-icon">💡</div>
          <div>
            <strong>Filosofi Inti UNIX / Linux:</strong>
            <em>"Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface."</em> (Doug McIlroy)
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>2. Lapisan Arsitektur Linux</h3>
        <p>Sistem operasi Linux tersusun atas 4 lapisan utama dari hardware hingga pengguna:</p>
        <div class="arch-diagram">
          <div class="arch-layer layer-user">
            <span class="layer-title">1. User Applications & GUI/CLI</span>
            <span class="layer-desc">Browser, Web Server (Nginx), Database (Postgres), Shell (Bash/Zsh)</span>
          </div>
          <div class="arch-layer layer-shell">
            <span class="layer-title">2. Shell & System Libraries (GNU Utilities)</span>
            <span class="layer-desc">Penerjemah perintah pengguna menjadi System Calls (glibc, bash, ls, cat)</span>
          </div>
          <div class="arch-layer layer-kernel">
            <span class="layer-title">3. Linux Kernel (Jantung Sistem)</span>
            <span class="layer-desc">Pengelola CPU, Memori RAM, Process Scheduler, Device Drivers, Network Stack</span>
          </div>
          <div class="arch-layer layer-hardware">
            <span class="layer-title">4. Hardware (Perangkat Keras)</span>
            <span class="layer-desc">Processor (x86_64, ARM), RAM, SSD/NVMe, Network Card (NIC)</span>
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. Memahami Pohon Keluarga Distribusi (Distro) Linux</h3>
        <p>
          "Linux" sejatinya hanyalah sebuah <strong>Kernel</strong>. Ketika Kernel digabungkan dengan tool GNU, manajer paket, desktop environment, dan aplikasi, jadilah <strong>Distribusi Linux (Distro)</strong>.
        </p>
        <div class="distro-grid">
          <div class="distro-card">
            <div class="distro-header">
              <span class="distro-badge debian">Debian Family</span>
              <h4>Debian / Ubuntu / Mint</h4>
            </div>
            <p><strong>Package Manager:</strong> <code>apt</code> (.deb)</p>
            <p>Paling ramah pemula, dokumentasi sangat melimpah, standar de-facto untuk server cloud dan AI deployment.</p>
          </div>

          <div class="distro-card">
            <div class="distro-header">
              <span class="distro-badge rhel">Red Hat Family</span>
              <h4>RHEL / Fedora / Rocky Linux</h4>
            </div>
            <p><strong>Package Manager:</strong> <code>dnf</code> / <code>rpm</code></p>
            <p>Standar industri enterprise korporasi perbankan, telekomunikasi, dan sertifikasi bergengsi (RHCSA).</p>
          </div>

          <div class="distro-card">
            <div class="distro-header">
              <span class="distro-badge arch">Arch Family</span>
              <h4>Arch Linux / Manjaro</h4>
            </div>
            <p><strong>Package Manager:</strong> <code>pacman</code></p>
            <p>Model <em>rolling-release</em> dengan software paling mutakhir (bleeding edge) dan repositori komunitas AUR.</p>
          </div>

          <div class="distro-card">
            <div class="distro-header">
              <span class="distro-badge security">Specialized</span>
              <h4>Alpine & Kali Linux</h4>
            </div>
            <p><strong>Alpine:</strong> Ukuran image hanya ~5MB, sangat populer untuk container Docker.</p>
            <p><strong>Kali:</strong> Sistem operasi standar dunia untuk ethical hacking dan penetration testing.</p>
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>Perintah Pertama Anda</h3>
        <p>Mari cek identitas sistem pada simulator terminal:</p>
        <div class="code-action-box">
          <code>uname -a</code>
          <button class="btn-try-cmd" data-cmd="uname -a">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-2",
    title: "Modul 2: Struktur Direktori Linux (FHS)",
    badge: "Fundamental",
    duration: "30 Menit",
    summary: "Filosofi 'Everything is a File' dan navigasi standar hierarki direktori root (/) tanpa huruf drive C: atau D:.",
    content: `
      <div class="lesson-section">
        <h3>1. Prinsip Utama: Tidak Ada Huruf Drive C:\\ atau D:\\</h3>
        <p>
          Berbeda dengan Windows yang memisahkan storage berdasarkan partisi huruf drive (<code>C:</code>, <code>D:</code>), Linux menyatukan seluruh media penyimpanan ke dalam <strong>satu pohon direktori tunggal</strong> yang berakar pada tanda slash <code>/</code> (disebut <strong>Root</strong>).
        </p>
        <p>
          Jika Anda mencolokkan flashdisk atau harddisk eksternal, Linux akan me-"mount" perangkat tersebut ke dalam folder tertentu (misalnya di <code>/mnt</code> atau <code>/media</code>).
        </p>

        <div class="callout callout-warning">
          <div class="callout-icon">⚠️</div>
          <div>
            <strong>Hati-hati dengan Istilah "Root":</strong>
            <ul style="margin: 4px 0 0 16px;">
              <li><code>/</code> : Direktori akar (Root Directory) - pangkal seluruh folder.</li>
              <li><code>/root</code> : Home folder milik pengguna Administrator (Superuser).</li>
              <li><code>root</code> : Akun administrator tertinggi dengan kekuasaan tanpa batas.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>2. Anatomi Filesystem Hierarchy Standard (FHS)</h3>
        <p>Berikut adalah folder-folder paling krusial di Linux dan fungsinya:</p>
        
        <div class="fhs-table-wrapper">
          <table class="fhs-table">
            <thead>
              <tr>
                <th>Direktori</th>
                <th>Nama / Kepanjangan</th>
                <th>Fungsi & Konten Utama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/bin</code></td>
                <td>User Binaries</td>
                <td>Program perintah penting yang bisa dijalankan semua user (contoh: <code>ls</code>, <code>cat</code>, <code>mkdir</code>).</td>
              </tr>
              <tr>
                <td><code>/sbin</code></td>
                <td>System Binaries</td>
                <td>Perintah penting khusus untuk administrasi sistem oleh root (contoh: <code>reboot</code>, <code>fdisk</code>, <code>iptables</code>).</td>
              </tr>
              <tr>
                <td><code>/etc</code></td>
                <td>Editable Text Configuration</td>
                <td>Pusat seluruh file konfigurasi sistem dan server (contoh: <code>/etc/passwd</code>, <code>/etc/nginx/</code>).</td>
              </tr>
              <tr>
                <td><code>/home</code></td>
                <td>Home Directories</td>
                <td>Folder pribadi untuk setiap user biasa (contoh: <code>/home/user/Documents</code>).</td>
              </tr>
              <tr>
                <td><code>/var</code></td>
                <td>Variable Data</td>
                <td>Data yang ukurannya terus bertambah secara dinamis, seperti file log (<code>/var/log</code>) dan cache.</td>
              </tr>
              <tr>
                <td><code>/tmp</code></td>
                <td>Temporary Files</td>
                <td>Penyimpanan file sementara. Otomatis dibersihkan saat komputer reboot.</td>
              </tr>
              <tr>
                <td><code>/dev</code></td>
                <td>Device Files</td>
                <td>Representasi perangkat keras sebagai file (contoh: <code>/dev/sda</code> untuk harddisk, <code>/dev/null</code> untuk black hole).</td>
              </tr>
              <tr>
                <td><code>/proc</code></td>
                <td>Process Information</td>
                <td>Filesystem virtual di memori RAM yang berisi informasi real-time kernel dan proses yang sedang berjalan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. Filosofi Emas: "Everything is a File"</h3>
        <p>
          Di Linux, hampir semua hal dianggap sebagai file: harddisk adalah file (<code>/dev/nvme0n1</code>), mouse adalah file, socket koneksi internet adalah file, bahkan status RAM adalah file (<code>/proc/meminfo</code>). Ini memungkinkan programmer menggunakan perintah baca/tulis teks sederhana untuk mengontrol hardware!
        </p>
        <div class="code-action-box">
          <code>cat /proc/version</code>
          <button class="btn-try-cmd" data-cmd="cat /proc/version">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-3",
    title: "Modul 3: Navigasi & Operasi File Lengkap",
    badge: "Praktik Inti",
    duration: "35 Menit",
    summary: "Menguasai perintah wajib sehari-hari: pwd, cd, ls, mkdir, touch, cp, mv, dan rm beserta wildcards.",
    content: `
      <div class="lesson-section">
        <h3>1. Mengetahui Posisi & Berpindah Direktori</h3>
        <p>Di Linux, Anda selalu bekerja dalam suatu <em>Current Working Directory</em>. Tiga perintah navigasi fundamental:</p>
        <ul class="lesson-list">
          <li><code>pwd</code> (Print Working Directory): Menampilkan lokasi Anda saat ini.</li>
          <li><code>ls</code> (List): Melihat file di folder. Selalu gunakan <code>ls -lah</code> untuk melihat ukuran dan izin file.</li>
          <li><code>cd</code> (Change Directory): Berpindah folder.</li>
        </ul>

        <h4>Jalur Absolut vs Jalur Relatif</h4>
        <div class="path-comparison">
          <div class="path-card">
            <h5>Jalur Absolut (Absolute Path)</h5>
            <p>Selalu diawali dengan tanda <code>/</code> dari akar sistem. Bekerja di mana pun Anda berada.</p>
            <code>cd /var/log/nginx</code>
          </div>
          <div class="path-card">
            <h5>Jalur Relatif (Relative Path)</h5>
            <p>Dihitung dari posisi Anda saat ini. Menggunakan <code>.</code> (folder saat ini) dan <code>..</code> (folder induk di atasnya).</p>
            <code>cd ../Downloads</code>
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>2. Operasi Membuat, Menyalin, dan Memindahkan File</h3>
        <p>Tabel perintah cepat manipulasi file dan folder:</p>
        <div class="table-simple">
          <table>
            <thead>
              <tr><th>Tindakan</th><th>Perintah</th><th>Keterangan</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Buat File Kosong</td>
                <td><code>touch server.js</code></td>
                <td>Membuat file baru jika belum ada</td>
              </tr>
              <tr>
                <td>Buat Folder Bersarang</td>
                <td><code>mkdir -p app/api/v1</code></td>
                <td>Opsi <code>-p</code> membuat seluruh induk folder otomatis</td>
              </tr>
              <tr>
                <td>Salin Folder</td>
                <td><code>cp -r source/ backup/</code></td>
                <td>Opsi <code>-r</code> (rekursif) wajib untuk folder</td>
              </tr>
              <tr>
                <td>Ganti Nama / Pindah</td>
                <td><code>mv draft.txt final.txt</code></td>
                <td>Perintah <code>mv</code> digunakan baik untuk rename maupun memindahkan</td>
              </tr>
              <tr>
                <td>Hapus Berkas Permanen</td>
                <td><code>rm -rf folder_sampah/</code></td>
                <td><strong>Hati-hati!</strong> Tidak ada prompt konfirmasi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. Karakter Sakti Wildcard (*, ?, [])</h3>
        <p>Gunakan wildcard untuk memproses ribuan file sekaligus dengan satu ketikan:</p>
        <ul class="lesson-list">
          <li><code>*</code> : Cocok dengan 0 atau lebih sembarang karakter. Contoh: <code>ls *.jpg</code> akan menampilkan semua file gambar JPG.</li>
          <li><code>?</code> : Cocok dengan tepat 1 karakter. Contoh: <code>cat file?.txt</code> mencocokkan file1.txt, fileA.txt.</li>
          <li><code>[abc]</code> : Cocok dengan salah satu karakter dalam kurung siku.</li>
        </ul>

        <div class="code-action-box">
          <code>ls -la</code>
          <button class="btn-try-cmd" data-cmd="ls -la">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-4",
    title: "Modul 4: Pipa, Redirection & Pemrosesan Teks",
    badge: "Kekuatan Shell",
    duration: "40 Menit",
    summary: "Menggabungkan beberapa perintah dengan Pipe (|), membelokkan output dengan >, >>, dan menyaring log dengan grep.",
    content: `
      <div class="lesson-section">
        <h3>1. Tiga Aliran Standar (Standard Streams)</h3>
        <p>Setiap program Linux yang berjalan memiliki 3 saluran data:</p>
        <ul class="lesson-list">
          <li><strong>stdin (0)</strong> - Standard Input: Data yang masuk (biasanya dari ketikan keyboard).</li>
          <li><strong>stdout (1)</strong> - Standard Output: Output normal program yang dicetak ke layar terminal.</li>
          <li><strong>stderr (2)</strong> - Standard Error: Pesan error/kesalahan jika terjadi kegagalan.</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>2. Redirection: Mengalirkan Teks ke File</h3>
        <p>Anda bisa mengalihkan output terminal langsung ke dalam file tanpa membuka text editor:</p>
        <div class="redirection-grid">
          <div class="redir-item">
            <code>command > file.txt</code>
            <p><strong>Menimpa (Overwrite):</strong> Menghapus isi file lama dan menggantinya dengan output baru.</p>
          </div>
          <div class="redir-item">
            <code>command >> file.txt</code>
            <p><strong>Menambahkan (Append):</strong> Menambahkan output baru di baris paling bawah tanpa menghapus data lama.</p>
          </div>
          <div class="redir-item">
            <code>command 2> error.log</code>
            <p><strong>Pisahkan Error:</strong> Hanya mengalirkan pesan error (stderr) ke dalam file log.</p>
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. The Power of Pipe (|)</h3>
        <p>
          Simbol pipa <code>|</code> adalah fitur paling revolusioner di UNIX. Pipa mengambil <strong>stdout</strong> dari perintah di sebelah kiri dan menjadikannya sebagai <strong>stdin</strong> bagi perintah di sebelah kanan!
        </p>
        <div class="pipe-diagram">
          <code>cat access.log | grep "404" | wc -l</code>
          <p><em>Artinya: Baca seluruh log -> Saring hanya baris yang berisi error 404 -> Hitung berapa kali error 404 terjadi!</em></p>
        </div>
      </div>

      <div class="lesson-section">
        <h3>4. Senjata Menyaring Teks: grep, head, tail</h3>
        <p>Sangat berguna untuk sysadmin dan developer dalam membaca file log server raksasa:</p>
        <ul class="lesson-list">
          <li><code>grep -i "error" /var/log/syslog</code> : Cari kata 'error' tanpa peduli huruf besar/kecil.</li>
          <li><code>tail -f /var/log/nginx/access.log</code> : Pantau lalu lintas pengunjung server secara real-time detik ini juga.</li>
          <li><code>cat /etc/passwd | cut -d: -f1</code> : Ekstrak daftar username di sistem.</li>
        </ul>

        <div class="code-action-box">
          <code>cat /etc/passwd | grep user</code>
          <button class="btn-try-cmd" data-cmd="cat /etc/passwd | grep user">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-5",
    title: "Modul 5: Hak Akses File & Keamanan (Permissions)",
    badge: "Keamanan",
    duration: "40 Menit",
    summary: "Membedah kode misterius rwxr-xr-x, menghitung nilai oktal (755, 644), chmod, chown, dan superuser sudo.",
    content: `
      <div class="lesson-section">
        <h3>1. Tiga Kategori Pengguna & Tiga Jenis Izin</h3>
        <p>Setiap file di Linux memiliki izin akses terpisah untuk 3 kategori orang:</p>
        <div class="perm-users-grid">
          <div class="perm-user-box">
            <span class="user-role">u (Owner/User)</span>
            <p>Orang yang membuat atau memiliki file tersebut.</p>
          </div>
          <div class="perm-user-box">
            <span class="user-role">g (Group)</span>
            <p>Kelompok pengguna yang diberi hak bersama.</p>
          </div>
          <div class="perm-user-box">
            <span class="user-role">o (Others)</span>
            <p>Semua orang lain di seluruh sistem dunia.</p>
          </div>
        </div>

        <p>Masing-masing kategori memiliki kombinasi izin <code>rwx</code>:</p>
        <ul class="lesson-list">
          <li><strong>r (Read):</strong> Nilai = <strong>4</strong>. Izin membuka dan membaca isi file (atau melihat daftar isi folder).</li>
          <li><strong>w (Write):</strong> Nilai = <strong>2</strong>. Izin mengubah, mengedit, atau menghapus file.</li>
          <li><strong>x (Execute):</strong> Nilai = <strong>1</strong>. Izin mengeksekusi file sebagai program script (atau masuk ke dalam folder).</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>2. Membaca String Permission: <code>-rwxr-xr--</code></h3>
        <div class="perm-breakdown">
          <div class="p-char type"><span>-</span><small>Tipe File</small></div>
          <div class="p-char user"><span>rwx</span><small>Owner (7)</small></div>
          <div class="p-char group"><span>r-x</span><small>Group (5)</small></div>
          <div class="p-char others"><span>r--</span><small>Others (4)</small></div>
        </div>
        <p style="text-align: center; margin-top: 8px;">Nilai Oktal Total = <strong>754</strong></p>
      </div>

      <div class="lesson-section">
        <h3>3. Rumus Standar Izin di Dunia Nyata</h3>
        <div class="table-simple">
          <table>
            <thead>
              <tr><th>Kode</th><th>String</th><th>Penggunaan Umum & Standar</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>755</code></td>
                <td><code>rwxr-xr-x</code></td>
                <td>Standar file script yang bisa dieksekusi dan folder publik. Owner bebas ubah, orang lain hanya bisa baca & jalankan.</td>
              </tr>
              <tr>
                <td><code>644</code></td>
                <td><code>rw-r--r--</code></td>
                <td>Standar file dokumen, file HTML/CSS, gambar. Owner bisa edit, orang lain hanya baca.</td>
              </tr>
              <tr>
                <td><code>600</code></td>
                <td><code>rw-------</code></td>
                <td>Kerahasiaan tinggi! Kunci SSH (<code>id_rsa</code>) atau file database credential. Hanya owner yang boleh akses.</td>
              </tr>
              <tr>
                <td><code>777</code></td>
                <td><code>rwxrwxrwx</code></td>
                <td><strong>BAHAYA BESAR!</strong> Siapa saja di internet bisa merusak atau menyuntikkan malware. Jangan pernah gunakan di server produksi!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="lesson-section">
        <h3>4. Mengubah Izin dengan chmod & chown</h3>
        <div class="code-action-box">
          <code>chmod 755 /home/user/project/script.sh</code>
          <button class="btn-try-cmd" data-cmd="chmod 755 /home/user/project/script.sh">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-6",
    title: "Modul 6: Manajemen Proses & Monitoring Sistem",
    badge: "DevOps & Admin",
    duration: "45 Menit",
    summary: "Memahami Process ID (PID), monitoring CPU/RAM secara live dengan top & htop, serta menghentikan proses beku dengan kill.",
    content: `
      <div class="lesson-section">
        <h3>1. Apa itu Proses di Linux?</h3>
        <p>
          Setiap program, perintah, atau script yang sedang dieksekusi disebut <strong>Proses</strong>. Kernel Linux memberikan nomor tanda pengenal unik ke setiap proses yang disebut <strong>PID (Process ID)</strong>.
        </p>
        <p>
          Proses pertama yang lahir saat komputer menyala adalah PID 1 (biasanya <code>systemd</code> atau <code>init</code>), yang merupakan induk dari seluruh proses lain di sistem.
        </p>
      </div>

      <div class="lesson-section">
        <h3>2. Melihat Proses: ps, top, dan htop</h3>
        <ul class="lesson-list">
          <li><code>ps aux</code> : Mengambil foto instan (snapshot) seluruh proses yang sedang hidup di sistem.</li>
          <li><code>top</code> : Task manager interaktif real-time di terminal yang mengurutkan proses berdasarkan penggunaan CPU tertinggi.</li>
          <li><code>htop</code> : Versi modern dari top dengan visualisasi grafik batang warna, penggunaan multi-core, dan navigasi panah keyboard.</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>3. Menghentikan Proses dengan Sinyal (Signals)</h3>
        <p>
          Ketika program membeku (hang) atau menghabiskan 100% memori, Anda bisa mengirimkan sinyal penghentian menggunakan perintah <code>kill</code>:
        </p>
        <div class="signal-cards">
          <div class="signal-card term">
            <h5>SIGTERM (Sinyal 15) - default</h5>
            <code>kill 1234</code>
            <p>Pemberhentian sopan. Memberi kesempatan pada aplikasi untuk menyimpan data dan menutup koneksi database sebelum exit.</p>
          </div>
          <div class="signal-card kill">
            <h5>SIGKILL (Sinyal 9) - Force Stop</h5>
            <code>kill -9 1234</code>
            <p>Pemberhentian paksa seketika oleh kernel! Aplikasi tidak diberi kesempatan bernapas. Gunakan jika proses benar-benar macet.</p>
          </div>
        </div>
      </div>

      <div class="lesson-section">
        <h3>4. Foreground, Background, dan Job Control</h3>
        <p>
          Jika Anda menjalankan perintah yang butuh waktu lama (misalnya backup 50GB), jangan biarkan terminal Anda terkunci:
        </p>
        <ul class="lesson-list">
          <li>Tambahkan simbol <code>&</code> di akhir perintah untuk menjalankannya di background: <code>python app.py &</code>.</li>
          <li>Tekan <code>Ctrl + Z</code> untuk mem-pause (suspend) proses yang sedang aktif.</li>
          <li>Ketik <code>bg</code> untuk melanjutkan proses yang di-pause di background.</li>
          <li>Ketik <code>fg</code> untuk menarik proses background kembali ke layar terminal utama.</li>
        </ul>

        <div class="code-action-box">
          <code>ps aux</code>
          <button class="btn-try-cmd" data-cmd="ps aux">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-7",
    title: "Modul 7: Jaringan, Remote SSH & Firewall",
    badge: "Jaringan Server",
    duration: "40 Menit",
    summary: "Cek konfigurasi IP, troubleshooting koneksi internet, remote login server dengan SSH, dan transfer data antar mesin.",
    content: `
      <div class="lesson-section">
        <h3>1. Memeriksa Alamat IP & Antarmuka Jaringan</h3>
        <p>Perintah lama <code>ifconfig</code> kini telah digantikan oleh perintah modern <code>ip</code>:</p>
        <ul class="lesson-list">
          <li><code>ip a</code> (atau <code>ip addr</code>): Menampilkan seluruh interface jaringan (misal: <code>eth0</code> untuk kabel LAN, <code>wlan0</code> untuk Wi-Fi, <code>lo</code> untuk loopback localhost).</li>
          <li><code>ip route</code>: Menampilkan gateway default router Anda.</li>
        </ul>
      </div>

      <div class="lesson-section">
        <h3>2. Toolkit Diagnostik Koneksi</h3>
        <div class="table-simple">
          <table>
            <thead>
              <tr><th>Perintah</th><th>Fungsi Utama</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>ping -c 4 8.8.8.8</code></td>
                <td>Menguji latensi dan apakah paket ICMP sampai ke server tujuan</td>
              </tr>
              <tr>
                <td><code>curl -I https://google.com</code></td>
                <td>Memeriksa response header HTTP/HTTPS dari server web</td>
              </tr>
              <tr>
                <td><code>ss -tulpn</code></td>
                <td>Melihat port TCP/UDP apa saja yang sedang dibuka dan didengarkan (listening) oleh server Anda</td>
              </tr>
              <tr>
                <td><code>nslookup domain.com</code></td>
                <td>Cek alamat IP yang terhubung dengan domain melalui DNS query</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. Remote Server dengan SSH (Secure Shell)</h3>
        <p>
          SSH adalah standar industri untuk mengendalikan server cloud (AWS, Linode, DigitalOcean) dari laptop Anda:
        </p>
        <div class="code-block-explanation">
          <code>ssh username@alamat-ip-server</code>
          <p>Login menggunakan kunci terenkripsi (SSH Key) jauh lebih aman daripada menggunakan password yang rentan terhadap serangan brute force:</p>
          <code>ssh-keygen -t ed25519 -C "admin@perusahaan.com"</code>
        </div>
      </div>

      <div class="lesson-section">
        <h3>Coba Cek Interface Jaringan Simulator</h3>
        <div class="code-action-box">
          <code>ip a</code>
          <button class="btn-try-cmd" data-cmd="ip a">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-8",
    title: "Modul 8: Manajemen Paket & Software",
    badge: "Instalasi",
    duration: "30 Menit",
    summary: "Cara kerja repository Linux, memasang software dengan apt, dnf, pacman, serta format masa kini Snap dan Flatpak.",
    content: `
      <div class="lesson-section">
        <h3>1. Konsep Repository: "App Store"-nya Linux</h3>
        <p>
          Di Windows, orang terbiasa mengunduh file <code>.exe</code> dari website sembarang yang rentan virus. Di Linux, software dikelola melalui <strong>Package Manager</strong> yang mengunduh software dari server resmi terpercaya yang disebut <strong>Repository</strong>.
        </p>
        <p>
          Package manager bertugas menghitung dan mengunduh seluruh dependensi (library pendukung) yang dibutuhkan aplikasi secara otomatis.
        </p>
      </div>

      <div class="lesson-section">
        <h3>2. Perbandingan Perintah Manajer Paket Antar Distro</h3>
        <div class="table-simple">
          <table>
            <thead>
              <tr><th>Tindakan</th><th>Debian / Ubuntu (APT)</th><th>RHEL / Fedora (DNF)</th><th>Arch Linux (Pacman)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Update Katalog Index</td>
                <td><code>sudo apt update</code></td>
                <td><code>sudo dnf check-update</code></td>
                <td><code>sudo pacman -Sy</code></td>
              </tr>
              <tr>
                <td>Instal Software Baru</td>
                <td><code>sudo apt install nginx</code></td>
                <td><code>sudo dnf install nginx</code></td>
                <td><code>sudo pacman -S nginx</code></td>
              </tr>
              <tr>
                <td>Upgrade Seluruh Sistem</td>
                <td><code>sudo apt upgrade -y</code></td>
                <td><code>sudo dnf upgrade</code></td>
                <td><code>sudo pacman -Syu</code></td>
              </tr>
              <tr>
                <td>Hapus Software</td>
                <td><code>sudo apt remove nginx</code></td>
                <td><code>sudo dnf remove nginx</code></td>
                <td><code>sudo pacman -R nginx</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. Uji Coba Simulasi Instalasi Paket</h3>
        <p>Di simulator ini, Anda bisa mencoba menginstal paket seperti <code>neofetch</code> atau <code>cowsay</code> secara nyata!</p>
        <div class="code-action-box">
          <code>apt install neofetch</code>
          <button class="btn-try-cmd" data-cmd="apt install neofetch">Coba di Terminal</button>
        </div>
      </div>
    `
  },
  {
    id: "modul-9",
    title: "Modul 9: Bash Scripting & Otomasi Sistem",
    badge: "Otomasi",
    duration: "50 Menit",
    summary: "Menulis script Bash pertama, penggunaan variabel, logika if-else, perulangan for/while, dan cron job otomatis.",
    content: `
      <div class="lesson-section">
        <h3>1. Apa itu Bash Script?</h3>
        <p>
          Bash script adalah file teks yang berisi rangkaian perintah Linux yang dieksekusi secara berurutan. Ini adalah senjata utama para DevOps dan Sysadmin untuk mengotomatiskan backup database, deploy aplikasi, dan monitoring server.
        </p>
        <p>
          Setiap file script bash selalu diawali dengan baris sakti yang disebut <strong>Shebang</strong>:
        </p>
        <div class="script-snippet">
          <pre><code>#!/bin/bash
# Ini adalah komentar
echo "Script otomatisasi sedang berjalan..."
DATE=$(date +%Y-%m-%d)
echo "Tanggal hari ini: $DATE"</code></pre>
        </div>
      </div>

      <div class="lesson-section">
        <h3>2. Variabel & Logika Percabangan (If - Else)</h3>
        <p>Contoh skenario: Cek apakah folder backup sudah tersedia atau belum:</p>
        <div class="script-snippet">
          <pre><code>#!/bin/bash

BACKUP_DIR="/var/backups/web"

if [ -d "$BACKUP_DIR" ]; then
    echo "Folder backup ditemukan, memulai penyalinan..."
else
    echo "Folder belum ada. Membuat folder baru..."
    mkdir -p "$BACKUP_DIR"
fi</code></pre>
        </div>
      </div>

      <div class="lesson-section">
        <h3>3. Penjadwalan Otomatis dengan Cron Job</h3>
        <p>
          Gunakan perintah <code>crontab -e</code> untuk mengatur jadwal eksekusi script tanpa campur tangan manusia. Sintaks cron terdiri dari 5 bintang:
        </p>
        <div class="cron-explanation">
          <div class="cron-stars">
            <code>*  *  *  *  *  /path/ke/script.sh</code>
          </div>
          <div class="cron-legend">
            <span>Menit (0-59)</span> | <span>Jam (0-23)</span> | <span>Tanggal (1-31)</span> | <span>Bulan (1-12)</span> | <span>Hari (0-6)</span>
          </div>
        </div>
        <p style="margin-top: 10px;">
          Contoh: <code>0 2 * * * /backup.sh</code> akan mengeksekusi script backup setiap hari tepat pukul 02:00 dini hari!
        </p>
      </div>

      <div class="lesson-section">
        <h3>Uji Coba Script Demo di Terminal</h3>
        <div class="code-action-box">
          <code>cat /home/user/project/script.sh</code>
          <button class="btn-try-cmd" data-cmd="cat /home/user/project/script.sh">Coba di Terminal</button>
        </div>
      </div>
    `
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LINUX_CURRICULUM };
}
