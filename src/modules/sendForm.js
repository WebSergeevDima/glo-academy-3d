import validateForm from "./validateForm";

const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const formStatus = form.querySelector('.form-status');
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const sendData = data => {

        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }


    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(item => {
            const elem = document.getElementById(item.id);

            if (item.type === 'block' && (elem.textContent && /[^0]/g.test(elem.textContent))) {
                formBody[item.id] = elem.textContent;
            } else if (item.type === 'input' && (elem.value && /[^0]/g.test(elem.value))) {
                formBody[item.id] = elem.value;
            }

        });

        if (validateForm(formElements)) {

            addMessageOfForm(loadText);

            sendData(formBody).then(data => {

                addMessageOfForm(successText);
                removeMessageOfForm();

                formElements.forEach(item => {
                    item.value = '';
                });

            });
        } else {
            addMessageOfForm(errorText);
            removeMessageOfForm();
        }


    }

    const addMessageOfForm = (message) => {
        formStatus.innerHTML = '';
        statusBlock.textContent = message;
        formStatus.insertAdjacentElement('afterbegin', statusBlock);
    }

    const removeMessageOfForm = () => {
        return setTimeout(() => {
            formStatus.innerHTML = '';
        }, 2000);
    }

    try {

        if (!form) {
            throw new Error('Форма не найдена!');
        }

        form.addEventListener('submit', e => {
            e.preventDefault();

            submitForm();

        });

    } catch (error) {
        console.log(error.message)
    }



}


export default sendForm;