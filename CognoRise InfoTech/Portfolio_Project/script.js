let mobileNav=document.querySelector('.mobile-nav');
let hamberger=document.querySelector('.hamberger');
let times=document.querySelector('.times');
hamberger.addEventListener('click',()=>{
    mobileNav.classList.add('open');
});
times.addEventListener('click',()=>{
    mobileNav.classList.remove('open');
});