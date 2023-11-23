"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// joiUserNameSchema object
const joiUserNameSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
});
// joiUserAddressSchema object
const joiUserAddressSchema = joi_1.default.object({
    street: joi_1.default.string().required(),
    city: joi_1.default.string().required(),
    country: joi_1.default.string().required(),
});
// joiUserOrdersSchema object
const joiUserOrdersSchema = joi_1.default.object({
    productName: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    quantity: joi_1.default.number().required(),
});
// joiUserSchema object
const joiUserSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    fullName: joiUserNameSchema.required(),
    age: joi_1.default.number().required(),
    email: joi_1.default.string().required(),
    isActive: joi_1.default.boolean().required(),
    hobbies: joi_1.default.array().items(joi_1.default.string()).required(),
    address: joiUserAddressSchema.required(),
    orders: joi_1.default.array().items(joiUserOrdersSchema).required(),
});
exports.default = joiUserSchema;
