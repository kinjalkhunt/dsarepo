
let a=0, b=1, newFibb;

function fibbonaci() {
    for(let i = 0; i <= 10; i++ ){
        newFibb = a + b;
        console.log(newFibb);
        a = b;
        b = newFibb;
    }

}
fibbonaci();
console.log("Fibbonaci Series is", newFibb);