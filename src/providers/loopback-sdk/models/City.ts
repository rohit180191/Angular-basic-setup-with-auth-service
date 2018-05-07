/* tslint:disable */

declare var Object: any;
export interface CityInterface {
  "city_id"?: number;
  "city_name"?: string;
  "status"?: boolean;
}

export class City implements CityInterface {
  "city_id": number;
  "city_name": string;
  "status": boolean;
  constructor(data?: CityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `City`.
   */
  public static getModelName() {
    return "City";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of City for dynamic purposes.
  **/
  public static factory(data: CityInterface): City{
    return new City(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'City',
      plural: 'Cities',
      path: 'Cities',
      idName: 'city_id',
      properties: {
        "city_id": {
          name: 'city_id',
          type: 'number'
        },
        "city_name": {
          name: 'city_name',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'boolean'
        },
      },
      relations: {
      }
    }
  }
}
