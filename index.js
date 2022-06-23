var eventname = ["eventname1","eventname2","eventname3","eventname4","eventname5","eventname6"];
// var eventposter = ["", "https://bit.ly/3NjSX0B", "https://bit.ly/39Jy9lA", "https://bit.ly/3OiQQvm", "#", "#"];
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
function evinfo()
{
    document.getElementById("eventname1").innerHTML = '<img src="content\\logo'+(i+1)+'.jpg" alt="nologo" id="eventlogo">                        <div class="eventbtns"><div>    <button class="navbutton eventnavbtns" title="share"><img src="content\\share.png" id="share"></button>    <button class="navbutton eventnavbtns" title="Participate"><img src="content\\participate.png" id="takepart"></button>    <button class="navbutton eventnavbtns" title="More" onclick="slide()"><img src="content\\more.png" id="more"></button></div></div>';
}
function nextevent() {
    if (i < eventlength - 1) {
        i++
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event'+(i+1)+'.jpg")'
        evinfo();
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
        evinfo();
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event'+(i+1)+'.jpg")'
        // console.log('url("' + eventposter[i] + '")')
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