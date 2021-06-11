function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var d = d[date.getDay()];
    var month = ["January", "February", "March","April", "May","June", "July", "August", "September", "Octover", "November", "December"];
    var month = month[date.getMonth()];
    var session = "AM"
   
    if(h == 0)
    {
        h = 12;
    }
    if(h > 12)
    {
        h = h-12;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    

    var time = month + "-" + d + "-" + " " + h + ":" + m + ":" + s + " " + session;
    document.getElementById("myclock").innerText = time;
    document.getElementById("myclock").textContent = time;

    setTimeout(showTime,1000);
}
showTime();