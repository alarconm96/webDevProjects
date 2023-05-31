//generate random number 1-10 for 'id' arg
function getRandom(id){
    document.getElementById(`${id}`).innerText = Math.ceil(Math.random()*10);
}