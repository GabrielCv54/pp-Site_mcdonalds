const menu= {};
menu[''];
const fast_food = [];

function Pedido(){
    var order = document.getElementById('order');
    var address = document.querySelector('input#address').value;
    var num = document.querySelector('input#number').value;
   // var infoAdd = document.getElementById('infoAdd').value;
    var complement = document.querySelector('input#complement').value;

    if(typeof(address) != 'text' || address==='' || typeof(num) != 'number' || num ==='' ){
        alert('Erro em algum campo, por favor verifique e preencha-o corretamente de novo!')
        console.log('Erro em algum campo, por favor verifique e preencha-o corretamente de novo!')
    }else{
        var paragr = document.createElement('p')
        paragr.textContent = `Dados do Pedido: Pedido🍔 - ${order} \n Endereço📍🗺-${address + num} \n Complemento: ${complement} `
        order.appendChild(paragr)
    }


}

const btn = document.querySelector('button#invite')
btn.addEventListener('click',Pedido);

const form = document.querySelector('div.delivery_form');
const botao = document.getElementById('fazerPedido');
botao.addEventListener('click', function() {
        if(form.style.display ==='none' || form.style.display===''){
            form.style.display = 'block'
        }else{
            form.style.display == 'none'
        }
    })    



