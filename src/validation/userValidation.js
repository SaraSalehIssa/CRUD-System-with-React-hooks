export const validationUserData = (values) => {
    let errors = {};

    if (values.name.trim() == "")
        errors.name = "Username is required!";
    else if (values.name.trim().length < 3)
        errors.name = "Username must be at least 3 characters!";

    if (values.email.trim() == "")
        errors.email = "Email is required!";
    else if (values.email.trim().length < 13)
        errors.email = "Email must be at least 13 characters!";

    if (values.password.trim() == "")
        errors.password = "Password is required!";
    else if (values.password.trim().length < 3)
        errors.password = "Password must be at least 3 characters!";

    return errors;
}