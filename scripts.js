function updateClock() {
    var endTime = new Date();
    var timeElapsed = endTime-1632177793101;
    var sec = Math.floor(timeElapsed/1000%60);
    var min = Math.floor(timeElapsed/1000/60%60);
    var hr = Math.floor(timeElapsed/1000/60/60%24);
    var d = Math.floor(timeElapsed/1000/60/60/24);
    sec = ("0"+sec).slice(-2);
    min = ("0"+min).slice(-2);
    hr = ("0"+hr).slice(-2);
    document.getElementById('time').innerHTML = d+":"+hr+":"+min+":"+sec;
}
setInterval(updateClock, 500);
