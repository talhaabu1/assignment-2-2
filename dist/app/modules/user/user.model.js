"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaModel = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
// name schema
const nameSchema = new mongoose_1.Schema({
    _id: false,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
// address schema
const addressSchema = new mongoose_1.Schema({
    _id: false,
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
});
// orders schema
const ordersSchema = new mongoose_1.Schema({
    _id: false,
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
// user schema
const userSchema = new mongoose_1.Schema({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    fullName: { type: nameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: addressSchema, required: true },
    orders: { type: [ordersSchema] },
}, { versionKey: false });
//? schema methods ⤵
userSchema.statics.passwordHashing = function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        let { password } = data;
        if (!password)
            return data;
        const hashedPassword = yield bcrypt_1.default.hash(password, Number(config_1.default.salt_rounds));
        const newData = Object.assign(Object.assign({}, data), { password: hashedPassword });
        return newData;
    });
};
userSchema.statics.isUserExist = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const exist = yield this.findOne({ userId });
        if (!exist)
            throw new Error('User not found!');
    });
};
//? schema methods ⤴
// user schema model
exports.userSchemaModel = (0, mongoose_1.model)('User', userSchema);
