/**
 * Linux Mastery - Interactive Virtual Terminal & Filesystem Engine (VFS)
 * Emulasi Terminal Bash Linux lengkap dengan VFS, History, Auto-complete, Redirection, & Pipes.
 */

class VirtualFileSystem {
  constructor() {
    this.root = this.createInitialFileSystem();
    this.currentPath = "/home/user";
    this.currentUser = "user";
    this.installedPackages = new Set(["base-utils", "bash", "coreutils", "grep", "tar"]);
  }

  createInitialFileSystem() {
    return {
      name: "",
      type: "dir",
      perms: "drwxr-xr-x",
      owner: "root",
      group: "root",
      children: {
        bin: {
          name: "bin",
          type: "dir",
          perms: "drwxr-xr-x",
          owner: "root",
          group: "root",
          children: {
            ls: { name: "ls", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: ls]" },
            cat: { name: "cat", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: cat]" },
            mkdir: { name: "mkdir", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: mkdir]" },
            rm: { name: "rm", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: rm]" },
            echo: { name: "echo", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: echo]" },
            pwd: { name: "pwd", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: pwd]" },
            chmod: { name: "chmod", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: chmod]" },
            grep: { name: "grep", type: "file", perms: "-rwxr-xr-x", owner: "root", group: "root", content: "[binary executable: grep]" }
          }
        },
        etc: {
          name: "etc",
          type: "dir",
          perms: "drwxr-xr-x",
          owner: "root",
          group: "root",
          children: {
            hostname: {
              name: "hostname",
              type: "file",
              perms: "-rw-r--r--",
              owner: "root",
              group: "root",
              content: "linux-mastery-node"
            },
            "os-release": {
              name: "os-release",
              type: "file",
              perms: "-rw-r--r--",
              owner: "root",
              group: "root",
              content: "NAME=\"Ubuntu\"\nVERSION=\"24.04 LTS (Noble Numbat)\"\nID=ubuntu\nID_LIKE=debian\nPRETTY_NAME=\"Ubuntu 24.04 LTS\"\nVERSION_ID=\"24.04\"\nHOME_URL=\"https://www.ubuntu.com/\""
            },
            passwd: {
              name: "passwd",
              type: "file",
              perms: "-rw-r--r--",
              owner: "root",
              group: "root",
              content: "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nuser:x:1000:1000:Linux Student,,,:/home/user:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nsyslog:x:104:110::/home/syslog:/usr/sbin/nologin"
            },
            "resolv.conf": {
              name: "resolv.conf",
              type: "file",
              perms: "-rw-r--r--",
              owner: "root",
              group: "root",
              content: "nameserver 8.8.8.8\nnameserver 1.1.1.1"
            },
            nginx: {
              name: "nginx",
              type: "dir",
              perms: "drwxr-xr-x",
              owner: "root",
              group: "root",
              children: {
                "nginx.conf": {
                  name: "nginx.conf",
                  type: "file",
                  perms: "-rw-r--r--",
                  owner: "root",
                  group: "root",
                  content: "events { worker_connections 1024; }\nhttp {\n  server {\n    listen 80;\n    server_name localhost;\n    root /var/www/html;\n  }\n}"
                }
              }
            }
          }
        },
        home: {
          name: "home",
          type: "dir",
          perms: "drwxr-xr-x",
          owner: "root",
          group: "root",
          children: {
            user: {
              name: "user",
              type: "dir",
              perms: "drwxr-xr-x",
              owner: "user",
              group: "user",
              children: {
                "welcome.txt": {
                  name: "welcome.txt",
                  type: "file",
                  perms: "-rw-r--r--",
                  owner: "user",
                  group: "user",
                  content: "=== SELAMAT DATANG DI SIMULATOR LINUX MASTERY ===\n\nPlatform ini dirancang untuk latihan perintah terminal Linux interaktif.\nKetik 'help' untuk panduan perintah yang tersedia.\nKetik 'neofetch' untuk melihat informasi sistem.\nKunjungi tab 'Misi Praktik' untuk menyelesaikan tantangan berhadiah XP!"
                },
                "catatan.txt": {
                  name: "catatan.txt",
                  type: "file",
                  perms: "-rw-r--r--",
                  owner: "user",
                  group: "user",
                  content: "Checklist Hari Ini:\n[x] Pahami hierarki direktori Linux\n[ ] Kuasai chmod dan permission octal\n[ ] Coba redirection pipe (|)\n[ ] Selesaikan Lab 1 sampai 5"
                },
                project: {
                  name: "project",
                  type: "dir",
                  perms: "drwxr-xr-x",
                  owner: "user",
                  group: "user",
                  children: {
                    "script.sh": {
                      name: "script.sh",
                      type: "file",
                      perms: "-rw-r--r--", // Belum executable (practice chmod!)
                      owner: "user",
                      group: "user",
                      content: "#!/bin/bash\necho '=== Script Backup Otomatis Dimulai ==='\necho 'Status: Direktori /var/www berhasil disinkronkan.'\necho 'Backup selesai tanpa hambatan!'"
                    }
                  }
                },
                Downloads: { name: "Downloads", type: "dir", perms: "drwxr-xr-x", owner: "user", group: "user", children: {} },
                Documents: { name: "Documents", type: "dir", perms: "drwxr-xr-x", owner: "user", group: "user", children: {} }
              }
            }
          }
        },
        var: {
          name: "var",
          type: "dir",
          perms: "drwxr-xr-x",
          owner: "root",
          group: "root",
          children: {
            log: {
              name: "log",
              type: "dir",
              perms: "drwxr-xr-x",
              owner: "root",
              group: "root",
              children: {
                syslog: {
                  name: "syslog",
                  type: "file",
                  perms: "-rw-r-----",
                  owner: "syslog",
                  group: "adm",
                  content: "Nov 18 12:00:01 linux-mastery CRON[942]: (root) CMD (test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.daily; })\nNov 18 12:01:15 linux-mastery systemd[1]: Starting Network Time Synchronization...\nNov 18 12:01:16 linux-mastery systemd[1]: Started Network Time Synchronization.\nNov 18 12:02:40 linux-mastery sshd[1042]: Accepted publickey for user from 192.168.1.10 port 49822 ssh2\nNov 18 12:03:10 linux-mastery nginx[1280]: 192.168.1.15 - - [18/Nov/2026:12:03:10 +0700] \"GET / HTTP/1.1\" 200 612\nNov 18 12:03:12 linux-mastery nginx[1280]: 192.168.1.55 - - [18/Nov/2026:12:03:12 +0700] \"GET /admin/db.php HTTP/1.1\" 404 153"
                },
                "auth.log": {
                  name: "auth.log",
                  type: "file",
                  perms: "-rw-r-----",
                  owner: "syslog",
                  group: "adm",
                  content: "Nov 18 12:02:40 linux-mastery sshd[1042]: Accepted publickey for user from 192.168.1.10 port 49822 ssh2\nNov 18 12:05:01 linux-mastery sudo: user : TTY=pts/0 ; PWD=/home/user ; USER=root ; COMMAND=/usr/bin/apt update"
                }
              }
            },
            www: {
              name: "www",
              type: "dir",
              perms: "drwxr-xr-x",
              owner: "www-data",
              group: "www-data",
              children: {
                html: {
                  name: "html",
                  type: "dir",
                  perms: "drwxr-xr-x",
                  owner: "www-data",
                  group: "www-data",
                  children: {
                    "index.html": {
                      name: "index.html",
                      type: "file",
                      perms: "-rw-r--r--",
                      owner: "www-data",
                      group: "www-data",
                      content: "<!DOCTYPE html>\n<html>\n<head><title>Selamat Datang di Nginx!</title></head>\n<body>\n<h1>Website Linux Berhasil Berjalan!</h1>\n<p>Server web online dan beroperasi normal.</p>\n</body>\n</html>"
                    }
                  }
                }
              }
            }
          }
        },
        tmp: {
          name: "tmp",
          type: "dir",
          perms: "drwxrwxrwt",
          owner: "root",
          group: "root",
          children: {
            "session.tmp": {
              name: "session.tmp",
              type: "file",
              perms: "-rw-rw-r--",
              owner: "user",
              group: "user",
              content: "SESSION_ID=a89f928c117b"
            }
          }
        },
        proc: {
          name: "proc",
          type: "dir",
          perms: "dr-xr-xr-x",
          owner: "root",
          group: "root",
          children: {
            version: {
              name: "version",
              type: "file",
              perms: "-r--r--r--",
              owner: "root",
              group: "root",
              content: "Linux version 6.8.0-generic (buildd@linux-mastery) (gcc 13.2.0) #1 SMP PREEMPT_DYNAMIC Wed Nov 18 2026"
            },
            cpuinfo: {
              name: "cpuinfo",
              type: "file",
              perms: "-r--r--r--",
              owner: "root",
              group: "root",
              content: "processor\t: 0\nmodel name\t: AMD Ryzen 9 / Virtual Cloud vCPU @ 3.40GHz\ncpu MHz\t\t: 3399.980\ncache size\t: 16384 KB\ncpu cores\t: 4"
            },
            meminfo: {
              name: "meminfo",
              type: "file",
              perms: "-r--r--r--",
              owner: "root",
              group: "root",
              content: "MemTotal:        8163584 kB\nMemFree:         4823120 kB\nMemAvailable:    6310240 kB\nBuffers:          218932 kB\nCached:          1894210 kB\nSwapTotal:       2097148 kB\nSwapFree:        2097148 kB"
            }
          }
        }
      }
    };
  }

