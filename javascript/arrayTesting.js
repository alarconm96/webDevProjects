//set up array to hold fruits
const myArr = ['apple', 'orange', 'banana', 'mango', 'grape'];

//function to set innertext to array as string
function getArr(){
    document.getElementById('arr-toString').innerText = myArr.toString();
}

function getFullArr(){
    document.getElementById('arr-fullArr').innerText = myArr;
}

//function to set innertext to element at index i
function getElem(i, id) {
    document.getElementById(`${id}`).innerText = myArr[i];
}

//function to create HTML string displaying array and its contents
function showArrHTML(id){
    text = '<ul>';

    for(i = 0; i < myArr.length; i++){
        text+= `<li>${myArr[i]}</li>`;
    }

    text+= '</ul>';

    document.getElementById(`${id}`).innerHTML = text;
}