function BigTasty(){
    
    let data  = new Date().getFullYear()
    let dataValue = document.getElementById('date')


    let priceTasty1 = document.getElementById('Price');
    let priceTasty2 = document.getElementById('Price2');
    let priceTasty3 = document.getElementById('Price3');
    let priceTasty4 = document.querySelector('#price4')
    let priceValue = 'R$ '+ "28,50 "
    let Value2 ='R$ ' + "37,90"
    let Value3 ="R$ " + "33,90"
    let Value4 = "R$ " + "45,90"
     
    priceTasty1.innerHTML = priceValue
    priceTasty2.innerHTML = Value2
    priceTasty3.innerHTML = Value3
    priceTasty4.innerHTML = Value4
    dataValue.innerHTML = data

}