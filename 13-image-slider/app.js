const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const ImageContainer = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");


let currentImg = 1;
let timeout;

nextEl.addEventListener("click", function(){
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", function(){
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

updateImg()

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = imgsEl.length
    }
    ImageContainer.style.transform = `translateX(-${(currentImg -1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}