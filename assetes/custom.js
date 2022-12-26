// slide
var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-img img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')
var currentIndex = 0;
function updateImageByIndex(index){
    document.querySelectorAll('.list-img div').forEach(item=>{
        item.classList.remove('active');
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    // listImg(index).parentElement.classList.add('active')
}

listImg.forEach((imgFeature, index) =>{
    imgFeature.addEventListener('click', e =>{
        updateImageByIndex(index)
    })
})
prevBtn.addEventListener('click', e=>{
    if (currentIndex == 0) {
        currentIndex = listImg.length-1
    }
    else{
        currentIndex--
    }
    
    imgFeature.style.animation = ''
    updateImageByIndex(currentIndex)
    setTimeout(() =>{
        imgFeature.style.animation = 'styleLeft 1s ease forwards'
    }, 0.1)
})
nextBtn.addEventListener('click', e=>{
    if (currentIndex == listImg.length-1) {
        currentIndex = 0
    }
    else{
        currentIndex++
    }
    imgFeature.style.animation = ''
    updateImageByIndex(currentIndex)
    setTimeout(() =>{
        imgFeature.style.animation = 'styleRight 1s ease forwards'
    }, 0.1)
})
updateImageByIndex(0)
//menu product
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});