const form = document.getElementById('form');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const batchno = document.getElementById('batch');
const moduleno = document.getElementById('module');
// const tc = document.getElementById('tc')

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Invalid email address');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });  
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    }else if (input.value.length > max) {
        error(input, `${input.id} must be a maximum of ${max} characters`);
    }else {
        success(input);
    }
     
}

function checkPhone(input) {
    var exp = /^\d{10}$/;   
    if(!exp.test(input.value)) 
        error(input, "Phone field must be 10 characters.");
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([fname, lname, email, phone, batchno, moduleno]);
    checkEmail(email);
    checkLength(fname,3,15);
    checkLength(lname,3,15);
    checkPhone(phone);
});