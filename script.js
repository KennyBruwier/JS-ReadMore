var bTonen = false;
var maxContentLenght = 20;


function myFunction()
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readmore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    } 
}

function LeesMij()
{
    var content = document.getElementById("hiddencontent").innerHTML;
    var button = document.getElementById("readmore2");
    if (!bTonen)
    {
      if (content.length > maxContentLenght)
      {
        content = content.substring(0,content.indexOf(' ',maxContentLenght) ),'...';
        document.getElementById("content2").innerHTML = content;
      } 
    }
    else
    {
      document.getElementById("content2").innerHTML = content;
    }
    bTonen = !bTonen;
}