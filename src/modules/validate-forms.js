import maskPhone from './maskphone';
import validateForm from "./validateForm";


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

    const inputsPhone = [
        document.querySelector('#form1 [type="tel"]'),
        document.querySelector('#form2 [type="tel"]'),
        document.querySelector('#form3 [type="tel"]')
    ];

    inputsText.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/g, '');
            validateForm([e.target], 'item');
        });
    });

    inputsEmail.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@\-_.!~*']/g, '');
            validateForm([e.target], 'item');
        });
    });

    inputsPhone.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\s\d-()\+]/g, '').slice(0,18);
            validateForm([e.target], 'item');
        });
    });

    maskPhone('#form1 [type="tel"], #form2 [type="tel"], #form3 [type="tel"]');

}

export default validateForms