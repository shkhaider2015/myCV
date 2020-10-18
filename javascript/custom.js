window.onscroll = function() { scrollFunction() };

function scrollFunction() 
{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  {
    document.getElementById("frow").style.height = "2%";
  } else {
    document.getElementById("frow").style.fontSize = "90px";
  }
}