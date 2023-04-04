let contador = 0;
const valor = document.querySelector("#valor");
const disminuir = document.querySelector(".disminuir");
const resetear= document.querySelector(".resetear");
const aumentar= document.querySelector(".aumentar");

disminuir.onclick=function(){
    contador--;
    valor.innerHTML= contador;
    if(contador<0){
valor.style.color="red"
    }else if(contador===0){
valor.style.color="black"
    }
}
resetear.onclick=()=>{
    contador=0;
    valor.innerHTML =contador;
    if(contador===0){
        valor.style.color="black"
    }
}

aumentar.onclick=function(){
    contador++;
    valor.innerHTML=contador;
    if(contador>0){
        valor.style.color="green"
    }else if(contador===0){
        valor.style.color = "black"
    } 
    }










