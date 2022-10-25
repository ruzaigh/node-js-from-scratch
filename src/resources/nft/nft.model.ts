import {model, Schema} from "mongoose";
import Nft from "@/resources/nft/nft.interface";

const NftSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export default model<Nft>('Nft', NftSchema);