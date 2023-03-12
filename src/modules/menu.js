const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const menuHandler = () => menu.classList.toggle('active-menu');
    menuBtn.addEventListener('click', menuHandler);
    closeBtn.addEventListener('click', menuHandler);
    menuItems.forEach(item => item.addEventListener('click', menuHandler));

}

export default menu