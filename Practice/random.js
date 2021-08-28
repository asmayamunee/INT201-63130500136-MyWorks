//สุ่มเลข
let num1 = 0; //ใส่เลขอะไรก็ได้ไม่จำเป็นต้องเป็น0
let num2 = 0; //เอาค่าที่ได้ไปเก็บในnum
let num3 = 0;
function randomNumber(){
    return Math.floor((Math.random() * 100) + 1); 
 }
 /*num1 = randomNumber(); //33
 num2 = randomNumber(); //54
 num3 = randomNumber(); //87*/

 //หาผลรวม sum
 /*function sumnum(){
     return num1 + num2 + num3;
 }

 //หาค่าน้อยสุด min
 function minNum(){
     return Math.min(num1,num2,num3);
 }

 //หาค่าน้อยสุด max
 function maxNum(){
    return Math.max(num1,num2,num3);
}*/

//หาค่าตามตัวเลือก 1,2,3
function find(n){
    switch(n){
        case 1 : console.log(num1+num2+num3);
        break;
        case 2 : console.log(Math.min(num1,num2,num3)); 
        break;
        case 3 : console.log(Math.max(num1,num2,num3));
        break;
    }
}
function main(){
    num1 = randomNumber(); 
    num2 = randomNumber(); 
    num3 = randomNumber();
    console.log("Number1 = " + num1);
    console.log("Number2 = " + num2);
    console.log("Number3 = " + num3);
    find(1);
    find(2);
    find(3);
}
main();//เรียกใช้function