var a = 0;
function slide()
{
    if(a%2 == 0)
    {
        document.getElementById("notiposterid").style.transition="0.2s"
        document.getElementById("abouteventicon").style.transition="0.2s"
        document.getElementById("notiposterid").style.width="35rem"
        // document.getElementById("notiposterid").style.height="15rem"
        document.getElementById("abouteventicon").style.transform="rotate(180deg)"
        a++
    }
    else
    {
        document.getElementById("notiposterid").style.transition="0.2s"
        document.getElementById("abouteventicon").style.transition="0.2s"
        document.getElementById("notiposterid").style.width="70rem"
        // document.getElementById("notiposterid").style.height="30rem"
        document.getElementById("abouteventicon").style.transform="rotate(0deg)"
        a--;
    }
}