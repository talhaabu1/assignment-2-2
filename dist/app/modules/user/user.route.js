"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controoler_1 = require("./user.controoler");
const router = (0, express_1.Router)();
// all routes ⤵
router.get('/users', user_controoler_1.userControolers.getAllUsers);
router.get('/users/:userId', user_controoler_1.userControolers.getSingleUser);
router.post('/users', user_controoler_1.userControolers.createUser);
router.put('/users/:userId', user_controoler_1.userControolers.updateUser);
router.delete('/users/:userId', user_controoler_1.userControolers.deleteUser);
router.get('/users/:userId/orders', user_controoler_1.userControolers.getProductUser);
router.put('/users/:userId/orders', user_controoler_1.userControolers.addProductUser);
router.get('/users/:userId/orders/total-price', user_controoler_1.userControolers.calculateTotalPrice);
// all routes ⤴
exports.default = router;
