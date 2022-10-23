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