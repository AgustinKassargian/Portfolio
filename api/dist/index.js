"use strict";
// █─█ █▀█ █▀█ █▀█ █─█
// █▀█ █▀█ █▀▀ █▀▀ ─█─
// • • • • • • • • • •
// █▀▀ █▀█ █ █▀▄ █▀█ █─█
// █▀▀ ██▀ █ █─█ █▀█ █─█
// █── █─█ █ █▄▀ █─█ ─█
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
require('./db');
app_1.default.listen(app_1.default.get("port"), () => {
    console.log(`listen on port ${app_1.default.get("port")}`);
});
