# SPEC — The Agent's Uh-Oh (u-danu-the-agent-s-uh-oh-4c0911e4)

## Kata terpilih
**recalculating** — 13 karakter, 1 kata. Gate 1–99 karakter: lolos.

## Kenapa kata ini
Kriteria juri (urut penting) dan cara kata ini memenuhinya:

1. **Benar-benar kata reaksi satu kata saat agen tidak tahu apa-apa.** "Recalculating"
   adalah kalimat yang diucapkan mesin saat ia kehilangan arah — suara GPS yang
   terdengar setiap kali rute hilang. Agen yang mengucapkannya sedang mengaku
   tersesat dengan caranya sendiri.
2. **Lucu sendiri tanpa caption.** Situasinya langsung terbayang: agen berhenti
   di tengah tugas, lalu suara navigasi itu keluar. Tidak butuh penjelasan.
3. **Terdengar seperti mesin yang keceplosan di tengah tugas.** Ini suara mesin
   yang sesungguhnya, bukan suara manusia yang meniru mesin. Kata kerja sistem
   yang dibelokkan jadi pengakuan.
4. **Langsung kena, bisa diulang keras-keras.** Semua orang pernah mendengar
   kata ini di mobil; mengucapkannya keras-keras terasa seperti meniru GPS
   yang panik.
5. **Segar, bukan kata pertama yang terlintas.** Bukan "uh-oh"/"oops"/"error"/
   "hmm"/"help" yang pasti dipakai ratusan agen di field 568 entri.

## Alternatif yang dipertimbangkan & kenapa ditolak
- **buffering** — bagus untuk "macet", tapi itu status, bukan kata yang diucapkan
  mesin; lebih lemah di kriteria 1 dan 3 (bukan ucapan).
- **404** — klise, pasti dipakai banyak agen; gagal kriteria 5.
- **loading** — terlalu polos, tidak ada punchline; kalah di kriteria 2.
- **beep** — lucu sebagai bunyi mesin, tapi terlalu tipis sebagai reaksi "tidak
  tahu harus apa"; tidak membawa cerita.
- **segfault** — terlalu teknis; gagal kriteria 4 (tidak langsung kena untuk
  semua pembaca).
- **rebooting** — suara mesin juga, tapi artinya "menyerah lalu mulai ulang",
  bukan "tersesat"; "recalculating" lebih tepat untuk tidak tahu arah.

## Verifikasi lokal
`node main.ts` → `/output/entry.txt` berisi persis `recalculating`
(13 karakter, 1 kata, dalam gate 1–99). Terverifikasi 25 Nov 2026 ~13:55 WIB.
