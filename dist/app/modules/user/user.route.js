"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controoler_1 = require("./user.controoler");
const router = (0, express_1.Router)();
//? express middleware ⤵
//? express middleware ⤴
router.get('/api/users', user_controoler_1.userControolers.getAllUsers);
router.get('/api/users/:userId', user_controoler_1.userControolers.getSingleUser);
router.post('/api/users', user_controoler_1.userControolers.createUser);
router.put('/api/users/:userId', user_controoler_1.userControolers.updateUser);
exports.default = router;
