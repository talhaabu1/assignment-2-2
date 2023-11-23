"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaModel = void 0;
const mongoose_1 = require("mongoose");
// name schema
const nameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
// address schema
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
});
// orders schema
const ordersSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
// user schema
const userSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: nameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: addressSchema, required: true },
    orders: { type: [ordersSchema], required: true },
});
// user schema model
exports.userSchemaModel = (0, mongoose_1.model)('User', userSchema);
