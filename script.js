function ClockTime(){
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('Hours').innerHTML = h;
    document.getElementById('Minutes').innerHTML = m;
    document.getElementById('Seconds').innerHTML = s;
    setTimeout(ClockTime, 1000);

}
function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
return i;
}


