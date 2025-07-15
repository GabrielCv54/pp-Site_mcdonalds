function time(){
    var now =  new Date().getHours()
   // var nowValue = now.value 

    var domNow = document.getElementById('data');
    domNow.innerHTML = domNow

}

time()