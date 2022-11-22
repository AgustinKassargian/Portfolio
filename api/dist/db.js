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
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
//const { MongoClient, ServerApiVersion } = require('mongodb');
const { USER_DB, PASSWORD_DB, CLUSTER } = process.env;
//const LINK = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.xrmvdvc.mongodb.net/?retryWrites=true&w=majority`;
const NEWLINK = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.cajlhn0.mongodb.net/?retryWrites=true&w=majority`;
//mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER}.wknn4vi.mongodb.net/?retryWrites=true&w=majority
function databaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connectionToDatabase = yield mongoose_1.default.connect(NEWLINK);
            console.log('Server is connected to Nova Enterprise Database');
        }
        catch (error) {
            console.log(error);
        }
    });
}
databaseConnection();
exports.default = databaseConnection;
