import joi from "joi"
export const orderSchema = joi.object({
    name: joi.string().required().messages({
        "any.required": "Name is required.",
        "string.empty": "Please enter a Full Name."
    }),
    address: joi.string().required().messages({
        "any.required": "FullName is required.",
        "string.empty": "Please enter a Address.",
    }),
    tel: joi.string().regex(/^0/).min(10).required().messages({
        "string.empty": "Please enter a Phone Number.",
        "string.min": "Please enter more than 10 characters.",
        "string.pattern.base": "Please enter a valid Phone Number."
    }),
    user_id: joi.string().required().messages({
        "any.required": "user_id is required.",
        "string.empty": "Please enter a Full Name."
    }),
    product_list: joi.required().messages({
        "any.required": "product_list is required.",
        "string.empty": "Please enter a Full Name."
    }),
    payment_method: joi.string().required().messages({
        "any.required": "payment_method is required.",
        "string.empty": "Please enter a Full Name."
    }),
    total: joi.string().required().messages({
        "any.required": "total is required.",
        "string.empty": "Please enter a Full Name."
    }),
    date: joi.string().required().messages({
        "any.required": "date is required.",
        "string.empty": "Please enter a Full Name."
    }),
    status: joi.string().required().messages({
        "any.required": "str is required.",
        "string.empty": "Please enter a status."
    }),
})