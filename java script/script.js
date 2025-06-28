let obj = {
    name: "krishna",
    age: 25,
    run: function(){
        console.log("running")
    }
}
console.log(obj.name, obj['name']);
obj.run();
obj.phno = 55555;
console.log(obj)
console.log(obj.address);
console.log(Object.keys(obj))
console.log(Object.values(obj))
obj.run();
//seals and freeze
Object.seal(obj);
obj.name = 20;
console.log(obj)
/*Object.freeze(obj);
obj.name = 20;
console.log(obj)*/


let a = 5 , b = 4;
//arithmetic
console.log(a + b, a - b, a * b, a / b, a % b, a**b)
//logical
console.log(a > b && a > b, a > b || a > 10, !(a>0));
//relational
console.log(a > b, a < b, a == b, 2 == '2', 2 === '2', 2!='2', 2!=='2')
//increment and decrement
console.log(++a, a++, --a, a--);
//ternary
let c = (a<b) ? a:b;
console.log(c);