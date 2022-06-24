var eventname = ["Devheat beta", "eventname2", "eventname3", "eventname4", "eventname5", "eventname6"];
var organisername = ["GDSC IIIT Surat", "organiser2", "organiser3", "organiser4", "organiser5", "organiser6"];
let Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni debitis officiisoptio hic atque molestias quasi fuga, ipsa reiciendis enim, temporibus quibusdam quaeratfacilis repellendus? Eos sequi unde dicta vero sunt voluptate in tempore rem illopossimus iure assumenda ipsa adipisci suscipit natus voluptas inventore temporibus,tenetur deserunt. Adipisci tempore eum in aperiam porro, sapiente vero id nulla. Inquidem est recusandae voluptate esse dolorum ipsa nisi sed officiis!'
var vanuename = ["Home", "vanue2", "vanue3", "vanue4", "vanue5", "vanue6"];
var eventdate = ["21/07/2022", "22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022"];
var eventtime = ["12:00","13:00","14:00","15:00","16:00","17:00"]
var eventdes = [Lorem,Lorem,Lorem,Lorem,Lorem,Lorem]
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
function evinfo() {
    document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
    document.getElementById("eventname1").innerHTML = '<img src="content\\logo' + (i + 1) + '.jpg" alt="nologo" id="eventlogo">';
}
var a = 0;
var t = a;
function nextevent() {
    if (i < eventlength - 1) {
        i++
        if(t % 2 == 1)
        {
            info()
        }
        evinfo();
        myfunction();
        eventnamechange();
    }
}
function lastevent() {
    if (i > 0) {
        i--;
        if(t % 2 == 1)
        {
            info()
        }
        evinfo();
        myfunction();
        eventnamechange();
    }
}
function cardinfofun(p)
{
    let x = '<div id="eventinfocard"><div id="evnamediv"><span>'+eventname[p]+'</span></div><div id="descdiv"><span>'+eventdes[p]+'</span></div><div class="eventbtns" id="desdiv"><div><button class="navbutton eventnavbtns" title="share"><img src="content\\share.png" id="share"></button><button class="navbutton eventnavbtns" title="Participate"><img src="content\\participate.png" id="takepart"></button><button class="navbutton eventnavbtns" title="More" onclick="slide()"><img src="content\\more.png" id="more"></button> </div></div></div></div>'
    return x
}
function info() {
    document.getElementById("eventinfo").innerHTML = cardinfofun(i)
}
function slide() {
    if (a % 2 == 0) {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 35rem;  ";
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(180deg)"
        setTimeout(info, 300);
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.2s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.2s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:0rem; height:34rem; display: inline-block; float: right; background-color: transparent;"
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").innerHTML = ""
        a--;
    }
    t = a
}