**Nama : Nabilla Tsani Ayasi**

**NIM : H1D022058**

**Shift : F**

## Tampilan Program
![Screenshot 2024-11-21 223311](https://github.com/user-attachments/assets/659e6afd-7b62-4b2b-a7a7-1229a3f2f416)
![Screenshot 2024-11-21 223316](https://github.com/user-attachments/assets/bbade4db-104f-466a-9679-3cc354b0eda1)
![Screenshot 2024-11-21 223319](https://github.com/user-attachments/assets/abdbaaa5-1911-4cc2-a301-55a3a22f9b0e)


## Penjelasan Program
Alur proses login menggunakan Firebase di aplikasi Ioni:

1. **Inisialisasi Firebase**  
   Aplikasi Ionic dihubungkan ke Firebase dengan memasukkan konfigurasi proyek Firebase, seperti API Key dan domain autentikasi.

2. **Pengguna Mengisi Form Login**  
   Pengguna memasukkan email dan password mereka di form login yang tersedia di aplikasi.

3. **Permintaan Login Dikirim ke Firebase**  
   Aplikasi mengirimkan email dan password ke Firebase Authentication melalui API.

4. **Validasi Kredensial oleh Firebase**  
   Firebase memeriksa apakah email dan password yang dikirimkan valid dan cocok dengan data di database.

   - **Jika Valid**: Firebase memberikan respons sukses bersama dengan data pengguna (seperti UID dan email).  
   - **Jika Tidak Valid**: Firebase mengirimkan pesan error, misalnya karena email tidak terdaftar atau password salah.

5. **Respon Aplikasi Berdasarkan Hasil Validasi**  
   - Jika login berhasil, aplikasi:
     - Menyimpan informasi sesi pengguna (misalnya token atau UID).
     - Mengarahkan pengguna ke halaman utama atau dashboard.
   - Jika login gagal, aplikasi:
     - Menampilkan pesan error kepada pengguna, seperti "Login Gagal".

6. **Pengelolaan Sesi Login**  
   Firebase secara otomatis mengelola status login pengguna. Aplikasi dapat memeriksa status login ini kapan saja untuk memastikan pengguna masih terautentikasi.

7. **Logout**  
   Jika pengguna ingin keluar, aplikasi memanggil layanan logout Firebase. Setelah itu:
   - Status login dihapus.
   - Pengguna diarahkan kembali ke halaman login.

Alur ini memastikan autentikasi pengguna dilakukan dengan aman dan mudah menggunakan layanan Firebase Authentication.
