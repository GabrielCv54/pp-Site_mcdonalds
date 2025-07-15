//window.alert('Seja bem vindo ao nossa página!')


function login(){
   var user_name = document.querySelector('#user_name').value;
   var password = document.getElementById('senha').value;
   


}

var idades = [12, 16, 15, 17, 14];
var maiores = false;
for (var i = 0; i < idades.length; i++) {
   if (idades[i] >= 18) {
      console.log(idades[i]);
      maiores = true;
}
}
if (!maiores) {
  console.log("Não há idades maiores que 18 na lista");
}
