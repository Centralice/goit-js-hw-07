const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value === '' ||
    event.target.elements.password.value === ''
  ) {
    alert('All form fields must be filled in');
  } else {

    const obj = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value
    }
    
    console.log(obj);
  }
  formEl.reset();
}
