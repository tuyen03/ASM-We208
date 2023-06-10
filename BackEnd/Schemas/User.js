import joi from 'joi';

export const signupSchema = joi.object({
    User_name: joi.string().required().messages({
        "any.required": "Name is required.",
        "string.empty": "Please enter a Name"
    }),
    User_email: joi.string().email().required().messages({
        "any.required": "Email is required.",
        "string.empty": "Please enter a Email Address.",
        "string.email": "Please enter a valid Email Address.",
    }),
    User_password: joi.string().min(6).required().messages({
        "any.required": "Password is required.",
        "string.empty": "Please enter a Password.",
        "string.min": "Please enter at least 6 characters",
    }),

})
export const signinSchema = joi.object({
    User_email: joi.string().email().required().messages({
        "any.required": "Email is required.",
        "string.empty": "Please enter a Email Address.",
        "string.email": "Please enter a valid Email Address.",
    }),
    User_password: joi.string().min(6).required().messages({
        "any.required": "Password is required.",
        "string.empty": "Please enter a Password.",
        "string.min": "Please enter at least 6 characters.",
    }),

})

export const userSchema = joi.object({
    User_name: joi.string().required().messages({
        "any.required": "Name is required.",
        "string.empty": "Please enter a Full Name."
    }),
    User_address: joi.string().required().messages({
        "any.required": "FullName is required.",
        "string.empty": "Please enter a Address.",
    }),
    User_tel: joi.string().regex(/^0/).min(10).required().messages({
        "string.empty": "Please enter a Phone Number.",
        "string.min": "Please enter more than 10 characters.",
        "string.pattern.base": "Please enter a valid Phone Number."
    }),
})


export const passwordSchema = joi.object({
    Password_old: joi.string().required().messages({
        "any.required": "Password Old is required",
        "string.empty": "Please enter a Password Old",
    }),
    Password_new: joi.string().min(6).required().messages({
        "any.required": "Password New is required.",
        "string.empty": "Please enter a Password New.",
        "string.min": "Please enter at least 6 characters.",
    }),
})



