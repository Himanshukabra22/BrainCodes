var eventname = [];
eventname[0] = "Event1 Name Goes Here";
eventname[1] = "eventname2";
eventname[2] = "eventname3";
eventname[3] = "eventname4";
eventname[4] = "eventname5";
eventname[5] = "eventname6";
var eventposter = ["https://bit.ly/3OCgqLw", "https://bit.ly/3NjSX0B", "https://bit.ly/39Jy9lA", "https://bit.ly/3OiQQvm", "#", "#"];
var i = 0;
let eventlength = eventname.length;
function myfunction() {
    if (i == 0) {
        document.getElementById("leftslide").style.opacity = "0.3";
    }
    if (i == eventlength - 1) {
        document.getElementById("rightslide").style.opacity = "0.3";
    }
}
function nextevent() {
    if (i < eventlength - 1) {
        i++
        document.getElementById("eventname1").innerHTML = eventname[i];
        document.getElementById("notiposterid").style.backgroundImage = 'url("' + eventposter[i] + '")'
        if (i == eventlength - 1) {
            document.getElementById("rightslide").style.opacity = "0.3";
        }
        else {
            document.getElementById("leftslide").style.opacity = "1";
            document.getElementById("rightslide").style.opacity = "1";
        }
    }
}
function lastevent() {
    if (i > 0) {
        i--;
        document.getElementById("eventname1").innerHTML = eventname[i];
        document.getElementById("notiposterid").style.backgroundImage = 'url("' + eventposter[i] + '")'
        if (i == 0) {
            document.getElementById("leftslide").style.opacity = "0.3";
        }
        else {
            document.getElementById("leftslide").style.opacity = "1";
            document.getElementById("rightslide").style.opacity = "1";
        }
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
        document.getElementById("notiposterid").style.backgroundImage = 'url("' + eventposter[i] + '")'
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:0rem; height:34rem; display: inline-block; float: right; background-color: transparent;"
        document.getElementById("notiposterid").style.backgroundImage = 'url("' + eventposter[i] + '")'
        document.getElementById("eventinfo").innerHTML = ""
        a--;
    }
}