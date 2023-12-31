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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const user_model_1 = require("./user.model");
const createUserIntoDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const dataToHash = yield user_model_1.userSchemaModel.passwordHashing(userData);
    const result = yield user_model_1.userSchemaModel.create(dataToHash);
    const _a = result.toObject(), { password, orders, _id } = _a, newData = __rest(_a, ["password", "orders", "_id"]);
    return newData;
});
const getAllUsersIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryFieldFilter = {
        _id: 0,
        userId: 0,
        password: 0,
        'fullName._id': 0,
        'address._id': 0,
        orders: 0,
    };
    const result = yield user_model_1.userSchemaModel.find({}, queryFieldFilter);
    return result;
});
const getSingleUsersIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.userSchemaModel.isUserExist(userId);
    const queryFieldFilter = {
        _id: 0,
        password: 0,
        'fullName._id': 0,
        'address._id': 0,
        orders: 0,
    };
    const result = yield user_model_1.userSchemaModel.findOne({ userId }, queryFieldFilter);
    return result;
});
const updateUserIntoDB = (userId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.userSchemaModel.isUserExist(userId);
    const queryFieldFilter = {
        _id: 0,
        password: 0,
        'fullName._id': 0,
        'address._id': 0,
        orders: 0,
    };
    const dataToHash = yield user_model_1.userSchemaModel.passwordHashing(updateData);
    const result = yield user_model_1.userSchemaModel.findOneAndUpdate({ userId }, dataToHash, {
        returnDocument: 'after',
        projection: queryFieldFilter,
    });
    return result;
});
const userDeleteIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.userSchemaModel.isUserExist(userId);
    const result = yield user_model_1.userSchemaModel.deleteOne({ userId });
    return result;
});
const addProductUserIntoDB = (userId, product) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.userSchemaModel.isUserExist(userId);
    const result = yield user_model_1.userSchemaModel.updateOne({ userId }, { $push: { orders: product } });
    return result;
});
const getProductUserIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.userSchemaModel.isUserExist(userId);
    const queryFieldFilter = { _id: 0, orders: 1 };
    const result = yield user_model_1.userSchemaModel.findOne({ userId }, queryFieldFilter);
    return result;
});
const calculateTotalPriceIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.userSchemaModel.isUserExist(userId);
    const pipeline = [
        {
            $match: {
                userId: Number(userId),
            },
        },
        {
            $unwind: '$orders',
        },
        {
            $group: {
                _id: null,
                totalPrice: {
                    $sum: { $multiply: ['$orders.price', '$orders.quantity'] },
                },
            },
        },
        { $project: { totalPrice: 1, _id: 0 } },
    ];
    const result = yield user_model_1.userSchemaModel.aggregate(pipeline);
    return result;
});
exports.userServices = {
    createUserIntoDB,
    getAllUsersIntoDB,
    getSingleUsersIntoDB,
    updateUserIntoDB,
    userDeleteIntoDB,
    addProductUserIntoDB,
    getProductUserIntoDB,
    calculateTotalPriceIntoDB,
};
