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
exports.userControolers = void 0;
const user_service_1 = require("./user.service");
const user_validationWithJoi_1 = __importDefault(require("./user.validationWithJoi"));
// createuser function
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield user_validationWithJoi_1.default.validateAsync(req.body);
        const result = yield user_service_1.userServices.createUserIntoDB(value);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        console.log(err);
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User created not successfully!',
            errorMassage: err.message,
        });
        //? response error send ⤴
    }
});
// getAllusers function
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userServices.getAllUsersIntoDB();
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        console.log(err);
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: err.message || 'User get not successfully!',
        });
        //? response error send ⤴
    }
});
// getSingleUser function
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userServices.getSingleUsersIntoDB(userId);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        console.log(err);
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: err.message,
            },
        });
        //? response error send ⤴
    }
});
// updateUser function
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userServices.updateUserIntoDB(userId, req.body);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Users Updated successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        console.log(err);
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: err.message,
            },
        });
        //? response error send ⤴
    }
});
// deleteUser function
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userServices.userDeleteIntoDB(userId);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Users Deleted successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: err.message,
            },
        });
        //? response error send ⤴
    }
});
// addProductUser function
const addProductUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userServices.addProductUserIntoDB(userId, req.body);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: err.message,
            },
        });
        //? response error send ⤴
    }
});
// getProductUser function
const getProductUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userServices.getProductUserIntoDB(userId);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Order fetched successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: err.message,
            },
        });
        //? response error send ⤴
    }
});
// calculateTotalPrice function
const calculateTotalPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const result = yield user_service_1.userServices.calculateTotalPriceIntoDB(userId);
        //? response success send ⤵
        res.status(200).json({
            success: true,
            message: 'Total price calculated successfully!',
            data: result,
        });
        //? response success send ⤴
    }
    catch (err) {
        //? response error send ⤵
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: err.message,
            },
        });
        //? response error send ⤴
    }
});
exports.userControolers = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addProductUser,
    getProductUser,
    calculateTotalPrice,
};
