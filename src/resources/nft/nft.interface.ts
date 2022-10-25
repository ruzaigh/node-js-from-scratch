import { Document } from 'mongoose';

export default interface Nft extends Document {
    name: string;
    description: string;
}