  // Normalisasi path absolut dari path string
  resolvePath(pathStr) {
    if (!pathStr || pathStr === "") return this.currentPath;
    if (pathStr === "~") return "/home/user";
    if (pathStr.startsWith("~/")) {
      pathStr = "/home/user/" + pathStr.slice(2);
    }

    let isAbsolute = pathStr.startsWith("/");
    let parts = (isAbsolute ? pathStr : this.currentPath + "/" + pathStr).split("/").filter(Boolean);
    let resolved = [];

    for (let part of parts) {
      if (part === ".") continue;
      if (part === "..") {
        if (resolved.length > 0) resolved.pop();
      } else {
        resolved.push(part);
      }
    }

    return "/" + resolved.join("/");
  }

  // Dapatkan node (file atau direktori) berdasarkan path
  getNode(pathStr) {
    let resolved = this.resolvePath(pathStr);
    if (resolved === "/") return this.root;

    let parts = resolved.split("/").filter(Boolean);
    let current = this.root;

    for (let part of parts) {
      if (!current.children || !current.children[part]) {
        return null;
      }
      current = current.children[part];
    }
    return current;
  }

  // Dapatkan parent node dan nama anak
  getParentNode(pathStr) {
    let resolved = this.resolvePath(pathStr);
    if (resolved === "/") return null;

    let parts = resolved.split("/").filter(Boolean);
    let name = parts.pop();
    let parentPath = "/" + parts.join("/");
    let parentNode = this.getNode(parentPath);

    return { parentNode, name, resolvedPath: resolved };
  }

