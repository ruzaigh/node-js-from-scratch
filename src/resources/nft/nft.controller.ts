import Controller from "@/utils/interfaces/controller.interface";
import {Router} from "express";

class NftController implements Controller{
    public path = '/nft';
    public router = Router();
    private nftService = new N();
}

export default NftController;