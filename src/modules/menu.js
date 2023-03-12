const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const btnToServiceBlock = document.querySelector('main [href="#service-block"]');

    const menuHandler = () => menu.classList.toggle('active-menu');
    menuBtn.addEventListener('click', menuHandler);
    closeBtn.addEventListener('click', menuHandler);

    const buttonScrollHendler = (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    menuItems.forEach(item => {
        item.addEventListener('click', menuHandler)
        item.addEventListener('click', buttonScrollHendler)
    });

    btnToServiceBlock.addEventListener('click', buttonScrollHendler);
}

export default menu