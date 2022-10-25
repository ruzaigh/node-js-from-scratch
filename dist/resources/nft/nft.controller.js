"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nft_service_1 = __importDefault(require("../../resources/nft/nft.service"));
const validation_middleware_1 = __importDefault(require("../../middleware/validation.middleware"));
const http_exception_1 = __importDefault(require("../../utils/exceptions/http.exception"));
const nft_validation_1 = __importDefault(require("../../resources/nft/nft.validation"));
class NftController {
    constructor() {
        this.path = '/nft';
        this.router = (0, express_1.Router)();
        this.nftService = new nft_service_1.default();
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, imgUrl } = req.body;
                const nft = yield this.nftService.create(name, description, imgUrl);
                res.status(201).json({ nft });
            }
            catch (error) {
                next(new http_exception_1.default(400, 'Cannot create nft'));
            }
        });
        this.initialiseRoutes();
    }
    initialiseRoutes() {
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(nft_validation_1.default.createNftValidate), this.create);
    }
}
exports.default = NftController;
