var eventname = ["eventname1","eventname2","eventname3","eventname4","eventname5","eventname6"];
var i = 0;
let eventlength = eventname.length;
function myfunction() {
    if (i == 0) {
        document.getElementById("leftslide").style.opacity = "0.3";
    }
    else if (i == eventlength - 1) {
        document.getElementById("rightslide").style.opacity = "0.3";
    }
    else {
        document.getElementById("leftslide").style.opacity = "1";
        document.getElementById("rightslide").style.opacity = "1";
    }
}
function evinfo()
{
    document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event'+(i+1)+'.jpg")'
    document.getElementById("eventname1").innerHTML = '<img src="content\\logo'+(i+1)+'.jpg" alt="nologo" id="eventlogo">';
}
function nextevent() {
    if (i < eventlength - 1) {
        i++
        evinfo();
        myfunction();
    }
}
function lastevent() {
    if (i > 0) {
        i--;
        evinfo();
        myfunction();
    }
}
var a = 0;
function info() {
    document.getElementById("eventinfo").innerHTML += "<div id=\"eventinfocard\"></div>"
}
function slide() {
    if (a % 2 == 0) {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 35rem;  ";
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(180deg)"
        setTimeout(info, 300);
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event'+(i+1)+'.jpg")'
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:0rem; height:34rem; display: inline-block; float: right; background-color: transparent;"
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event'+(i+1)+'.jpg")'
        document.getElementById("eventinfo").innerHTML = ""
        a--;
    }
}