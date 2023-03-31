import {
    animate
} from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    let isMobile = false;

    const modalAnimation = isOpen => {

        animate({
            duration: 200,
            timing(timeFraction) {
                return isOpen ? 1 - timeFraction : timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress;
                if (progress <= 0) {
                    modal.style.display = 'none';
                }

            }
        });

    }

    const buttonHandler = () => {

        modal.style.display = 'block';
        if (isMobile) {
            modal.style.opacity = '1';
            return false;
        }

        modalAnimation(false);

    }

    const closeBtnHandler = () => {

        if (isMobile) {
            modal.style.display = 'none';
            return false;
        }

        modalAnimation(true);

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