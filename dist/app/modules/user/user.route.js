"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controoler_1 = require("./user.controoler");
const router = (0, express_1.Router)();
router.post('/api/users', user_controoler_1.userControolers.createUser);
exports.default = router;
