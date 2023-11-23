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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControolers = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reslut = yield user_service_1.userServices.createUserIntoDB(req.body);
        res.status(200).json({
            success: true,
            message: 'User created successfully!',
            data: reslut,
        });
    }
    catch (err) {
        console.log(err);
        res.status(200).json({
            success: false,
            message: 'User created not successfully!',
            errorMassage: err.message,
        });
    }
});
exports.userControolers = { createUser };
