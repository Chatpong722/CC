let menu1
let menu2

document.getElementById("mysubmit").onclick = function(){
    menu1=document.getElementById("menu1").value*50
    menu2=document.getElementById("menu2").value*60
    document.getElementById("summenu1").innerHTML = menu1+" บาท"
    document.getElementById("summenu2").innerHTML = menu2+" บาท"
     document.getElementById("sumall").innerHTML = menu2+menu1+" บาท"
}



