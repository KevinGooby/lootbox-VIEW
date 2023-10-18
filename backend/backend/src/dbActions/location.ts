import { AppDataSource } from '../data-source';
import { Location } from '../entity/Location/Location';

export class LocationDbAction {
  static locationRepository = AppDataSource.getRepository(Location);

  public static async createLocation(locationPayload: Location) {
    const location = Object.assign(new Location(), locationPayload);

    return this.locationRepository.save(location);
  }
}
