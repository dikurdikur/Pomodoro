# Pomodoro
Program ini adalah aplikasi manajemen tugas yang terintegrasi dengan elemen gamifikasi dan teknik manajemen waktu. Berikut adalah penjelasan lebih rinci mengenai fungsionalitas aplikasi:

Tujuan Utama:
Aplikasi ini dirancang untuk membantu pengguna mengelola tugas mereka dengan lebih efektif. Ini mencakup fitur-fitur utama seperti registrasi dan login pengguna, manajemen tugas, pengaturan profil, pengkategorian tugas, elemen gamifikasi, timer Pomodoro, dan pelaporan kemajuan.

Fitur-Fitur Utama:
LOGIN & REGISTRATION PAGE:

Tujuan: Memungkinkan pengguna untuk membuat akun dan masuk dengan aman.

Fitur: Pendaftaran pengguna baru, login, dan enkripsi kata sandi.

Tombol & Fungsi: loginUser, registerUser, Forgot Password.

DASHBOARD PAGE:

Tujuan: Menyediakan gambaran umum tentang tugas, XP, streaks, dan pencapaian.

Fitur: Ringkasan tugas yang tertunda, tampilan XP dan streaks, akses cepat ke kategori tugas.

Tombol & Fungsi: Navigasi ke daftar tugas, timer Pomodoro, dan halaman progres.

SETTINGS & PROFILE PAGE:

Tujuan: Memungkinkan pengguna menyesuaikan preferensi mereka.

Fitur: Mengubah nama pengguna & kata sandi, pengaturan notifikasi.

Tombol & Fungsi: updateUserProfile, changePassword.

TASK CATEGORIZATION PAGE:

Tujuan: Membantu pengguna memprioritaskan tugas berdasarkan urgensi dan kepentingan.

Fitur: Matriks interaktif, prioritas tugas berwarna, tutorial tentang pengkategorian.

Tombol & Fungsi: categorizeTask.

TASK MANAGEMENT PAGE:

Tujuan: Memungkinkan pengguna menambah, mengedit, dan menghapus tugas.

Fitur: Tampilan daftar tugas, pengkategorian tugas, checkbox penyelesaian tugas.

Tombol & Fungsi: addTask, editTask, deleteTask, completeTask.

GAMIFICATION & ACHIEVEMENTS PAGE:

Tujuan: Menampilkan XP, streaks, dan pencapaian untuk memotivasi pengguna.

Fitur: Bar XP, tampilan pencapaian, penghitung streak harian.

Tombol & Fungsi: addXP, displayAchievements.

POMODORO TIMER PAGE:

Tujuan: Membantu pengguna mengelola waktu menggunakan teknik Pomodoro.

Fitur: Timer kerja, timer istirahat, pemilihan tugas untuk timer.

Tombol & Fungsi: startPomodoroSession, pauseTimer, stopTimer.

PROGRESS & REPORTS PAGE:

Tujuan: Menunjukkan laporan produktivitas mingguan.

Fitur: Jumlah tugas yang diselesaikan, statistik waktu penyelesaian tugas, analisis waktu/hari paling produktif.

Tombol & Fungsi: generateWeeklyReport, viewTaskCompletionHistory.

Database:
Aplikasi ini menggunakan database untuk menyimpan informasi pengguna, tugas, dan data terkait lainnya. Operasi database mencakup otentikasi pengguna, manajemen tugas, pengkategorian tugas, gamifikasi, manajemen waktu, dan pelacakan kemajuan.

Penggunaan Teknologi:
Frontend: React.js untuk membangun antarmuka pengguna interaktif.

Backend: Node.js dengan Express.js untuk logika server dan API.

Database: MongoDB untuk penyimpanan data non-relasional.

Dengan aplikasi ini, pengguna dapat mengelola tugas mereka dengan lebih efisien, memanfaatkan teknik manajemen waktu Pomodoro, dan termotivasi oleh elemen gamifikasi seperti XP dan pencapaian.
