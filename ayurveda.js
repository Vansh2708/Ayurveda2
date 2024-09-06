const btn=document.querySelector('.btn');
const know=document.querySelector('.know');
const btn2=document.querySelector('.btn2');
btn.addEventListener('click',()=>{
    know.classList.add('active');
    btn.classList.add('active');
    btn2.classList.add('active');
})
btn2.addEventListener('click',()=>{
    know.classList.remove('active');
    btn.classList.remove('active');
    btn2.classList.remove('active');
})