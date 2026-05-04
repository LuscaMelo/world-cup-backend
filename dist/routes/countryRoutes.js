"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countryController_1 = __importDefault(require("../controllers/countryController"));
const router = (0, express_1.Router)();
router.get('/countries', countryController_1.default.getCountries);
exports.default = router;
