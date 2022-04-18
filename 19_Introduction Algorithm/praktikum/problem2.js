let start = 1
let n = 5
let i;
let isActive  = false

for(i = start; i <= n; i++){
  if((n % i) === 0){
    isActive = !isActive
  }
  /* console.log(`${i} => ${isActive ? "Lampu Menyala":"Lampu Mati"}`) */
}
console.log(`${n} => ${isActive ? "Lampu Menyala":"Lampu Mati"}`)