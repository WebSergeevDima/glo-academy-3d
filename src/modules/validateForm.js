const validateForm = (list) => {

    const regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
    let success = true;

    list.forEach(item => {

        item.classList.remove('error');

        switch (item.name) {
            case 'user_phone':
                if (item.value.length !== 18) {
                    item.classList.add('error');
                    success = false;
                } else {
                    item.classList.remove('error');
                }
                break;
            case 'user_name':
                if (item.value.trim().length < 2) {
                    item.classList.add('error');
                    success = false;
                } else {
                    item.classList.remove('error');
                }
                break;
            case 'user_email':
                if (!regEmail.test(item.value.trim())) {
                    item.classList.add('error');
                    success = false;
                } else {
                    item.classList.remove('error');
                }
                break;
        }

    });

    return success;

}


export default validateForm;