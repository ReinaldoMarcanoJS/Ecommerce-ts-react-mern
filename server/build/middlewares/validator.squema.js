"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSchema = void 0;
function getErrorMessage(error) {
    if (error instanceof Error) {
        return "Validator denied, formato invalid"; //error.message
    }
    return error;
}
const ValidateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        return next();
    }
    catch (e) {
        console.log(getErrorMessage(e));
        res.status(204).json(e);
        // message gets narrowed to strin
    }
};
exports.ValidateSchema = ValidateSchema;
