import validator from "validator/es";

const loginFormValidator = ({emailAddress, password}) => {
    let data = {
        emailAddress: null,
        password: null,
    };

    if (validator.isEmpty(emailAddress)) {
        data.emailAddress = 'Bu alan bos birakilamaz';
    } else if (!validator.isEmail(emailAddress)) {
        data.emailAddress = 'Gecerli bir e-posta adresi girmelisiniz';
    }

    if (validator.isEmpty(password)) {
        data.password = 'Bu alan bos birakilamaz';
    }


    if (!data.emailAddress && !data.password) {
        return null;
    }

    return data;
};

export default loginFormValidator;