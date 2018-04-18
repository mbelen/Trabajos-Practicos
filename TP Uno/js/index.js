var slide0 = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("img-slide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slide0++;
    if (slide0 > x.length) 
        {slide0 = 1} 
    x[slide0-1].style.display = "flex";
    
    setTimeout(carousel, 2000)
}