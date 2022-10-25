import NftModel from "../../resources/nft/nft.model";

class NftService {
   private nft = NftModel;

   public async create( name: string, description: string, imgUrl: string) {
      try {
         const nft = await this.nft.create({ name, description, imgUrl });

         return nft;
      } catch (error) {
         throw new Error('Unable to create Nft');
      }
   }

 }

 export default NftService;