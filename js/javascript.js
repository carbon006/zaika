var navLinks = document.getElementById("navLinks");
var navIcon = document.getElementById("navIcon");
var closeIcon = document.getElementById("closeIcon");

function showMenu(){
    navLinks.style.right = "2%";
    closeIcon.style.display = "block"; 
    navIcon.style.display = "none";
   
};
function hideMenu(){
    navLinks.style.right = "-100%";
    closeIcon.style.display = "none";
    navIcon.style.display = "block";
};