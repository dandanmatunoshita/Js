var p = document.getElementsByTagName("p")


p[0].innerHTML = "Manipulado vi JS"

/*
alert(p[1].innerHTML)


for(var i = 0; i < p.length; i++){
    p[i].innerHTML = "Manipulado via JS - " + i;
}
*/


for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i
}


