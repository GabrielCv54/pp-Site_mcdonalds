var index = 1;

let slides = document.getElementsByClassName('foto');

function show(n){
    if(n > slides.length){
        index = 1;
    }else if(n<1){
        index = slides,length;
    }

    for(var i=0;i< slides.length;i++){
        slides[i].classList.remove("first")
    }

    slides[index -1].classList.add('first')
}

function autoSlide(){
    index++

    show(index)

    setTimeout(autoSlide, 3000)

}

document.addEventListener("DOMContentLoaded",() =>{
    show(index)

    autoSlide()
})