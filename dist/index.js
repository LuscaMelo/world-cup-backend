"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const groupRoutes_1 = __importDefault(require("./routes/groupRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
const playerRoutes_1 = __importDefault(require("./routes/playerRoutes"));
const countryRoutes_1 = __importDefault(require("./routes/countryRoutes"));
const stadiumRoutes_1 = __importDefault(require("./routes/stadiumRoutes"));
const galleryRoutes_1 = __importDefault(require("./routes/galleryRoutes"));
const searchRoutes_1 = __importDefault(require("./routes/searchRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(groupRoutes_1.default);
app.use(teamRoutes_1.default);
app.use(playerRoutes_1.default);
app.use(countryRoutes_1.default);
app.use(stadiumRoutes_1.default);
app.use(galleryRoutes_1.default);
app.use(searchRoutes_1.default);
app.get('/', (req, res) => {
    res.send('World Cup API');
});
exports.default = app;
