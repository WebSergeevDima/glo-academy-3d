import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import calc from "./modules/calc.js";
import validateForms from "./modules/validate-forms.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import sendForm from "./modules/sendForm";

timer('2023 6 08');
menu();
modal();
calc();
validateForms();
tabs();
slider();
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form2'
});
sendForm({
    formId: 'form3'
});