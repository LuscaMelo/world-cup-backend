"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = __importDefault(require("../controllers/playerController"));
const router = (0, express_1.Router)();
router.get('/players', playerController_1.default.getPlayers);
router.get("/players/:id", playerController_1.default.getPlayerById);
exports.default = router;
