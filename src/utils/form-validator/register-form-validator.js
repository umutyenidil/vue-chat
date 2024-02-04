import validator from "validator/es";

const registerFormValidator = ({username, emailAddress, password, repeatPassword}) => {
    let data = {
        username: null,
        emailAddress: null,
        password: null,
        repeatPassword: null,
    };

    if (validator.isEmpty(username)) {
        data.username = 'Bu alan bos birakilamaz';
    } else if (!validator.isAlphanumeric(username)) {
        data.username = 'Sadece harf veya rakam kullanmalisiniz';
    }

    if (validator.isEmpty(emailAddress)) {
        data.emailAddress = 'Bu alan bos birakilamaz';
    } else if (!validator.isEmail(emailAddress)) {
        data.emailAddress = 'Gecerli bir e-posta adresi girmelisiniz';
    }

    if (validator.isEmpty(password)) {
        data.password = 'Bu alan bos birakilamaz';
    } else if (!(password.length >= 8)) {
        data.password = 'Parolaniz minimum 8 karakter icermelidir';
    }

    if (password !== repeatPassword) {
        data.repeatPassword = 'Parolalar eslesmiyor';
    }

    if (!data.username && !data.emailAddress && !data.password && !data.repeatPassword) {
        return null;
    }

    return data;
};

export default registerFormValidator;