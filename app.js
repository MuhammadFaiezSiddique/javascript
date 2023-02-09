// alert("hello world");


var a =  15;
var value1 = a++ + ++a  -  --a;
        //    = 15 + 17 - 16
        //    = 32 - 16
        //    = 16 answer
console.log("answer=======>" ,value1);


var value2 = ++a + ++a - --a + a-- + a - a - a++ - --a;
//            = 16 + 17 - 16 + 16 + 15 - 15 - 15 - 15
//            = 33 - 30
//            = 3 answer  

console.log("answer=======>" ,value2);
