import Order from "../Models/Order";
import { orderSchema } from "../Schemas/Order";
export const Create_order = async (req, res) => {
    try {
        const { error } = orderSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errorMessages = {};
            error.details.forEach((err) => {
                errorMessages[err.context.key] = err.message;
            });

            return res.status(400).json({
                errors: errorMessages
            });
        }
        const data = await Order.create(req.body);
        console.log(data);
        return res.json({
            message: "Thêm sản phẩm thành công",
            data: data,
        });
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        });
    }
};

export const Get_All_order = async (req, res) => {
    try {
        const data = await Order.find();
        return res.json({
            message: "Lay dữ liệu thành công",
            data: data,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Lỗi Khi lấy dữ liệu",
            error: error.message,
        });
    }
};

export const Get_one_order = async (req, res) => {
    try {
        const data = await Order.findById(req.params.id);
        if (data) {
            return res.json({
                message: "Lấy dữ liệu thành công",
                data: data,
            });
        }
    } catch (error) {
        return res.status(404).json({
            message: "Lỗi Khi lấy dữ liệu",
            error: error.message,
        });
    }
};
export const Put_order = async (req, res) => {
    try {
        const { error } = orderSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errorMessages = {};
            error.details.forEach((err) => {
                errorMessages[err.context.key] = err.message;
            });

            return res.status(400).json({
                errors: errorMessages
            });
        }
        const data = await Order.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        return res.json({
            message: "Cập nhật dữ liệu thành công",
            data: data,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Lỗi Khi lấy dữ liệu",
            error: error.message,
        });
    }
};
export const Delete_order = async (req, res) => {
    try {
        const data = await Order.findByIdAndDelete({
            _id: req.params.id,
        });
        return res.json({
            message: "Xóa Dữ liệu thành công",
            dât: data,
        });
    } catch (error) {
        return res.status(404).json({
            message: "Lỗi Khi lấy dữ liệu",
            error: error.message,
        });
    }
};