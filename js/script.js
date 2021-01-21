window.addEventListener('scroll', function(){
    var header = document.querySelector('body header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menuToggle = document.querySelector('header nav .menu-toggle input');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
li.forEach(el => {
    el.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});




 

