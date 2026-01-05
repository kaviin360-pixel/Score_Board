let count1=0
let count2=0

let scoreHome=document.getElementById("scoreboardhome")
let scoreGuest=document.getElementById("scoreboardguest")
function func1(){
    count1+=1
    scoreHome.textContent=count1
}
function func2(){
    count1+=3
    scoreHome.textContent=count1
}
function func3(){
    count1+=5
    scoreHome.textContent=count1
}
function func4(){
    count2+=1
    scoreGuest.textContent=count2
}
function func5(){
    count2+=3
    scoreGuest.textContent=count2
}
function func6(){
    count2+=5
    scoreGuest.textContent=count2
}
