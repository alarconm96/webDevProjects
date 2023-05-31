//function to update date and time
function updateTime(){
    //consts for time/date attributes
    const now = new Date();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    //concat date by joining date elements with ' '
    const date = [now.getDate(), month[now.getMonth()], now.getFullYear()].join(' ');

    //update div 'time' by joining date and time elements with ' '
    document.getElementById('time').innerText = 'Current date and time: ' + [date, time].join(' ');
}
//run updateTime() every 1000ms
setInterval(updateTime, 1000);