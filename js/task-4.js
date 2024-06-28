const form = document.querySelector('form.login-form');
form.addEventListener('submit', formSubmit);
const inputList = form.querySelectorAll('input');

function formSubmit(e) {
    e.preventDefault();
    let outputObject = {};
    for (const input of inputList) {
        let prop = input.name;
        if (input.value.length === 0) {
            return alert('All form fields must be filled in');
        }
        outputObject[prop] = input.value.trim();
    }
    console.log(outputObject);
    form.reset();
};
