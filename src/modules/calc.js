const calc = (price = 100) => {

    const calcInputItems = document.querySelectorAll('input.calc-item');
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    let totalValue = 0;
    let startNum = 0;
    let startTime = 0;
    let speedAnimateNumber = 500;

    const countCalc = () => {
        const calcTypeValue = +calcType.value;
        const calcSquareValue = +calcSquare.value;
        let calcCountValue = 1;
        let calcDayValue = 1;
        startTime = new Date().getTime();

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        }

        animateNumber();

    };

    const animateNumber = () => {
        let currTime = new Date().getTime();
        startNum = ((currTime - startTime) / speedAnimateNumber) * totalValue;
        if (startNum < totalValue) {
            total.textContent = parseInt(startNum++);
        } else {
            total.textContent = parseInt(totalValue);
        }
        window.requestAnimationFrame(animateNumber);
    }

    calcInputItems.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
        });
    });

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType ||
            e.target === calcSquare ||
            e.target === calcCount ||
            e.target === calcDay) {
            countCalc();
        }
    });



}

export default calc