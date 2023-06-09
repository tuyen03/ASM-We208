import User from "../Models/User";
import bcrypt from "bcryptjs";
import {
  passwordSchema,
  signinSchema,
  signupSchema,
  userSchema,
} from "../Schemas/User";

export const signup = async (req, res) => {
  try {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessages = {};
      error.details.forEach((err) => {
        errorMessages[err.context.key] = err.message;
      });

      return res.status(400).json({
        errors: errorMessages,
      });
    }

    const checkUser = await User.findOne({ User_email: req.body.User_email });
    if (checkUser) {
      return res.status(400).json({
        errors: {
          User_email: "Email đã tồn tại",
        },
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.User_password, 5);

    const user = await User.create({
      User_name: req.body.User_name,
      User_email: req.body.User_email,
      User_password: hashedPassword,
    });
    return res.status(201).json({
      message: "Tạo tài khoản thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const signin = async (req, res) => {
  try {
    const { error } = signinSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorMessages = {};
      error.details.forEach((err) => {
        errorMessages[err.context.key] = err.message;
      });

      return res.status(400).json({
        errors: errorMessages,
      });
    }

    const checkUser = await User.findOne({ User_email: req.body.User_email });
    if (!checkUser) {
      return res.status(400).json({
        errors: {
          User_email: "Email không tồn tại",
        },
      });
    }
    const checkPassword = await bcrypt.compare(
      req.body.User_password,
      checkUser.User_password
    );
    if (!checkPassword) {
      return res.status(400).json({
        errors: {
          User_password: "Sai mật khẩu",
        },
      });
    }

    return res.status(201).json({
      message: "Đăng nhập thành công",
      checkUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const {
      _limit = 20,
      _page = 1,
      _ordder = "asc",
      _sort = "createAt",
    } = req.query;
    const options = {
      page: _page,
      limit: _limit,
      sort: {
        [_sort]: _ordder == "desc" ? -1 : 1,
      },
    };
    const users = await User.paginate({}, options);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((err) => err.message),
      });
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).json({
      message: "Cập nhật thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const removeUser = async (req, res) => {
  try {
    const product = await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({
      message: "Xóa thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { error } = passwordSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((err) => err.message),
      });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "Người dùng không tồn tại",
      });
    }

    const checkPassword = await bcrypt.compare(
      req.body.Password_old,
      user.User_password
    );
    if (!checkPassword) {
      return res.status(400).json({
        message: "Mật khẩu không đúng, vui lòng nhập lại",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.Password_new, 5);
    user.User_password = hashedPassword;
    await user.save();

    return res.status(201).json({
      message: "Cập nhật mật khẩu thành công",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
