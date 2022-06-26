var eventname = ["Devheat beta", "AlgoHours 3.0", "LCS Orientation", "Stranger Codes 2.0", "Gaming Night", "Ruminate Calling"];
var organisername = ["GDSC IIIT Surat", "organiser2", "organiser3", "organiser4", "organiser5", "organiser6"];
var poster = ["./content/logo1.jpg","./content/logo2.jpg","./content/logo3.jpg","./content/logo4.jpg","./content/logo5.jpg","./content/logo6.jpg"];
' + (i + 1) + '
let Lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni debitis officiisoptio hic atque molestias quasi fuga, ipsa reiciendis enim, temporibus quibusdam quaeratfacilis repellendus? Eos sequi unde dicta vero sunt voluptate in tempore rem illopossimus iure assumenda ipsa adipisci suscipit natus voluptas inventore temporibus,tenetur deserunt. Adipisci tempore eum in aperiam porro, sapiente vero id nulla. Inquidem est recusandae voluptate esse dolorum ipsa nisi sed officiis!'
var vanuename = ["Home", "vanue2", "vanue3", "vanue4", "vanue5", "vanue6"];
var eventdate = ["21/07/2022", "22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022"];
var eventtime = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
var eventdes = [Lorem, Lorem, Lorem, Lorem, Lorem, Lorem]
var i = 0;
function myfunction() {
    if (i == 0) {
        document.getElementById("leftslide").style.opacity = "0.3";
    }
    else if (i == eventname.length - 1) {
        document.getElementById("rightslide").style.opacity = "0.3";
    }
    else {
        document.getElementById("leftslide").style.opacity = "1";
        document.getElementById("rightslide").style.opacity = "1";
    }
}
var a = 0;
var t = a;
function evinfo() {
    document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
    document.getElementById("eventname1").innerHTML = '<img src="' + poster[i] + '" alt="nologo" id="eventlogo">';
}
function nextevent() {
    if (i <((eventname.length) - 1)) {
        console.log(eventname.length)
        i++
        if (t % 2 == 1) {
            info()
        }
        evinfo();
        myfunction();
        // eventnamechange();
    }
}
function lastevent() {
    if (i > 0) {
        i--;
        if (t % 2 == 1) {
            info()
        }
        evinfo();
        myfunction();
        // eventnamechange();
    }
}
function cardinfofun(p) {
    let x = '<div id="eventinfocard"><div id="evnamediv"><span>' + eventname[p] + '</span></div><div id="descdiv"><span>' + eventdes[p] + '</span></div><div class="eventbtns" id="desdiv"><div><button class="navbutton eventnavbtns" title="share"><img src="content\\share.png" id="share"></button><a href ="https://docs.google.com/forms/d/e/1FAIpQLSfWj3TxYfQVZev6MjmUhCSnAtYY6UxVDkGGXOL7hhD17jBHog/viewform?usp=sf_link" target ="_blank"><button class="navbutton eventnavbtns" title="Participate"><img src="content\\participate.png" id="takepart"><a></button><button class="navbutton eventnavbtns" title="More" onclick="slide()"><img src="content\\more.png" id="more"></button> </div></div></div></div>'
    return x
}
function info() {
    document.getElementById("eventinfo").innerHTML = cardinfofun(i)
}
function slide() {
    if (a % 2 == 0) {
        document.getElementById("notiposterid").style.cssText = "transition: 0.3s; width: 35rem;  ";
        document.getElementById("abouteventicon").style.cssText = "transition: 0.3s; transform: rotate(180deg)"
        setTimeout(info, 300);
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.3s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.3s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:0rem; height:34rem; display: inline-block; float: right; background-color: transparent;"
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").innerHTML = ""
        a--;
    }
    t = a
}
function addevent()
{
    var j = eventname.push(document.getElementById("EventName").value)
    eventname.push(j)
    eventname.pop()
    // console.log(eventname[(eventname.length)-1])
    var k = eventdes.push(document.getElementById("Description").value)
    eventdes.push(k)
    eventdes.pop()

    // console.log(eventdes[(eventname.length)-1])
    // var l = plink.push(document.getElementById("plink").value)
    // plink.push(l)
    // console.log(plink[eventname.length-1])
    var m = poster.push(document.getElementById("posterfile").value)
    poster.push(m)
    poster.pop()
    Home()
}
function formhtm()
{
    document.getElementById("main").innerHTML = '        <div>    <header>        <div class="logo"><img src="content\\logopng.png" alt="logo" id="headlogo"></div>        <div class="navbar">            <ul class="navbarul">                                   <button class="navbutton"  onclick="Home()">                        <img src="content\\Home-free-icon-font.png" alt="home" id="Home">                    </button>                                                    <button class="navbutton">                        <img src="content\\add-free-icon-font.png" alt="Add" id="Add">                    </button>                <a href="team.htm">                    <button class="navbutton" title="About Team">                        <img src="content\\Users-free-icon-font.png" alt="Team" id="Team">                    </button></a>            </ul>        </div>    </header></div><div class="formdiv">            <div class="formhead">            <p id="formheadtext">Add Event</p>        </div>        <form action="#" id="formid">            <div class="detail">                <div>                    <div id="evnameid2">                        <span>Event name:&nbsp;</span>                        <input type="text" class="textbox1" id="EventName">                    </div>                    <div id="organiserid2">                        <span>Organiser:&nbsp;</span>                        <input type="text" id="Organiser" class="textbox1" >                    </div>                </div>            </div>            <div class="detail">                <div>                    <div id="venueid2">                        <span>Venue:&nbsp;</span>                        <input type="text" name="Venue" class="textbox1">                    </div>                    <div id="plinkid2">                        <span>Participation link:&nbsp;</span>                        <input type="text" name="" class="textbox1" id="plink">                    </div>                </div>            </div>            <div class="detail">                <div>                    <div id="dateid2">                        <span>Event Date:&nbsp;&nbsp;</span>                        <input type="date" name="Organising community" class="textbox1">                    </div>                    <div id="timeid2">                        <span>Time:&nbsp;&nbsp;</span>                        <input type="time" name="" id="" class="textbox1">                    </div>                </div>            </div>            <div class="detail">                <div>                    <div id="desid2">                        <span>Description:&nbsp;&nbsp;</span>                        <input name="" class="textbox1" id="Description">                   </div>                </div>            </div>            <div class="detail">                <div id="uploadid2">                    <span>Upload Poster link (.jpg):&nbsp;&nbsp; </span>                    <input type="text" class="textbox1" id="posterfile">                </div>            </div>            <div class="detail">                <div>                <div><input type="reset" class="frmbtns"></div>                <div><button class="frmbtns" onclick="addevent()" id="submitbtn">Submit</button></div>            </div>            </div>        </form></div><!-- <h3> Mo.Number : <input type="text"></h3>        <h3> Event Name : <input type="text"></h3>    </div>    <div>        <h3> Institute : <input type="text"></h3>    </div>    <div>        <h3> Date : <input type="date"></h3>    </div>    <div>        <h3> Time : <input type="time"></h3> --></div></form>'
}
function Home(){
    i = 0
    a = 0
    document.getElementById("main").innerHTML = '        <div>    <header>        <div class="logo"><a href="index.htm"><img src="content\\logopng.png" alt="logo" id="headlogo"                    title="UpEvent"></a></div>        <div class="navbar">            <ul class="navbarul">                    <button class="navbutton" onclick="Home()">                        <img src="content\\Home-free-icon-font.png" alt="home" id="Home">                    </button>                <button class="navbutton" title="Add Event" onclick="formhtm()">                    <img src="content\\add-free-icon-font.png" alt="Add" id="Add">                </button>                <a href="team.htm">                    <button class="navbutton" title="About Team">                        <img src="content\\Users-free-icon-font.png" alt="Team" id="Team">                    </button></a>            </ul>        </div>    </header></div><div class="carddiv">    <div class="arrowleft">        <button class="slideshowbtn" onclick="lastevent()" title="last">            <img src="content\\right-arrow.png" alt="home" id="leftslide">        </button>    </div>    <div class="notifcard">        <!-- <h1>Notification will be added here</h1> -->        <div class="notifposter" id="notiposterid" onclick="slide()" title="Click to know more">            <button id="abouteventicon" title="Click to read more"><img src="content\\arrow-small-leftw.png"                    alt="" id="slideiconimg1"></button>            <span id="eventname1">                <img src="content\\logo1.jpg" alt="nologo" id="eventlogo">            </span>            <!-- <div class="eventbtns">                <div>                    <button class="navbutton eventnavbtns" title="share"><img src="content\\share.png"                            id="share"></button>                    <button class="navbutton eventnavbtns" title="Participate"><img                            src="content\\participate.png" id="takepart"></button>                    <button class="navbutton eventnavbtns" title="More" onclick="slide()"><img                            src="content\\more.png" id="more"></button>                </div>            </div> -->            <!-- <div class="notitransit"></div> -->        </div>        <div id="eventinfo">            <!-- <div id="eventinfocard">                <div id="evnamediv">                    <span>DevHeat Beta</span>                </div>                <div id="descdiv">                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni debitis officiis                        optio hic atque molestias quasi fuga, ipsa reiciendis enim, temporibus quibusdam quaerat                        facilis repellendus? Eos sequi unde dicta vero sunt voluptate in tempore rem illo                        possimus iure assumenda ipsa adipisci suscipit natus voluptas inventore temporibus,                        tenetur deserunt. Adipisci tempore eum in aperiam porro, sapiente vero id nulla. In                        quidem est recusandae voluptate esse dolorum ipsa nisi sed officiis!</span>                </div>                <div class="eventbtns" id="desdiv">                    <div>                        <button class="navbutton eventnavbtns" title="share"><img src="content\\share.png"                                id="share"></button>                        <button class="navbutton eventnavbtns" title="Participate"><img                                src="content\\participate.png" id="takepart"></button>                        <button class="navbutton eventnavbtns" title="More" onclick="slide()"><img                                src="content\\more.png" id="more"></button>                    </div>                </div>            </div> -->        </div>    </div>    <div class="arrowright">        <button class="slideshowbtn" onclick="nextevent()" title="next">            <img src="content\\right-arrow.png" alt="home" id="rightslide">        </button>    </div></div></div>'
}