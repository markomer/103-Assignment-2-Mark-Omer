console.log("script haha");

let productName=prompt("Enter Product Name:");
let unitPrice=prompt("Enter the Unit Price:");
let quantity=prompt("Enter the Quantity:");

console.log(` ${"PRODUCT: " + productName}, ${"QUANTITY: " + quantity}, ${"PRICE: " + unitPrice}, ${"NET AMOUNT: $" + quantity*unitPrice}`);
console.log(` ${"TOTAL AMOUNT: $" + ((quantity*unitPrice)*1.0625).toFixed(2)}`);

document.write(` Your total cost is: $${((quantity*unitPrice)*1.0625).toFixed(2)} `);


//* if-then *//
/*let userName=prompt("Enter the user name");
if(userName=="David"){
  console.log("it is the same user");
}else{
  console.log("the users are different");
}*/

/*let num1=10;
let num2=20;

if(num1>num2){
  console.log("num1 is greater thatn num2.");
}else{
  console.log("num2 is greater than num1");
}

let student=true;

if(student){
  console.log("the user is a student");
}else{
  console.log("the useris not a student");

}*/
