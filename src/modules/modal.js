const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    let opacity = 0;
    let intervalModalShow;
    let intervalModalHidden;
    let isMobile = false;

    const buttonHandler = () => {

        if (isMobile) {
            modal.style.display = 'block';
            modal.style.opacity = '1';
            return false;
        }

        modal.style.opacity = '0';
        modal.style.display = 'block';

        intervalModalShow = setInterval(() => {
            opacity += 0.01;
            modal.style.opacity = opacity;

            if (opacity >= 1) {
                clearInterval(intervalModalShow);
            }

        }, 10);
    }

    const closeBtnHandler = () => {

        if (isMobile) {
            modal.style.display = 'none';
            return false;
        }

        clearInterval(intervalModalShow);

        intervalModalHidden = setInterval(() => {
            opacity -= 0.01;
            modal.style.opacity = opacity;

            if (opacity < 0.1) {
                clearInterval(intervalModalHidden);
                modal.style.display = 'none';
            }

        }, 10);

    }

    const isMobileHendler = () => {
        isMobile = window.innerWidth < 768 ? true : false;
    }


    isMobileHendler();

    buttons.forEach(item => item.addEventListener('click', buttonHandler));

    window.addEventListener('resize', isMobileHendler);

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.closest('.popup-close')) {
            closeBtnHandler();
        }
    });

}

export default modal