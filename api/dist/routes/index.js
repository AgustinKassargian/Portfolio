"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const send_email_routes_1 = __importDefault(require("./send.email.routes"));
const router = (0, express_1.Router)();
router.use('/email', send_email_routes_1.default);
module.exports = router;
