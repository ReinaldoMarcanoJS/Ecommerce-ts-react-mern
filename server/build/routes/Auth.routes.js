"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const validator_squema_1 = require("../middlewares/validator.squema");
const auth_schema_1 = require("../squemas/auth.schema");
const router = express_1.default.Router();
router.post('/register', (0, validator_squema_1.ValidateSchema)(auth_schema_1.registerSchema), user_controller_1.RegisterUsers);
router.get('/user', user_controller_1.getUser);
router.post('/logout', user_controller_1.Logout);
router.post('/login', (0, validator_squema_1.ValidateSchema)(auth_schema_1.loginSchema), user_controller_1.LoginUsers);
exports.default = router;
