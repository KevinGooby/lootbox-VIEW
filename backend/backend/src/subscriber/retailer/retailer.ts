import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';
import { Retailer } from '../../entity/Retailer/Retailer.js';

//similar to a hook in sequelize
@EventSubscriber()
export class RetailerSubscriber implements EntitySubscriberInterface<Retailer> {
  listenTo() {
    return Retailer;
  }

  async afterLoad(retailer: Retailer): Promise<void> {}

  async afterUpdate(event: UpdateEvent<Retailer>): Promise<void> {}
}
