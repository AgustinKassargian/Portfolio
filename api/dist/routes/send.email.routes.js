"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const send_Email_1 = require("../controllers/send.Email");
const router = (0, express_1.Router)();
router.post('/', send_Email_1.postEmail);
exports.default = router;
