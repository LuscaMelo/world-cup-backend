"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stadiumController_1 = __importDefault(require("../controllers/stadiumController"));
const router = (0, express_1.Router)();
router.get('/stadiums', stadiumController_1.default.getStadiums);
exports.default = router;
