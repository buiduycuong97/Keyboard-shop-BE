const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "OrderProduct",
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      district: { type: String, required: true },
      city: { type: String, required: true },
    },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    createAt: {
      type: String,
      required: true,
      default: Date(),
    },
    updateAt: {
      type: String,
      required: true,
      default: Date(),
    },
  },
  { collection: "orders" }
);

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
