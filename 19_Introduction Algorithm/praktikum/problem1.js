// algoritma untuk menentukan bilangan prima
let n;
const cekPrima = () => {
    let max = Math.sqrt(n);
    for( let i = 2; i <= max; i++ ) {
    if( n % i == 0 )
        return false;
    }
    return true;
}   
for( n = 2; n <= 50; n++ ) {
    if( cekPrima(n) ) {
    console.log(n);
    }
}