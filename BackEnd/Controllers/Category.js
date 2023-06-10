import joi from "joi";
import Category_Schame from "../Models/Category";

const CheckValidate = joi.object({
  _id: joi.string(),
  Name_Category: joi.string().required().empty().messages({
    "string.empty": "Xin vui long nhap lai",
    "string.required": "Trường này bắt buộc nhập",
  }),
});

export const Create_Category = async (req, res) => {
  try {
    const { error } = CheckValidate.validate(req.body);
    if (error) {
      return res.json({
        error: error.details[0].message,
      });
    }
    const { Name_Category } = req.body;
    const CategoryExists = await Category_Schame.findOne({ Name_Category });
    if (CategoryExists) {
      return res.json({
        message: "Danh mục đã tồn tại",
      });
    } else {
      const data = await Category_Schame.create(req.body);
      return res.json({
        message: "Thêm Danh mục thành công",
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export const Get_All_Category = async (req, res) => {
  try {
    const data = await Category_Schame.find();
    return res.json({
      message: "Lấy dữ liệu thành công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export const Get_One_Category = async (req, res) => {
  try {
    const data = await Category_Schame.findById(req.params.id).populate(
      "Product"
    );
    if (data) {
      return res.json({
        message: "Lấy dữ liệu thành công",
        data: data,
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
export const Put_Category = async (req, res) => {
  try {
    const { error } = CheckValidate.validate(req.body);
    if (error) {
      return res.json({
        error: error.details.message,
      });
    }
    const data = await Category_Schame.findByIdAndUpdate(
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

export const Delete_Category = async (req, res) => {
  try {
    const data = await Category_Schame.findByIdAndDelete({
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
