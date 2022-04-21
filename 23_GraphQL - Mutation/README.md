# GraphQL – Mutation
## RESUME
Dalam materi ini kita mempelajari :
 1. Query with Apollo Client,
 2. Mutation with Apollo Client,
 3. Subscription with Apollo Client.

 ### Query with Apollo Client
Ketika akan merender komponen react yang dipanggil dengan useQuery, apollo cient secara otomatis meng-eksekusi sesuai dengan querynya.

### Mutation with Apollo Client
Untuk mutasi, berarti kita dapat menginsert, update, dan delete data dengan menggunakan apollo. Untuk menginsert data pada apollo, kita perlu mengimport useMutation, sedangkan untuk update pada apollo kita perlu men-define update querynya, sedangkan untuk delete kita juga perlu untuk men-define delete querynya.

### Subscription with Apollo Client
Untuk subscription, pertama kita perlu untuk menginstall terlebih dahulu subscriptions-transport, kemudian mengimportkan seluruh module yang dibutuhkan, dan dipisahkan antara http dan websocket link. Dan nantinya kita mengimport useSubscription.

## Task
### Membuat beberapa fitur dan lakukan mutation pada projek.