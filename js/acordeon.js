let elementosPosiciones = document.getElementsByClassName("posiciones");

for (let i=0; i< elementosPosiciones.length; i++){
    elementosPosiciones[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let jugadoras = this.nextElementsSibling;
        if (jugadoras.style.display == "block") {
            jugadoras.style.display == "none";
        } else {
            jugadoras.style.display == "block";
        }
    });
}