  // Buat direktori
  makeDir(pathStr, recursive = false) {
    let resolved = this.resolvePath(pathStr);
    if (resolved === "/") return { success: false, msg: "mkdir: cannot create directory '/': File exists" };

    let parts = resolved.split("/").filter(Boolean);
    let current = this.root;

    for (let i = 0; i < parts.length; i++) {
      let part = parts[i];
      if (!current.children[part]) {
        if (i === parts.length - 1 || recursive) {
          current.children[part] = {
            name: part,
            type: "dir",
            perms: "drwxr-xr-x",
            owner: this.currentUser,
            group: this.currentUser,
            children: {}
          };
        } else {
          return { success: false, msg: `mkdir: cannot create directory '${pathStr}': No such file or directory` };
        }
      } else if (current.children[part].type !== "dir") {
        return { success: false, msg: `mkdir: cannot create directory '${pathStr}': Not a directory` };
      }
      current = current.children[part];
    }
    return { success: true };
  }

  // Buat atau timpa file
  writeFile(pathStr, content = "", append = false) {
    let { parentNode, name } = this.getParentNode(pathStr);
    if (!parentNode || parentNode.type !== "dir") {
      return { success: false, msg: `No such file or directory: ${pathStr}` };
    }

    if (parentNode.children[name]) {
      let node = parentNode.children[name];
      if (node.type === "dir") {
        return { success: false, msg: `Is a directory: ${pathStr}` };
      }
      if (append) {
        node.content = (node.content ? node.content + "\n" : "") + content;
      } else {
        node.content = content;
      }
    } else {
      parentNode.children[name] = {
        name: name,
        type: "file",
        perms: "-rw-r--r--",
        owner: this.currentUser,
        group: this.currentUser,
        content: content
      };
    }
    return { success: true };
  }

  // Hapus file atau direktori
  removeNode(pathStr, recursive = false, force = false) {
    let { parentNode, name } = this.getParentNode(pathStr);
    if (!parentNode || !parentNode.children[name]) {
      if (force) return { success: true };
      return { success: false, msg: `rm: cannot remove '${pathStr}': No such file or directory` };
    }

    let target = parentNode.children[name];
    if (target.type === "dir" && !recursive) {
      return { success: false, msg: `rm: cannot remove '${pathStr}': Is a directory (use -r)` };
    }

    delete parentNode.children[name];
    return { success: true };
  }

  // Salin file/folder
  copyNode(srcPath, destPath, recursive = false) {
    let srcNode = this.getNode(srcPath);
    if (!srcNode) return { success: false, msg: `cp: cannot stat '${srcPath}': No such file or directory` };

    if (srcNode.type === "dir" && !recursive) {
      return { success: false, msg: `cp: -r not specified; omitting directory '${srcPath}'` };
    }

    let deepClone = (node, newName) => {
      let clone = { ...node, name: newName || node.name };
      if (node.children) {
        clone.children = {};
        for (let childKey in node.children) {
          clone.children[childKey] = deepClone(node.children[childKey]);
        }
      }
      return clone;
    };

    let destNode = this.getNode(destPath);
    if (destNode && destNode.type === "dir") {
      destNode.children[srcNode.name] = deepClone(srcNode, srcNode.name);
      return { success: true };
    }

    let { parentNode, name } = this.getParentNode(destPath);
    if (!parentNode) return { success: false, msg: `cp: cannot create regular file '${destPath}': No such file or directory` };
    parentNode.children[name] = deepClone(srcNode, name);
    return { success: true };
  }

  // Pindah / ganti nama
  moveNode(srcPath, destPath) {
    let cpRes = this.copyNode(srcPath, destPath, true);
    if (!cpRes.success) return cpRes;
    this.removeNode(srcPath, true, true);
    return { success: true };
  }
}

