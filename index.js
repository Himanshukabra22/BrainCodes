var eventname = [];
eventname[0] = "eventname1";
eventname[1] = "eventname1";
let eventlength = eventname.length;
var a = 0;
function myGreeting() {
    document.getElementById("eventinfo").innerHTML = "<div id=\"eventinfocard\">jai ho!!</div>"
}
function slide() {
    if (a % 2 == 0) {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 35rem; ";
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(180deg)"
        setTimeout(myGreeting, 300);
        document.getElementById("eventinfo").style.cssText = "transition: 0.2s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.2s; transition-delay: 0s; width:0rem; height:34rem; display: inline-block; float: right; background-color: transparent;"
        document.getElementById("eventinfo").innerHTML = ""
        a--;
    }
}