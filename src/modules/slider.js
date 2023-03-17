const slider = () => {

    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    const dotsBlock = document.querySelector('.portfolio-dots');
    let dots;
    const sliderInterval = 3000;
    let currentSlide = 0;
    let interval;

    const renderDots = () => {
        let dotStr = '';

        slides.forEach((item, index) => {
            dotStr += `<li class="dot${index === 0 ? ' dot-active' : ''}"></li>`;
        });


        dotsBlock.innerHTML = dotStr;
        dots = dotsBlock.querySelectorAll('.dot');
    }


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = () => {
        interval = setInterval(autoSlide, sliderInterval);
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    renderDots();
    startSlide(sliderInterval);

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        }

        if (e.target.matches('#arrow-left')) {
            currentSlide--;
        }

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    })


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(sliderInterval);
        }
    }, true);


}

export default slider