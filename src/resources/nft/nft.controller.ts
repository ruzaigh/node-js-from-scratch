import Controller from "../../utils/interfaces/controller.interface";
import { Router, Request, Response, NextFunction } from 'express';
import NftService from "../../resources/nft/nft.service";
import validationMiddleware from "../../middleware/validation.middleware";
import HttpException from "../../utils/exceptions/http.exception";
import createNftValidate from "../../resources/nft/nft.validation";

class NftController implements Controller{
    public path = '/nft';
    public router = Router();
    private nftService = new NftService();

    constructor() { this.initialiseRoutes() }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware( createNftValidate.createNftValidate ),
            this.create
        );
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { name, description, imgUrl } = req.body;

            const nft = await this.nftService.create(name, description, imgUrl);

            res.status(201).json({ nft });
        } catch (error) {
            next(new HttpException(400, 'Cannot create nft'));
        }
    };


}

export default NftController;