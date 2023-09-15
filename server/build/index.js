"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const Auth_routes_1 = __importDefault(require("./routes/Auth.routes"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3001;
(0, db_1.connectDB)();
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//Routes
app.use("/api", Auth_routes_1.default);
exports.default = app;
