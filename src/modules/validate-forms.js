import maskPhone from './maskphone';
import {validateFormItem} from "./validateForm";


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
        document.querySelector('#form1 [type="phone"]'),
        document.querySelector('#form2 [type="phone"]'),
        document.querySelector('#form3 [type="phone"]')
    ];

    inputsText.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я- ]/g, '');

            console.log('e.target: ', e.target.length);

        });
    });


    inputsEmail.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@\-_.!~*']/g, '');

        });
    });

    maskPhone('#form1 [type="tel"], #form2 [type="tel"], #form3 [type="tel"]');

}

export default validateForms