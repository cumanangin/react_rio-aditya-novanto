# GraphQL - Basic
## RESUME
Dalam materi ini kita mempelajari :
 1. GraphQL,
 2. Mutation,
 3. Subscripton.

 ### GraphQL
GraphQL adalah bahasa kueri untuk API, dan berjalan pada sisi server untuk mengeksekusi kueri dengan menggunakan sistem tipe yang kita tetapkan untuk data kita. <br>
GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu titik akhir tunggal ( /graphQL ) untuk setiap permintaan yang diperlukan.

### Mutation
Mutation pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql yang sudah kita buat) dan kemudian menentukan data apa yang GraphQL perlu kembalikan.


### Subscripton.
* Subscripton adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat peristiwa tertentu terjadi.<br> Subscripton biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien subscripton-nya.
* Ketika data diubah maka klien akan mendapatkan data yang diperbarui secara langsung secara real-time. 


## Task
### Membuat database menggunakan hasura