class LinuxTerminal {
  constructor(containerElement, vfs) {
    this.container = containerElement;
    this.vfs = vfs || new VirtualFileSystem();
    this.history = [];
    this.historyIndex = -1;
    this.soundEnabled = true;
    this.onCommandExecuted = null; // Callback event listener untuk hands-on lab validator
    
    // Process table simulation
    this.processes = [
      { pid: 1, user: "root", cpu: "0.0", mem: "0.2", time: "0:04", cmd: "/sbin/init splash" },
      { pid: 102, user: "root", cpu: "0.0", mem: "0.4", time: "0:01", cmd: "/lib/systemd/systemd-journald" },
      { pid: 412, user: "root", cpu: "0.0", mem: "0.3", time: "0:00", cmd: "/usr/sbin/sshd -D" },
      { pid: 680, user: "root", cpu: "0.0", mem: "0.1", time: "0:00", cmd: "/usr/sbin/cron -f" },
      { pid: 1042, user: "user", cpu: "0.1", mem: "0.8", time: "0:02", cmd: "-bash" },
      { pid: 1205, user: "user", cpu: "88.6", mem: "12.4", time: "2:45", cmd: "python3 /tmp/crypto_miner.py" }
    ];

    this.initDOM();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="terminal-wrapper">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="dot dot-red" title="Tutup"></span>
            <span class="dot dot-yellow" title="Minimize"></span>
            <span class="dot dot-green" title="Maximize"></span>
          </div>
          <div class="terminal-title">
            <span class="term-icon">🐧</span> user@linux-mastery: <span class="term-header-pwd">~</span> (bash)
          </div>
          <div class="terminal-actions">
            <button class="term-btn btn-sound-toggle" title="Suara Terminal (Aktif/Nonaktif)">🔊</button>
            <button class="term-btn btn-term-clear" title="Bersihkan Layar (clear)">🧹 Clear</button>
          </div>
        </div>
        <div class="terminal-body" id="term-body">
          <div class="terminal-output" id="term-output">
            <div class="term-welcome-msg">
              <span class="text-neon">Linux Mastery v2.5 Interactive Web Lab (GNU/Linux 6.8.0-generic)</span><br>
              Ketik <span class="cmd-highlight">help</span> untuk daftar perintah, <span class="cmd-highlight">neofetch</span> untuk info sistem.<br>
              Gunakan panah <kbd>↑</kbd> <kbd>↓</kbd> untuk history, dan <kbd>Tab</kbd> untuk autocomplete otomatis.
            </div>
          </div>
          <div class="terminal-input-row">
            <span class="terminal-prompt" id="term-prompt">user@linux-mastery:~$</span>
            <div class="input-container">
              <input type="text" id="term-input" class="terminal-input" autocomplete="off" spellcheck="false" autofocus />
            </div>
          </div>
        </div>
      </div>
    `;

    this.outputElem = this.container.querySelector("#term-output");
    this.inputElem = this.container.querySelector("#term-input");
    this.promptElem = this.container.querySelector("#term-prompt");
    this.pwdHeaderElem = this.container.querySelector(".term-header-pwd");
    this.bodyElem = this.container.querySelector("#term-body");

    this.attachEventListeners();
    this.updatePrompt();
  }

  playBeep() {
    if (!this.soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }

  attachEventListeners() {
    this.bodyElem.addEventListener("click", () => {
      this.inputElem.focus();
    });

    this.container.querySelector(".btn-sound-toggle").addEventListener("click", (e) => {
      this.soundEnabled = !this.soundEnabled;
      e.target.textContent = this.soundEnabled ? "🔊" : "🔇";
      this.printLine(`<span class="text-dim">Suara efek terminal: ${this.soundEnabled ? 'Aktif' : 'Mati'}</span>`);
    });

    this.container.querySelector(".btn-term-clear").addEventListener("click", () => {
      this.executeCommand("clear");
    });

    this.inputElem.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let cmd = this.inputElem.value.trim();
        this.inputElem.value = "";
        if (cmd) {
          this.history.push(cmd);
          this.historyIndex = this.history.length;
        }
        this.printPromptCommand(cmd);
        if (cmd) {
          this.executeCommand(cmd);
        }
        this.scrollToBottom();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (this.history.length > 0 && this.historyIndex > 0) {
          this.historyIndex--;
          this.inputElem.value = this.history[this.historyIndex];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.inputElem.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.inputElem.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        this.handleTabAutocomplete();
      }
    });
  }

  handleTabAutocomplete() {
    let currentInput = this.inputElem.value;
    let parts = currentInput.split(" ");
    
    // Command autocomplete
    if (parts.length === 1) {
      let prefix = parts[0];
      let commands = [
        "ls", "cd", "pwd", "mkdir", "rm", "rmdir", "touch", "cp", "mv",
        "cat", "less", "head", "tail", "grep", "wc", "chmod", "chown",
        "whoami", "uname", "hostname", "uptime", "ps", "top", "kill", "free",
        "df", "ip", "ping", "curl", "wget", "apt", "tree", "clear", "history",
        "neofetch", "cowsay", "echo", "help", "man"
      ];
      let matches = commands.filter(c => c.startsWith(prefix));
      if (matches.length === 1) {
        this.inputElem.value = matches[0] + " ";
      } else if (matches.length > 1) {
        this.printLine(`<div class="term-tab-matches">${matches.join("   ")}</div>`);
      }
    } else {
      // Filename autocomplete
      let prefix = parts[parts.length - 1];
      let currentNode = this.vfs.getNode(this.vfs.currentPath);
      if (currentNode && currentNode.children) {
        let fileList = Object.keys(currentNode.children);
        let matches = fileList.filter(f => f.startsWith(prefix));
        if (matches.length === 1) {
          parts[parts.length - 1] = matches[0];
          this.inputElem.value = parts.join(" ");
        } else if (matches.length > 1) {
          this.printLine(`<div class="term-tab-matches">${matches.join("   ")}</div>`);
        }
      }
    }
  }

  updatePrompt() {
    let displayPath = this.vfs.currentPath;
    if (displayPath === "/home/user") displayPath = "~";
    else if (displayPath.startsWith("/home/user/")) {
      displayPath = "~/" + displayPath.slice("/home/user/".length);
    }
    this.promptElem.innerHTML = `<span class="prompt-user">${this.vfs.currentUser}@linux-mastery</span>:<span class="prompt-path">${displayPath}</span>$`;
    this.pwdHeaderElem.textContent = displayPath;
  }

  printPromptCommand(cmd) {
    let displayPath = this.vfs.currentPath === "/home/user" ? "~" : this.vfs.currentPath;
    this.outputElem.innerHTML += `
      <div class="term-cmd-history-row">
        <span class="prompt-user">${this.vfs.currentUser}@linux-mastery</span>:<span class="prompt-path">${displayPath}</span>$ <span class="history-cmd">${this.escapeHTML(cmd)}</span>
      </div>
    `;
  }

  printLine(htmlContent) {
    this.outputElem.innerHTML += `<div class="term-output-line">${htmlContent}</div>`;
  }

  scrollToBottom() {
    this.bodyElem.scrollTop = this.bodyElem.scrollHeight;
  }

  escapeHTML(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Eksekutor Perintah Terminal
  executeCommand(rawCommandLine) {
    this.playBeep();
    let trimmed = rawCommandLine.trim();
    if (!trimmed) return;

    // Cek Pipe (|)
    if (trimmed.includes("|")) {
      return this.handlePipeCommand(trimmed);
    }

    // Cek Redirection (>> atau >)
    let appendRedir = trimmed.includes(">>");
    let overwriteRedir = !appendRedir && trimmed.includes(">");

    if (appendRedir || overwriteRedir) {
      let sep = appendRedir ? ">>" : ">";
      let [cmdPart, filePart] = trimmed.split(sep);
      cmdPart = cmdPart.trim();
      let targetFile = filePart.trim();

      if (!targetFile) {
        this.printLine(`<span class="term-err">bash: syntax error near unexpected token 'newline'</span>`);
        return;
      }

      // Ambil output perintah secara virtual
      let outputText = this.runCommandDirect(cmdPart, true);
      let writeRes = this.vfs.writeFile(targetFile, outputText, appendRedir);
      if (!writeRes.success) {
        this.printLine(`<span class="term-err">bash: ${writeRes.msg}</span>`);
      }
      this.triggerEvent(trimmed);
      return;
    }

    let output = this.runCommandDirect(trimmed, false);
    if (output) {
      this.printLine(output);
    }
    this.triggerEvent(trimmed);
  }

  handlePipeCommand(pipeLine) {
    let stages = pipeLine.split("|").map(s => s.trim());
    let currentInput = this.runCommandDirect(stages[0], true);

    for (let i = 1; i < stages.length; i++) {
      let stage = stages[i];
      let [cmd, ...args] = stage.split(" ").filter(Boolean);

      if (cmd === "grep") {
        let pattern = args[0] ? args[0].replace(/['"]/g, "") : "";
        let lines = currentInput.split("\n");
        let matched = lines.filter(l => l.toLowerCase().includes(pattern.toLowerCase()));
        currentInput = matched.join("\n");
      } else if (cmd === "wc") {
        let lines = currentInput.split("\n").filter(l => l.length > 0);
        if (args.includes("-l")) {
          currentInput = `${lines.length}`;
        } else {
          currentInput = `${lines.length} lines`;
        }
      } else if (cmd === "head") {
        let count = 10;
        let nIdx = args.indexOf("-n");
        if (nIdx !== -1 && args[nIdx + 1]) count = parseInt(args[nIdx + 1]);
        currentInput = currentInput.split("\n").slice(0, count).join("\n");
      } else if (cmd === "tail") {
        let count = 10;
        let nIdx = args.indexOf("-n");
        if (nIdx !== -1 && args[nIdx + 1]) count = parseInt(args[nIdx + 1]);
        let lines = currentInput.split("\n");
        currentInput = lines.slice(Math.max(0, lines.length - count)).join("\n");
      } else if (cmd === "sort") {
        let lines = currentInput.split("\n");
        lines.sort();
        if (args.includes("-r")) lines.reverse();
        currentInput = lines.join("\n");
      }
    }

    this.printLine(this.escapeHTML(currentInput).replace(/\n/g, "<br>"));
    this.triggerEvent(pipeLine);
  }

  triggerEvent(cmdStr) {
    if (typeof this.onCommandExecuted === "function") {
      this.onCommandExecuted({
        command: cmdStr,
        vfs: this.vfs,
        processes: this.processes
      });
    }
  }

  // Evaluasi Perintah Satuan
  runCommandDirect(cmdLine, captureRaw = false) {
    let tokens = cmdLine.split(" ").filter(Boolean);
    let cmd = tokens[0];
    let args = tokens.slice(1);

    switch (cmd) {
      case "help":
        return this.cmdHelp();
      case "clear":
        this.outputElem.innerHTML = "";
        return "";
      case "pwd":
        return captureRaw ? this.vfs.currentPath : `<span class="term-out">${this.vfs.currentPath}</span>`;
      case "whoami":
        return captureRaw ? this.vfs.currentUser : `<span class="term-out">${this.vfs.currentUser}</span>`;
      case "hostname":
        return captureRaw ? "linux-mastery" : `<span class="term-out">linux-mastery</span>`;
      case "uname":
        let unOut = "Linux linux-mastery 6.8.0-generic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux";
        return captureRaw ? unOut : `<span class="term-out">${unOut}</span>`;
      case "date":
        let dStr = new Date().toUTCString();
        return captureRaw ? dStr : `<span class="term-out">${dStr}</span>`;
      case "uptime":
        let upOut = " 12:15:32 up 14 days,  3:22,  2 users,  load average: 0.12, 0.08, 0.05";
        return captureRaw ? upOut : `<span class="term-out">${upOut}</span>`;
      case "cd":
        return this.cmdCd(args[0]);
      case "ls":
        return this.cmdLs(args, captureRaw);
      case "mkdir":
        return this.cmdMkdir(args);
      case "touch":
        return this.cmdTouch(args);
      case "cat":
        return this.cmdCat(args, captureRaw);
      case "rm":
        return this.cmdRm(args);
      case "cp":
        return this.cmdCp(args);
      case "mv":
        return this.cmdMv(args);
      case "echo":
        return this.cmdEcho(args, captureRaw);
      case "grep":
        return this.cmdGrep(args, captureRaw);
      case "wc":
        return this.cmdWc(args, captureRaw);
      case "chmod":
        return this.cmdChmod(args);
      case "ps":
        return this.cmdPs(args, captureRaw);
      case "kill":
        return this.cmdKill(args);
      case "free":
        return this.cmdFree(args);
      case "df":
        return this.cmdDf(args);
      case "ip":
      case "ifconfig":
        return this.cmdIp(args);
      case "ping":
        return this.cmdPing(args);
      case "curl":
        return this.cmdCurl(args);
      case "apt":
        return this.cmdApt(args);
      case "neofetch":
        return this.cmdNeofetch();
      case "cowsay":
        return this.cmdCowsay(args);
      case "tree":
        return this.cmdTree(args[0]);
      case "history":
        return this.cmdHistory();
      case "man":
        return this.cmdMan(args[0]);
      default:
        return `<span class="term-err">${cmd}: command not found. Ketik 'help' untuk daftar perintah.</span>`;
    }
  }

  cmdHelp() {
    return `
      <div class="term-help-box">
        <strong>DAFTAR PERINTAH LINUX YANG DIDUKUNG DI LAB:</strong><br>
        <div class="help-columns">
          <div>
            <span class="text-neon">Navigasi & File:</span><br>
            <code>pwd</code>, <code>cd</code>, <code>ls [-la]</code>, <code>mkdir [-p]</code>, <code>touch</code>, <code>rm [-rf]</code>, <code>cp [-r]</code>, <code>mv</code>, <code>tree</code>
          </div>
          <div>
            <span class="text-neon">Membaca & Filter:</span><br>
            <code>cat</code>, <code>grep</code>, <code>wc [-l]</code>, <code>echo</code>, <code>| (pipe)</code>, <code>> / >> (redirection)</code>
          </div>
          <div>
            <span class="text-neon">Sistem & Keamanan:</span><br>
            <code>chmod</code>, <code>ps [aux]</code>, <code>kill [PID]</code>, <code>whoami</code>, <code>uname [-a]</code>, <code>free [-m]</code>, <code>df [-h]</code>, <code>uptime</code>
          </div>
          <div>
            <span class="text-neon">Jaringan & Paket:</span><br>
            <code>ip a</code>, <code>ping</code>, <code>curl</code>, <code>apt [update/install]</code>, <code>neofetch</code>, <code>cowsay</code>, <code>clear</code>, <code>history</code>, <code>man</code>
          </div>
        </div>
      </div>
    `;
  }

  cmdCd(target) {
    if (!target || target === "~") {
      this.vfs.currentPath = "/home/user";
      this.updatePrompt();
      return "";
    }
    let node = this.vfs.getNode(target);
    if (!node) {
      return `<span class="term-err">bash: cd: ${target}: No such file or directory</span>`;
    }
    if (node.type !== "dir") {
      return `<span class="term-err">bash: cd: ${target}: Not a directory</span>`;
    }
    this.vfs.currentPath = this.vfs.resolvePath(target);
    this.updatePrompt();
    return "";
  }

  cmdLs(args, captureRaw) {
    let showAll = args.some(a => a.startsWith("-") && a.includes("a"));
    let showLong = args.some(a => a.startsWith("-") && a.includes("l"));
    let target = args.find(a => !a.startsWith("-")) || "";

    let node = this.vfs.getNode(target);
    if (!node) return `<span class="term-err">ls: cannot access '${target}': No such file or directory</span>`;

    if (node.type === "file") {
      return captureRaw ? node.name : `<span class="term-file">${node.name}</span>`;
    }

    let files = Object.keys(node.children);
    if (!showAll) {
      files = files.filter(f => !f.startsWith("."));
    }
    files.sort();

    if (captureRaw) {
      return files.join("\n");
    }

    if (showLong) {
      let rows = files.map(fname => {
        let child = node.children[fname];
        let isDir = child.type === "dir";
        let perms = child.perms || (isDir ? "drwxr-xr-x" : "-rw-r--r--");
        let size = isDir ? "4096" : (child.content ? child.content.length : "0");
        let date = "Nov 18 12:00";
        let classColor = isDir ? "term-dir" : (child.perms && child.perms.includes("x") ? "term-exec" : "term-file");
        return `<div class="ls-long-row"><span class="perm-str">${perms}</span> 1 ${child.owner} ${child.group} <span class="size-col">${size.padStart(5, ' ')}</span> ${date} <span class="${classColor}">${fname}</span></div>`;
      });
      return `<div class="ls-long-table">${rows.join("")}</div>`;
    }

    let listHtml = files.map(fname => {
      let child = node.children[fname];
      let isDir = child.type === "dir";
      let classColor = isDir ? "term-dir" : (child.perms && child.perms.includes("x") ? "term-exec" : "term-file");
      return `<span class="${classColor}">${fname}${isDir ? '/' : ''}</span>`;
    });
    return `<div class="ls-grid">${listHtml.join("   ")}</div>`;
  }

  cmdMkdir(args) {
    let recursive = args.includes("-p");
    let targets = args.filter(a => !a.startsWith("-"));
    if (targets.length === 0) return `<span class="term-err">mkdir: missing operand</span>`;

    for (let t of targets) {
      let res = this.vfs.makeDir(t, recursive);
      if (!res.success) return `<span class="term-err">${res.msg}</span>`;
    }
    return "";
  }

  cmdTouch(args) {
    if (args.length === 0) return `<span class="term-err">touch: missing file operand</span>`;
    for (let filename of args) {
      if (filename.startsWith("-")) continue;
      this.vfs.writeFile(filename, "", true);
    }
    return "";
  }

  cmdCat(args, captureRaw) {
    let files = args.filter(a => !a.startsWith("-"));
    if (files.length === 0) return `<span class="term-err">cat: missing file operand</span>`;

    let outputs = [];
    for (let f of files) {
      let node = this.vfs.getNode(f);
      if (!node) return `<span class="term-err">cat: ${f}: No such file or directory</span>`;
      if (node.type === "dir") return `<span class="term-err">cat: ${f}: Is a directory</span>`;
      outputs.push(node.content || "");
    }
    let res = outputs.join("\n");
    return captureRaw ? res : `<div class="term-cat-out">${this.escapeHTML(res).replace(/\n/g, "<br>")}</div>`;
  }

  cmdRm(args) {
    let recursive = args.some(a => a.startsWith("-") && a.includes("r"));
    let force = args.some(a => a.startsWith("-") && a.includes("f"));
    let targets = args.filter(a => !a.startsWith("-"));

    if (targets.length === 0) return `<span class="term-err">rm: missing operand</span>`;
    for (let t of targets) {
      let res = this.vfs.removeNode(t, recursive, force);
      if (!res.success) return `<span class="term-err">${res.msg}</span>`;
    }
    return "";
  }

  cmdCp(args) {
    let recursive = args.some(a => a.startsWith("-") && a.includes("r"));
    let nonFlags = args.filter(a => !a.startsWith("-"));
    if (nonFlags.length < 2) return `<span class="term-err">cp: missing destination file operand after '${nonFlags[0] || ''}'</span>`;

    let src = nonFlags[0];
    let dest = nonFlags[1];
    let res = this.vfs.copyNode(src, dest, recursive);
    if (!res.success) return `<span class="term-err">${res.msg}</span>`;
    return "";
  }

  cmdMv(args) {
    let nonFlags = args.filter(a => !a.startsWith("-"));
    if (nonFlags.length < 2) return `<span class="term-err">mv: missing destination file operand</span>`;
    let res = this.vfs.moveNode(nonFlags[0], nonFlags[1]);
    if (!res.success) return `<span class="term-err">${res.msg}</span>`;
    return "";
  }

  cmdEcho(args, captureRaw) {
    let str = args.join(" ").replace(/^['"]|['"]$/g, "");
    return captureRaw ? str : `<span class="term-out">${this.escapeHTML(str)}</span>`;
  }

  cmdGrep(args, captureRaw) {
    if (args.length < 2) return `<span class="term-err">Usage: grep [pattern] [file]</span>`;
    let pattern = args[0].replace(/['"]/g, "");
    let file = args[1];

    let node = this.vfs.getNode(file);
    if (!node) return `<span class="term-err">grep: ${file}: No such file or directory</span>`;
    if (node.type === "dir") return `<span class="term-err">grep: ${file}: Is a directory</span>`;

    let lines = (node.content || "").split("\n");
    let matched = lines.filter(l => l.toLowerCase().includes(pattern.toLowerCase()));
    if (captureRaw) return matched.join("\n");

    if (matched.length === 0) return "";
    let highlighted = matched.map(l => {
      let regex = new RegExp(`(${pattern})`, "gi");
      return l.replace(regex, `<span class="grep-match">$1</span>`);
    });
    return highlighted.join("<br>");
  }

  cmdWc(args, captureRaw) {
    let countLines = args.includes("-l");
    let target = args.find(a => !a.startsWith("-"));
    if (!target) return `<span class="term-err">wc: missing file operand</span>`;

    let node = this.vfs.getNode(target);
    if (!node) return `<span class="term-err">wc: ${target}: No such file or directory</span>`;

    let content = node.content || "";
    let lines = content.split("\n").filter(Boolean).length;
    let words = content.split(/\s+/).filter(Boolean).length;
    let bytes = content.length;

    let res = countLines ? `${lines} ${target}` : `${lines}  ${words} ${bytes} ${target}`;
    return captureRaw ? res : `<span class="term-out">${res}</span>`;
  }

  cmdChmod(args) {
    if (args.length < 2) return `<span class="term-err">chmod: missing operand</span>`;
    let mode = args[0];
    let target = args[1];

    let node = this.vfs.getNode(target);
    if (!node) return `<span class="term-err">chmod: cannot access '${target}': No such file or directory</span>`;

    if (mode === "+x") {
      node.perms = "-rwxr-xr-x";
    } else if (mode === "755") {
      node.perms = node.type === "dir" ? "drwxr-xr-x" : "-rwxr-xr-x";
    } else if (mode === "644") {
      node.perms = "-rw-r--r--";
    } else if (mode === "600") {
      node.perms = "-rw-------";
    } else if (mode === "777") {
      node.perms = node.type === "dir" ? "drwxrwxrwx" : "-rwxrwxrwx";
    } else {
      node.perms = "-rwxr-xr-x";
    }
    return "";
  }

  cmdPs(args, captureRaw) {
    let header = "PID   USER     %CPU %MEM   TIME     COMMAND";
    let rows = this.processes.map(p => {
      return `${p.pid.toString().padEnd(5, ' ')} ${p.user.padEnd(8, ' ')} ${p.cpu.padStart(4, ' ')} ${p.mem.padStart(4, ' ')}   ${p.time.padEnd(8, ' ')} ${p.cmd}`;
    });
    let result = [header, ...rows].join("\n");
    return captureRaw ? result : `<pre class="term-pre">${result}</pre>`;
  }

  cmdKill(args) {
    if (args.length === 0) return `<span class="term-err">kill: usage: kill [-9] &lt;pid&gt;</span>`;
    let pidStr = args.find(a => !a.startsWith("-"));
    let pid = parseInt(pidStr);

    let idx = this.processes.findIndex(p => p.pid === pid);
    if (idx === -1) {
      return `<span class="term-err">bash: kill: (${pidStr}) - No such process</span>`;
    }

    let killed = this.processes.splice(idx, 1)[0];
    return `<span class="text-neon">[+] Sukses menghentikan proses PID ${killed.pid} (${killed.cmd})</span>`;
  }

  cmdFree(args) {
    return `<pre class="term-pre">               total        used        free      shared  buff/cache   available
Mem:         8163584     1849124     4420250       12420     1894210     6302010
Swap:        2097148           0     2097148</pre>`;
  }

  cmdDf(args) {
    return `<pre class="term-pre">Filesystem     1K-blocks     Used Available Use% Mounted on
udev             4060804        0   4060804   0% /dev
tmpfs             816360     1420    814940   1% /run
/dev/nvme0n1p2 102148204 18294820  78637480  19% /
tmpfs            4081792        0   4081792   0% /dev/shm</pre>`;
  }

  cmdIp(args) {
    return `<pre class="term-pre">1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN
    inet 127.0.0.1/8 scope host lo
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc mq state UP
    inet 192.168.1.105/24 brd 192.168.1.255 scope global dynamic eth0
    inet6 fe80::a00:27ff:fe4e:66a1/64 scope link</pre>`;
  }

  cmdPing(args) {
    let host = args.find(a => !a.startsWith("-")) || "google.com";
    return `<pre class="term-pre">PING ${host} (142.250.190.46) 56(84) bytes of data.
64 bytes from 142.250.190.46: icmp_seq=1 ttl=118 time=14.2 ms
64 bytes from 142.250.190.46: icmp_seq=2 ttl=118 time=13.8 ms
64 bytes from 142.250.190.46: icmp_seq=3 ttl=118 time=14.5 ms
--- ${host} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms</pre>`;
  }

  cmdCurl(args) {
    let url = args.find(a => !a.startsWith("-")) || "https://example.com";
    return `<pre class="term-pre">HTTP/2 200 OK
content-type: text/html; charset=UTF-8
server: cloudflare
date: Wed, 18 Nov 2026 12:20:00 GMT

&lt;!doctype html&gt;&lt;html&gt;&lt;body&gt;&lt;h1&gt;Example Domain&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;</pre>`;
  }

  cmdApt(args) {
    let sub = args[0];
    if (sub === "update") {
      return `<pre class="term-pre">Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease
Get:2 http://security.ubuntu.com/ubuntu noble-security InRelease [126 kB]
Get:3 http://archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
Reading package lists... Done
Building dependency tree... Done
All packages are up to date.</pre>`;
    }
    if (sub === "install") {
      let pkg = args[1];
      if (!pkg) return `<span class="term-err">apt install: missing package name</span>`;
      this.vfs.installedPackages.add(pkg);
      return `<pre class="term-pre">Reading package lists... Done
Building dependency tree... Done
The following NEW packages will be installed:
  ${pkg}
0 upgraded, 1 newly installed, 0 to remove.
Need to get 1,420 kB of archives.
Selecting previously unselected package ${pkg}.
Setting up ${pkg} (amd64) ...
<span class="text-neon">[✔] Paket '${pkg}' berhasil dipasang! Anda sekarang dapat menjalankannya di terminal.</span></pre>`;
    }
    return `apt: gunakan 'apt update' atau 'apt install &lt;paket&gt;'`;
  }

  cmdNeofetch() {
    return `<div class="neofetch-container">
<pre class="neofetch-art text-neon">
         _nnnn_                      
        dGGGGMMb     <span class="text-cyan">user</span>@<span class="text-cyan">linux-mastery</span>
       @p~qp~~qMb    -----------------------
       M|@||@) M|    <span class="text-yellow">OS:</span> Ubuntu 24.04 LTS x86_64
       @,----.JM|    <span class="text-yellow">Host:</span> Antigravity Learning Node
      JS^\\__/  qKL   <span class="text-yellow">Kernel:</span> 6.8.0-generic
     dZP        qKR  <span class="text-yellow">Uptime:</span> 14 days, 3 hours
    dZP          qKK <span class="text-yellow">Packages:</span> 142 (dpkg)
   fZP            SMM <span class="text-yellow">Shell:</span> bash 5.2.21
   HZM            MMMM <span class="text-yellow">Terminal:</span> web-xterm
   FqM            MMMM <span class="text-yellow">CPU:</span> AMD Ryzen 9 / Virtual vCPU (4)
 __| ".        |\dq$"  <span class="text-yellow">Memory:</span> 1849MiB / 7972MiB
 |    \`.       |     
  m_____)      |     <span class="neofetch-palette">███</span><span class="palette-red">███</span><span class="palette-green">███</span><span class="palette-yellow">███</span><span class="palette-blue">███</span><span class="palette-magenta">███</span><span class="palette-cyan">███</span>
</pre>
</div>`;
  }

  cmdCowsay(args) {
    let msg = args.join(" ").replace(/['"]/g, "") || "Belajar Linux itu seru dan membuka gerbang karir Cloud & DevOps!";
    let line = "-".repeat(msg.length + 2);
    return `<pre class="term-pre">
 ${line}
< ${msg} >
 ${line}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
</pre>`;
  }

  cmdTree(target) {
    let node = this.vfs.getNode(target || this.vfs.currentPath);
    if (!node) return `<span class="term-err">tree: ${target}: No such directory</span>`;

    let renderTree = (curr, prefix = "") => {
      let lines = [];
      let keys = Object.keys(curr.children || {});
      keys.forEach((k, idx) => {
        let isLast = idx === keys.length - 1;
        let connector = isLast ? "└── " : "├── ";
        let child = curr.children[k];
        let name = child.type === "dir" ? `<span class="term-dir">${k}/</span>` : `<span class="term-file">${k}</span>`;
        lines.push(prefix + connector + name);
        if (child.type === "dir") {
          let newPrefix = prefix + (isLast ? "    " : "│   ");
          lines.push(...renderTree(child, newPrefix));
        }
      });
      return lines;
    };

    let result = [`<span class="term-dir">${node.name || '/'}</span>`, ...renderTree(node)];
    return `<div class="term-tree">${result.join("<br>")}</div>`;
  }

  cmdHistory() {
    let rows = this.history.map((h, i) => `${(i + 1).toString().padStart(4, ' ')}  ${this.escapeHTML(h)}`);
    return `<pre class="term-pre">${rows.join("\n")}</pre>`;
  }

  cmdMan(target) {
    if (!target) return `<span class="term-err">What manual page do you want? (Contoh: man ls)</span>`;
    return `<div class="term-man">
<strong>MANUAL PAGE: ${target.toUpperCase()}(1)</strong><br><br>
<strong>NAMA:</strong><br>
&nbsp;&nbsp;${target} - panduan penggunaan perintah di Linux Mastery Lab.<br><br>
<strong>DESKRIPSI:</strong><br>
&nbsp;&nbsp;Gunakan perintah '${target}' untuk manipulasi sistem. Kunjungi tab 'Kamus Perintah' untuk melihat flag & contoh lengkap.
</div>`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VirtualFileSystem, LinuxTerminal };
}
