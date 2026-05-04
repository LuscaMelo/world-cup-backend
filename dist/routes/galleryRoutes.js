"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galleryController_1 = __importDefault(require("../controllers/galleryController"));
const router = (0, express_1.Router)();
router.get('/gallery', galleryController_1.default.getGalleryImages);
exports.default = router;
