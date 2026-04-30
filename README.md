# 🚦 Catatan Waktu APILL
**Dinas Perhubungan Kota Pontianak**

Aplikasi web progresif (PWA) untuk mencatat dan menampilkan waktu operasional APILL (Alat Pemberi Isyarat Lalu Lintas). Data tersinkronisasi dengan Google Sheets melalui Google Apps Script.

🔗 **Akses Aplikasi:** https://dishubptk.github.io/waktu-apill/

---

## 📁 Struktur File

```
waktu-apill/
├── index.html          # Halaman utama aplikasi
├── password.js         # ⭐ Konfigurasi password (edit di sini untuk ganti password)
├── manifest.json       # Konfigurasi PWA (nama, ikon, warna tema)
├── sw.js               # Service Worker untuk mode offline
├── clear-cache.html    # Halaman bantu untuk membersihkan cache
├── icon-192.png        # Ikon aplikasi 192×192
├── icon-512.png        # Ikon aplikasi 512×512
└── README.md           # Dokumentasi ini
```

---

## 🔐 Akses & Password

Aplikasi dilindungi dengan **2 level akses**:

| Level          | Fungsi                                        | Dibagikan ke          |
|----------------|-----------------------------------------------|-----------------------|
| **Password 1** | Untuk **melihat data** saja                   | Semua pengguna        |
| **Password 2** | Untuk **edit data & akses Setup** (admin)     | Admin / petugas input |

Password dikonfigurasi di file **`password.js`**.

### Cara Mengganti Password

1. Buka tool **"Ganti PW Manual"** (file HTML terpisah yang disertakan)
2. Ketik password baru, klik **Generate Hash**, lalu salin hasilnya
3. Buka file [`password.js`](./password.js) di GitHub
4. Klik ikon pensil ✏️ (**Edit this file**)
5. Tempel nilai hasil tool ke variabel yang sesuai (`PASSWORD_HASH` atau `PASSWORD2_HASH`)
6. Klik **Commit changes**

---

## ⚙️ Setup Koneksi Google Sheets

Aplikasi membaca dan menyimpan data ke Google Sheets melalui Google Apps Script sebagai backend.

### Langkah 1 — Buka Apps Script di Google Sheets
Di Google Sheets → **Extensions → Apps Script**

### Langkah 2 — Paste Kode Apps Script
Hapus kode lama, paste kode yang tersedia di halaman **Setup** dalam aplikasi, lalu **Save**.

### Langkah 3 — Deploy sebagai Web App
1. Klik **Deploy → New deployment**
2. Pilih tipe: **Web App**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Klik **Deploy**, lalu salin URL Web App

### Langkah 4 — Masukkan URL ke Aplikasi
1. Buka aplikasi → login dengan **password admin**
2. Buka menu **Setup** (ikon ⚙️)
3. Tempel URL Web App ke kolom yang tersedia
4. Klik **Simpan URL**

---

## 📱 Instalasi sebagai PWA

Aplikasi ini mendukung instalasi sebagai *Progressive Web App* di perangkat mobile maupun desktop.

- **Android / Chrome:** Buka URL → ketuk **"Tambahkan ke layar utama"**
- **iOS / Safari:** Buka URL → ketuk ikon **Share** → **"Add to Home Screen"**
- **Desktop / Chrome:** Klik ikon install di address bar

---

## 🛠️ Pemeliharaan

### Membersihkan Cache
Jika aplikasi menampilkan data lama setelah ada perubahan, buka:
```
https://dishubptk.github.io/waktu-apill/clear-cache.html
```

### Update Aplikasi di GitHub
1. Edit file yang diperlukan langsung di GitHub, **atau**
2. Clone repository → edit lokal → push ke GitHub
3. GitHub Pages akan otomatis memperbarui dalam beberapa menit

---

## 🏗️ Teknologi

| Komponen        | Detail                                               |
|-----------------|------------------------------------------------------|
| Frontend        | HTML, CSS, JavaScript (single-file, tanpa framework) |
| Backend         | Google Apps Script (Web App)                         |
| Database        | Google Sheets                                        |
| Hosting         | GitHub Pages                                         |
| Offline support | Service Worker (PWA)                                 |

---

## 🏢 Informasi

**Instansi:** Dinas Perhubungan Kota Pontianak  
**Repository:** https://github.com/dishubptk/waktu-apill  
**Hosting:** GitHub Pages (gratis, statis)
