let button = document.getElementById("mobileMenu");
let mobilenav = document.getElementById("mobileViewNavigation");

mobilenav.style.display = "none";
button.style.opacity = 1;

button.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        button.style.opacity = 0.5;
    }
    else{
        mobilenav.style.display = "none";
        button.style.opacity = 1;
    }
}