const menus = document.querySelectorAll('.menu__button[data-goto]');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const body = document.querySelector('body');
const lines = document.querySelectorAll('.line');

if(burger){
    burger.addEventListener('click', function(e){
        lines.forEach(element => element.classList.toggle('pressed'));
        header.classList.toggle('pressed');
        body.classList.toggle('lock');
    })
}

if (menus.length > 0) {
    menus.forEach(menu => {
        menu.addEventListener('click', onMenuClick);
    });

    function onMenuClick(e) {
        const menu = e.target;
        if (menu.dataset.goto && document.querySelector(menu.dataset.goto)) {
            const gotoBlock = document.querySelector(menu.dataset.goto);
            let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;        
            
            if(header.classList.contains('pressed')){
                lines.forEach(element => element.classList.remove('pressed'));
                header.classList.remove('pressed');
                body.classList.remove('lock');

                gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
            }
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
    
            e.preventDefault();
        }
    };
};