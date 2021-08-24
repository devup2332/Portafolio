"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var environments_1 = require("./environments");
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var api_routes_1 = __importDefault(require("./routes/api.routes"));
var server = express_1.default();
//Configurations
server.use(cors_1.default());
server.use(morgan_1.default("dev"));
server.use(express_1.default.json());
//Routes
server.use("/api", api_routes_1.default);
server.listen(environments_1.environments.PORT, function () {
    console.log("Serve on port " + environments_1.environments.PORT);
});
exports.default = server;
