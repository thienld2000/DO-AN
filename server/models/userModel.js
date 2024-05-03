const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: props => `${props.value} không phải là một số điện thoại hợp lệ!`
      }
    },
    isAdmin:{
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema);