import { AppDataSource } from '../data-source';
import { Retailer } from '../entity/Retailer/Retailer';

export class RetailerDbAction {
  static retailerRepository = AppDataSource.getRepository(Retailer);

  public static async createRetailer(retailerPayload: Retailer) {
    const retailer = Object.assign(new Retailer(), {
      businessName: retailerPayload.businessName,
      businessPhoneNumber: retailerPayload.businessPhoneNumber,
      industry: retailerPayload.industry,
      category: retailerPayload.category,
    });

    return this.retailerRepository.save(retailer);
  }
}
