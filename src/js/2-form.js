const feedbackFormEl = document.querySelector('.feedback-form');

const formData = {
    email: '',
    message: ''
}
const localStorageValue = localStorage.getItem("feedback-form-state");
if (localStorageValue) {
    const parselocStrValue = JSON.parse(localStorageValue);
    formData.email = parselocStrValue.email || '';
    formData.message = parselocStrValue.message || '';
    feedbackFormEl.elements.email.value = formData.email;
   feedbackFormEl.elements.message.value = formData.message;
}
feedbackFormEl.addEventListener('input', handler);
function handler(ev) {
    formData.email = ev.currentTarget.elements.email.value;
    formData.message = ev.currentTarget.elements.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}


feedbackFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
if (feedbackFormEl.elements.email.value.trim() == '' || feedbackFormEl.elements.message.value.trim() == '') {
    alert('Fill please all fields');
    return;
}
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    feedbackFormEl.reset();
    formData.email = '';
  formData.message = '';
})

