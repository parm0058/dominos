const sizes = document.getElementById("sizes");
const sizes2 = document.querySelector(".sizes");

sizes.addEventListener('change',function(event){
    
    sizes2.textContent = sizes.value;
    })
const pepperoni = document.getElementById("pepperoni");
const sausage = document.getElementById("sausage");
const olives = document.getElementById("olives");

const buttons = document.querySelectorAll(".button")

const $pepperoni = document.querySelector(".pepperoni")
const $sausage = document.querySelector(".sausage")
const $olives = document.querySelector(".olives")
for (let button of buttons){
    button.addEventListener("click", function(event){
        if (button.id == "pepperoni"){
            if (button.classList.contains("checked")){
                button.classList.remove("checked")
                $pepperoni.classList.remove("show")
            }   
            else{
                button.classList.add("checked")
                $pepperoni.classList.add("show")
            }
        }
       if (button.id == "sausage"){
            if (button.classList.contains("checked")){
                button.classList.remove("checked")
                $sausage.classList.remove("show")
            }   
            else{
                button.classList.add("checked")
                $sausage.classList.add("show")
            }
        }
        if (button.id == "olives"){
            if (button.classList.contains("checked")){
                button.classList.remove("checked")
                $olives.classList.remove("show")
            }   
            else{
                button.classList.add("checked")
                $olives.classList.add("show")
            }
        }
    })
}



//const sizes = document.getElementById("sizes");
//const sizes2 = document.querySelector(".sizes");
//
//sizes.addEventListener('change',function(event){
//    
//    sizes2.textContent = sizes.value;
//    })
//const pepperoni = document.getElementById("pepperoni");
//const sausage = document.getElementById("sausage");
//const olives = document.getElementById("olives");
//
//const buttons = document.querySelectorAll(".button")
//for (let button of buttons){
//    button.addEventListener("click", function(event){
//        if (button.classList.contains("checked")){
//        button.classList.remove("checked")
//        document.querySelector(`.${button.id}`).classList.remove("show")
//    }   
//    else{
//        button.classList.add("checked")
//        document.querySelector(`.${button.id}`).classList.add("show")
//    }
//
//    })
//}


