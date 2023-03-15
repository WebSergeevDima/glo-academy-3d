const validateForms = () => {

    const inputsText = [
        document.querySelector('#form1 [type="text"]'),
        document.querySelector('#form2 [placeholder="Ваше сообщение"]'),
        document.querySelector('#form2 [type="text"]'),
        document.querySelector('#form3 [type="text"]')
    ];

    const inputsEmail = [
        document.querySelector('#form1 [type="email"]'),
        document.querySelector('#form2 [type="email"]'),
        document.querySelector('#form3 [type="email"]')
    ];


    const inputsTel = [
        document.querySelector('#form1 [type="tel"]'),
        document.querySelector('#form2 [type="tel"]'),
        document.querySelector('#form3 [type="tel"]')
    ];

    inputsText.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/g, '');
        });
    });

    inputsEmail.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']/g, '');
        });
    });

    inputsTel.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()-]/g, '');
        });
    });

}

export default validateForms