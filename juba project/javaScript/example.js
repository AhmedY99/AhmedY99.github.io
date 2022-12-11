const menuIcon = document.getElementById("menu-icon");
const slideMenu = document.getElementById("slide-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

searchIcon.addEventListener('click', function(){
    if(searchBox.style.top =='80px'){
        searchBox.style.top ='128px';
        searchBox.style.pointerEvents ='auto';
    }
    else{
        searchBox.style.top = '80px';
        searchBox.style.pointerEvents = 'none';
    }
});
menuIcon.addEventListener('click', function(){
    if(slideMenu.style.width == "100%"){
        slideMenu.style.width ='0';
        slideMenu.style.pointerEvents ="none";
    }
    else{
        slideMenu.style.width = "100%";
        slideMenu.style.pointerEvents ="auto";
    }
});