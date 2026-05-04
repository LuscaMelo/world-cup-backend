"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = __importDefault(require("../controllers/teamController"));
const router = (0, express_1.Router)();
router.get('/teams', teamController_1.default.getTeams);
router.get('/teams/featured', teamController_1.default.getFeaturedTeams);
exports.default = router;
