import joi from "joi";
import ProductSchame from "../Models/Product";

const CheckValidate = joi.object({
  Product_Name: joi.string().required().empty().messages({
    "string.required": "Không được để trống",
    "any.required": "Trường password là bắt buộc",
    "string.empty": "Name không được để trống",
  }),
  Product_Price: joi.number().required().empty().messages({
    "number.empty": "Number không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
  Product_KG: joi.number().required().empty().messages({
    "number.empty": "Number không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
  Product_Image: joi.string().required().empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
  Product_Description: joi.string().required().empty().messages({
    "string.empty": "Password không được để trống",
    "any.required": "Trường password là bắt buộc",
  }),
});

export const Create_Product = async (req, res) => {
  try {
    console.log("AAAAA1");
    const { error } = CheckValidate.validate(req.body);
    if (error) {
      return res.json({
        message: "Error",
        error: error.details[0].message,
      });
    }
    console.log("Thang");

    const data = await ProductSchame.create(req.body);
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

export const Get_All_Product = async (req, res) => {
  try {
    const data = await ProductSchame.find();
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

export const Get_one_Product = async (req, res) => {
  try {
    const data = await ProductSchame.findById(req.params.id);
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
export const Put_Product = async (req, res) => {
  try {
    const { error } = CheckValidate.validate(req.body);
    if (error) {
      return res.json({
        error: error.details.message,
      });
    }
    const data = await ProductSchame.findByIdAndUpdate(
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
export const Delete_Product = async (req, res) => {
  try {
    const data = await ProductSchame.findByIdAndDelete({
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
