//set up array to hold fruits
const myArr = ['apple', 'orange', 'banana', 'mango', 'grape'];

//function to set innertext to element at index i
function getElem(i, id) {
    document.getElementById(`${id}`).innerText = myArr[i];
}