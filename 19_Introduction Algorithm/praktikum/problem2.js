let start = 1
let n = 5
let i;
let isAktif  = false

for(i = start; i <= n; i++){
  if((n % i) === 0){
    isAktif = !isAktif
  }
}
console.log(`${n} => ${isAktif ? "Lampu Menyala":"Lampu Mati"}`)