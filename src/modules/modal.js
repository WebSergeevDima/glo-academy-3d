import {
    animate
} from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    let isMobile = false;

    const buttonHandler = () => {

        if (isMobile) {
            modal.style.display = 'block';
            modal.style.opacity = '1';
            return false;
        }

        modal.style.opacity = '0';
        modal.style.display = 'block';

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress;
            }
        });

    }

    const closeBtnHandler = () => {

        if (isMobile) {
            modal.style.display = 'none';
            return false;
        }

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = 1 - progress;
                if (progress === 1) {
                    modal.style.display = 'none';
                }
            }
        });

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