const openBar = document.querySelector('.fa-bars');
const closeBar = document.querySelector('.fa-xmark');
const headerLists = document.querySelector('.header__lists');

openBar.addEventListener('click', function() {
    headerLists.classList.remove('hidden');
})

closeBar.addEventListener('click', function() {
    headerLists.classList.add('hidden');
})