const { Schema, model } = require("mongoose");

const servSchema = new Schema(
  {
    serv_title: {
      type: String
    },
    serv_desc: {
      type: String
    },
    serv_image: {
      type: String
    }
  }
);

const Service = model("Service", servSchema);
module.exports = Service;