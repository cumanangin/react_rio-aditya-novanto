# GraphQL – Subscription
## RESUME
Dalam materi ini kita mempelajari :
 1. subscribeToMore,
 2. Subscription,
 3. useSubscription.

 ### subscribeToMore
subscribeToMore adalah suatu fungsi yang ada untuk mengeksekusi suatu subscription. Biasanya untuk menspesifik-kan field yang ada pada query. Atau ketika hanya mengembalikan 1 data terupdate termasuk semua data, kemudian kita harus mengupdate data sebelumnya pada variabel sebelumnya dan mengembalikan data terupdate.

### Subscription
Seperti query, subscription memungkinkan kita untuk mengambil data. Tidak seperti query, subscription adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu. Mereka dapat mempertahankan koneksi aktif ke server GraphQL kita (paling sering melalui WebSocket), memungkinkan server untuk mendorong pembaruan ke hasil subscription.

### useSubscription
useSubscription digunakan untuk mengeksekusi suatu subscription dari React.

## Task
### Membuat subscription pada projek.