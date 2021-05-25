// scroll up button

var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// hamburger menu

function showMenu(){
    var visibility = document.getElementById("hamburger");
    if(visibility.style.display === "flex"){
        document.getElementById("hamburger").style.display = "none";
    }
    else {
        document.getElementById("hamburger").style.display = "flex";
    }
}




function showSubMenu(n){
    var subMenus = document.getElementsByClassName("subMenu");
    if(subMenus[n].style.display === "flex"){
        subMenus[n].style.display = "none";
        return;
    }
    subMenus[n].style.display = "flex";
}

window.addEventListener("resize", myFunction);

function myFunction() {
  var subMenus2 = document.getElementsByClassName("subMenu");

  if(screen.width > 576){
    document.getElementById("hamburger").style.display = "flex";
  } 
  
}







