//change para1 text
function changePara1() {
    document.getElementById("para1").innerText = "TEXT CHANGED";
    console.log("para1 element text changed successfully!");
}

//change para1 back to iriginal text
function undoPara1() {
    document.getElementById("para1").innerText = 'I\'m using this page to test stuff with JavaScript!';
    console.log('para1 changed back to default successfully!');
}

//write PWNED to entire document
function writePwn() {
    document.write('PWNED');
    alert('Page has been PWNED!!!');
}