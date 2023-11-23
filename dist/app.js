"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./app/modules/user/user.route"));
exports.app = (0, express_1.default)();
//? use parser call any ⤵
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
//? use parser call any ⤴
//? use express router ⤵
exports.app.use('/', user_route_1.default);
//? use express router ⤴
//?  not found error route function ⤵
exports.app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});
//?  not routes error handeling function ⤴
