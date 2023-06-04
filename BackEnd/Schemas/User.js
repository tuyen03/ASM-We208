import joi from 'joi';

export const signupSchema = joi.object({
    User_name: joi.string().required().messages({
        "any.required": "Name là dữ liệu bắt buộc",
        "string.empty": "Name không được để trống"
    }),
    User_email: joi.string().email().required().messages({
        "any.required": "Email là dữ liệu bắt buộc",
        "string.empty": "Email không được để trống",
        "string.email": "Email không đúng định dạng",
    }),
    User_password: joi.string().min(6).required().messages({
        "any.required": "Mật khẩu là dữ liệu bắt buộc",
        "string.empty": "Mật khẩu không được trống",
        "string.min": "Mật khẩu tối thiểu 6 kí tự",
    }),

})
export const signinSchema = joi.object({
    User_email: joi.string().email().required().messages({
        "any.required": "Email là dữ liệu bắt buộc",
        "string.empty": "Email không được để trống",
        "string.email": "Email không đúng định dạng",
    }),
    User_password: joi.string().min(6).required().messages({
        "any.required": "Mật khẩu là dữ liệu bắt buộc",
        "string.empty": "Mật khẩu không được trống",
        "string.min": "Mật khẩu tối thiểu 6 kí tự",
    }),

})

export const userSchema = joi.object({
    User_name: joi.string().required().messages({
        "string.empty": "Name không được để trống"
    }),
    User_address: joi.string().required().messages({
        "string.empty": "Name không được để trống"
    }),
    User_tel: joi.string().regex(/^0/).min(10).required().messages({
        "string.empty": "Số điện thoại không được để trống",
        "string.min": "Độ dài tối thiếu 10",
        "string.pattern.base": "Số điện thoại không đúng định dạng"
    }),
})

export const passwordSchema = joi.object({
    Password_old: joi.string().required().messages({
        "any.required": "Password_old là dữ liệu bắt buộc",
        "string.empty": "Vui lòng nhập mật khẩu cũ",
    }),
    Password_new: joi.string().min(6).required().messages({
        "any.required": "Password_old là dữ liệu bắt buộc",
        "string.empty": "Vui lòng nhập mật khẩu mới",
        "string.min": "Mật khẩu tối thiểu 6 kí tự",
    }),
})

