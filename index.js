let slide = document.querySelectorAll(".patientCard");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("close");
let connectBtn = document.getElementById("connectBtn")

let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 99}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000)




connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value ==  ""){
        alert("Please Enter Detail")
    }else{
        alert("You Logged In")
        email.value="";
        pass.value="";

    }

})
