const menu = () => {
    const menu = document.querySelector('menu');
    const btnToServiceBlock = document.querySelector('main [href="#service-block"]');

    const menuHandler = () => menu.classList.toggle('active-menu');

    const buttonScrollHendler = (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    btnToServiceBlock.addEventListener('click', buttonScrollHendler);

    document.addEventListener('click', (e) => {

        if (e.target.closest('.menu') || e.target.classList.contains('close-btn')) {
            menuHandler();
        }

        if (e.target.matches('a') && e.target.closest('li')) {

            const id = e.target.getAttribute('href').slice(1);

            menuHandler();

            e.preventDefault();

            document.getElementById(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    });
}

export default menu