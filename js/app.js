document.querySelector('#register').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'block';
});

document.querySelector('#closeModal').addEventListener('click', () => {
    document.querySelector('.custom-modal').style.display = 'none';
});

let config = {
    'username': {
        required: true,
        minlength: 5,
        maxLength: 50
    },
    'register_email': {
        required: true,
        email: true,
        minlength: 5,
        maxLength: 50
    },
    'register_password':{
        required: true,
        minlength: 7,
        maxLength: 25,
        matching: 'repeat_password'
    },
    'repeat_password': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'register_password'
    }
};

let validator = new Validator(config, '#registration-form');

document.querySelector('#registration-form').addEventListener('submit', e => {
    e.preventDefault();

    if(validator.validationPassed()){

        let user = new User();
        user.username = document.querySelector('#username').value;
        user.email = document.querySelector('#register_email').value;
        user.password = document.querySelector('#register_password').value;
        user.create();

    }else{
        alert('Nije ok');
    }
});