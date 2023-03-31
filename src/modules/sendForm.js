import validateForm, {clearErrorsOfForm} from "./validateForm";

const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const formStatus = document.getElementById('form-status');
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

        statusBlock.textContent = loadText;

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(item => {
            const elem = document.getElementById(item.id);

            if (item.type === 'block') {
                formBody[item.id] = elem.textContent;
            } else if (item.type === 'input') {
                formBody[item.id] = elem.value;
            }

        });

        if (validateForm(formElements)) {
            sendData(formBody).then(data => {

                statusBlock.textContent = successText;

                formElements.forEach(item => {
                    item.value = '';
                });

            });
        } else {
            statusBlock.textContent = errorText;
            console.log('Данные не валидны!');
        }

        formStatus.insertAdjacentElement('afterbegin', statusBlock);


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