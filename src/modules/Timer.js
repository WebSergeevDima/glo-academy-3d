const Timer = (deadline) => {
    const timerDays = document.querySelector('#timer-days');
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let days = Math.floor((timeRemaining / 60 / 60 / 24) % 24);

        return {timeRemaining, days, hours, minutes, seconds};

    }

    const updateClock = setInterval(() => {
        const {timeRemaining, days, hours, minutes, seconds} = getTimeRemaining();
        timerDays.textContent = isLessThanZero(days);
        timerHours.textContent = isLessThanZero(hours);
        timerMinutes.textContent = isLessThanZero(minutes);
        timerSeconds.textContent = isLessThanZero(seconds);

        if(timeRemaining <= 0) {
            clearInterval(updateClock);
        }
    }, 1000);

    const isLessThanZero = (num) => {
        return num < 0 ? '00' : isDecimalNumber(num);
    }

    const isDecimalNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    }

}

export default Timer