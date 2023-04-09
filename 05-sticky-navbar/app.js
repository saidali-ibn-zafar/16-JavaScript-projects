const navbarEl = document.querySelector('.navbar');
const bottomContainerEl = document.querySelector('.bottom-container');
    // console.log(bottomContainerEl.offsetTop);
    // console.log(navbarEl.offsetHeight);

window.addEventListener('scroll', function(){
    // console.log(window.scrollY);
    if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add('active');
    }
    else{
        navbarEl.classList.remove('active');
    }
});