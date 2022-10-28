/* $(document).ready(function(){
    
    $(window).scroll(function(){
        if( $(this).scrollTop() < 0){
            $('header').addClass('header2');
        } else {
            $('header').removeClass('header2');
        }
    });

}); */


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

/*
var posiciones = document.getElementsByClassName("posiciones");

for (let i=0; i< posiciones.length; i++){
    posiciones[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let jugadoras = this.nextElementsSibling;
        if (jugadoras.style.display == "block") {
            jugadoras.style.display == "none";
        } else {
            jugadoras.style.display == "block";
        }
    });
}*/

