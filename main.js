const butons = document.querySelectorAll('button');
const div = document.getElementById("sonuc");

let kontrol = 0 ;
butons.forEach(buton =>{
    buton.addEventListener('click',()=>{
        if(buton.innerText != ""){
            div.innerHTML = "Wrong Move !!!!";
        }else{
            div.innerHTML = "";
            if(kontrol %2 == 0){
                buton.innerText = "X";
            }else if(kontrol %2 == 1){
                buton.innerText = "O";
            }
            kontrol++;
        }
        kazanan();
    })
});

function kazanan(){
    if(butons[0].innerText == "X" && butons[1].innerText == "X" && butons[2].innerText == "X"){
        div.innerHTML = "The winner is X  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
            butons[7].setAttribute("disabled" , "false")
        })
    }else if(butons[0].innerText == "X" && butons[3].innerText == "X" && butons[6].innerText == "X"){
        div.innerHTML = "The winner is X  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[0].innerText == "X" && butons[4].innerText == "X" && butons[8].innerText == "X"){
        div.innerHTML = "The winner is X  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[3].innerText == "X" && butons[4].innerText == "X" && butons[5].innerText == "X"){
        div.innerHTML = "The winner is X  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[6].innerText == "X" && butons[7].innerText == "X" && butons[8].innerText == "X"){
        div.innerHTML = "The winner is X !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[1].innerText == "X" && butons[4].innerText == "X" && butons[7].innerText == "X"){
        div.innerHTML = "The winner is X !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[2].innerText == "X" && butons[5].innerText == "X" && butons[8].innerText == "X"){
        div.innerHTML = "The winner is X !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[2].innerText == "X" && butons[4].innerText == "X" && butons[6].innerText == "X"){
        div.innerHTML = "The winner is X  !!!"; 
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        }) 
    }
    if(butons[0].innerText == "O" && butons[1].innerText == "O" && butons[2].innerText == "O"){
        div.innerHTML = "The winner is O  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[0].innerText == "O" && butons[3].innerText == "O" && butons[6].innerText == "O"){
        div.innerHTML = "The winner is O !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[0].innerText == "O" && butons[4].innerText == "O" && butons[8].innerText == "O"){
        div.innerHTML = "The winner is O  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[3].innerText == "O" && butons[4].innerText == "O" && butons[5].innerText == "O"){
        div.innerHTML = "The winner is O  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[6].innerText == "O" && butons[7].innerText == "O" && butons[8].innerText == "O"){
        div.innerHTML = "The winner is O !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[1].innerText == "O" && butons[4].innerText == "O" && butons[7].innerText == "O"){
        div.innerHTML = "The winner is O  !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[2].innerText == "O" && butons[5].innerText == "O" && butons[8].innerText == "O"){
        div.innerHTML = "The winner is O !!!";
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }else if(butons[2].innerText == "O" && butons[4].innerText == "O" && butons[6].innerText == "O"){
        div.innerHTML = "The winner is O  !!!";  
        butons.forEach(buton =>{
            buton.setAttribute("disabled", "");
        })
    }
}
