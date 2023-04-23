const form = document.querySelector("#create-account-form");
const firstNameInput = document.querySelector('#firstname');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector("#password");


form.addEventListener('submit', (event) => {
    
    
    
    validateForm();
    
    
    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();
  }
});


function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result=true;
    inputContainers.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}


function validateForm() {
    // firstname
    if(firstNameInput.value.trim()==''){
        setError(firstNameInput, 'First name cannot be empty');
    } else{
        setSuccess(firstNameInput)
    }
    // lastname
    if(lastnameInput.value.trim()==''){
        setError(lastnameInput, 'Last name cannot be empty');
    }else{
        setSuccess(lastnameInput)
    }
    // email
    if (emailInput.value.trim() == "") {
      setError(emailInput, "Email cannot be empty");
    } else if(isEmailValid(emailInput.value)) {
        setSuccess(emailInput);

    }else {
      setError(emailInput, 'Looks like this is not an email');
    }
    // password
    if (passwordInput.value.trim() == "") {
      setError(passwordInput, "Password cannot be empty");
    } else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20) {
        setError(passwordInput, 'password min is 6 and max is 20 characters');
    } else {
        setSuccess(passwordInput);
    }






}


function setError(element,errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}


function setSuccess(element){
    const parent = element.parentElement;
    if (parent.classList.contains("error")) {
      parent.classList.remove("error");
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);

}

























// const firstname = document.getElementById('firstname')
// const lastname = document.getElementById('lastname')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const form = document.querySelector(".form-container2");
// const error = document.querySelector('.feedback')
// const error2 = document.querySelector('.feedback1')
// form.addEventListener('submit', (e) =>{
//     let message = []
//     if(firstname.value === '' || firstname.value == null){
//         message.push('first name cannot be empty')
//     }

//     if(lastname.value === '' || lastname.value == null){
//         message.push('last name cannot be empty')
//     }
//     if(password.value.length < 1) {
//         message.push('password cannot be empty')
//     }


//     if(message.length > 0){
//         e.preventDefault()
//         error.innerText = message.join(', ')


//     }
    


// })












// const firstnamePattern = /^[a-zA-Z]$/;
// const firstnamePattern1 = /^[' ]$/;

// if (firstnamePattern.test(firstname)) {
//   //feedback
//   feedback.textContent = " ";
// } else if (firstnamePattern1.test(firstname)) {
//   //feedback
//   feedback.textContent = "first name cannot be empty";
// }