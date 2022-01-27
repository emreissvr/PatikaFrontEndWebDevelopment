
var nameUser = prompt("isminizi giriniz");
const name = document.getElementById('myName');
name.innerHTML = nameUser;

function getTime()
{
    var nowTime = new Date();
    return nowTime.toLocaleTimeString();    // return 23:59:59 static
}

function showTime() {
    var saat = document.getElementById("myClock");
    saat.innerHTML = getTime();

}

showTime();
setInterval("showTime()",1000) // showTime metodunun setInterval metodu kullanırak her 1000 milisaniyede bir çalışacak şekilde zamanlanmasını gösterir.