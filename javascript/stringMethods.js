const myString = "Hello World!";
const money = 12;

//display string length
function getLength() {
    document.getElementById("string-length").innerText = myString.length;
}

//front slice
function getFrontSlice() {
    document.getElementById("string-slice-front").innerText = myString.slice(0, 5);
}

//back slice
function getBackSlice() {
    document.getElementById("string-slice-back").innerText = myString.slice(6);
}

//replace word
function replaceSubstring() {
    document.getElementById("string-replace").innerText = myString.replace("Hello", "Goodbye");
}

//concat string
function concatString() {
    document.getElementById("string-concat").innerText = myString.concat(" ", "And ", "Goodnight!");
}

//split hello
function splitHello(){
    const newHello = myString.split(" ");
    document.getElementById("string-split").innerText = newHello[1] + " " + newHello[0];
}

//interpolate hello
function interpolate(){
    const newString = `This string uses both "double-quotes" and 'single-quotes'`;
    document.getElementById("string-interpolate").innerText = `Hello ${newString} World!`;
}

//expression substitution
function calcPrice(){
    const apple = 0.99;
    const orange = 1.99;
    const TAX = 0.07;
    document.getElementById("expr-sub").innerText = `Total: ${((apple + orange) + (apple + orange) * TAX).toFixed(2)}`;
}