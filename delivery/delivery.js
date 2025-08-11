const menu= {}
const fast_food = []

function Pedido(){

const botao = document.getElementById('fazerPedido');
const form = document.querySelector('div.delivery_form')
var name = document.querySelector('input#name')


botao.addEventListener('click', function() {
        if(form.style.display ==='none' || form.style.display===''){
            form.style.display = 'block'
        }else{
            form.style.display == 'none'
        }
    })    

}

