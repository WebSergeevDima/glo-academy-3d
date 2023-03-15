const calc = () => {

    const calcInputItems = document.querySelectorAll('input.calc-item');

    calcInputItems.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
        });
    });

}

export default calc