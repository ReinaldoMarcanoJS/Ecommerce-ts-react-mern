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
exports.Logout = exports.LoginUsers = exports.getUser = exports.RegisterUsers = void 0;
const register_service_1 = require("../services/register.service");
const getUser_service_1 = require("../services/getUser.service");
const jwt_service_1 = require("../services/jwt.service");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("../models/user.model"));
/**
 * is eas
 * Register
 * @param req
 * @param res
 */
const RegisterUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("access-Control-Allow-Origin", "*");
    const { email, name, lastname, password } = req.body;
    const response = yield user_model_1.default.findOne({ email });
    if (response)
        return res.status(544).send("This email already exist");
    const user = yield (0, register_service_1.RegisterUser)({ name, lastname, email, password });
    console.log(user);
    return res.status(200).send("Registred");
});
exports.RegisterUsers = RegisterUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("access-Control-Allow-Origin", "*");
    const { email } = req.body;
    console.log(req.body);
    const user = yield (0, getUser_service_1.getDetailUser)(email);
    res.send({ user });
});
exports.getUser = getUser;
const LoginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("access-Control-Allow-Origin", "*");
    const { email, password } = req.body;
    const response = yield user_model_1.default.findOne({ email });
    if (!response)
        return res.status(404).send("This email not is register");
    const ismatch = yield bcryptjs_1.default.compare(password, response.password);
    if (!ismatch)
        return res.status(400).send("Incorrect password");
    try {
        const token = yield (0, jwt_service_1.createAccessToken)({ payload: response._id });
        res.cookie("token", token, { sameSite: "none", secure: true });
        console.log({
            id: response._id,
            name: response.name,
            lastname: response.lastname,
            email: response.email,
            createAt: response.createdAt,
            updateAt: response.updatedAt,
        });
        return res.status(200).json({
            id: response._id,
            name: response.name,
            lastname: response.lastname,
            email: response.email,
            createAt: response.createdAt,
            updateAt: response.updatedAt,
        });
    }
    catch (error) {
        return res.status(401).send("Error Login");
    }
});
exports.LoginUsers = LoginUsers;
const Logout = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("access-Control-Allow-Origin", "*");
    res.cookie("token", "", {
        sameSite: 'none',
        secure: true,
        expires: new Date(0),
    });
    return res.sendStatus(200);
});
exports.Logout = Logout;
