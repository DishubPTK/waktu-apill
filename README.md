# 🚦 Catatan Waktu APILL
**Dinas Perhubungan Kota Pontianak**

Aplikasi web progresif (PWA) untuk mencatat dan menampilkan waktu operasional APILL (Alat Pemberi Isyarat Lalu Lintas). Data tersinkronisasi dengan Google Sheet melalui Google Apps Script.

🔗 **Akses Aplikasi:** https://dishubptk.github.io/waktu-apill/

---

## 📁 Struktur File

```
waktu-apill/
├── index.html        # Halaman utama aplikasi
├── password.js       # ⭐ Konfigurasi password (edit di sini untuk ganti password)
├── manifest.json     # Konfigurasi PWA (nama, ikon, warna tema)
├── sw.js             # Service Worker untuk mode offline
├── clear-cache.html  # Halaman bantu untuk membersihkan cache
├── icon-192.png      # Ikon aplikasi 192×192
├── icon-512.png      # Ikon aplikasi 512×512
└── README.md         # Dokumentasi ini
```

---

## 🔐 Mengganti Password

Password disimpan di file **`password.js`** agar mudah diubah tanpa harus membuka `index.html`.

Ada **2 level password**:

| Variabel    | Fungsi                                      | Dibagikan ke          |
|-------------|---------------------------------------------|-----------------------|
| `PASSWORD`  | Untuk **melihat data** saja                 | Semua pengguna        |
| `PASSWORD2` | Untuk **edit data & akses Setup** (admin)   | Admin / petugas input |

**Cara ganti password:**

1. Buka file [`password.js`](./password.js) di GitHub
2. Klik ikon pensil ✏️ (Edit this file)
3. Ganti nilai password yang diinginkan
4. Klik **Commit changes**

Contoh isi file `password.js`:
```js
const PASSWORD  = 'password-baru-anda';   // password lihat data
const PASSWORD2 = 'password-admin-baru';  // password edit & setup
```

> ⚠️ **Catatan keamanan:** Karena ini adalah aplikasi statis di GitHub Pages, password bersifat *client-side* dan dapat dilihat oleh siapa pun yang memeriksa kode sumber. Gunakan hanya sebagai pengaman akses ringan, bukan untuk data yang sangat rahasia.

---

## ⚙️ Setup Koneksi Google Sheet

Aplikasi ini membaca dan menyimpan data ke Google Sheet melalui Google Apps Script.

### Langkah 1 — Buka Apps Script di Google Sheet
Di Google Sheet → **Extensions → Apps Script**

### Langkah 2 — Paste kode Apps Script
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

- **Android/Chrome:** Buka URL → ketuk **"Tambahkan ke layar utama"**
- **iOS/Safari:** Buka URL → ketuk ikon **Share** → **"Add to Home Screen"**
- **Desktop/Chrome:** Klik ikon install di address bar

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

## 🏢 Informasi

**Instansi:** Dinas Perhubungan Kota Pontianak  
**Repository:** https://github.com/dishubptk/waktu-apill  
**Hosting:** GitHub Pages (gratis, statis)
