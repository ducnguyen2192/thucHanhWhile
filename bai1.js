let total = 0;
let num=0;

while( num !== -1 ) {
    total += num;
    alert("total is " + total);
    num = parseInt(prompt("Enter a number: "));
}
alert("you are not supposed to input -1")