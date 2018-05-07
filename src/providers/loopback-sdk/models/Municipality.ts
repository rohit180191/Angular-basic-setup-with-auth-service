/* tslint:disable */

declare var Object: any;
export interface MunicipalityInterface {
  "id"?: number;
  "city_id"?: number;
  "city_name"?: string;
  "name"?: string;
  "status"?: number;
  "created_at"?: number;
  "updated_at"?: number;
}

export class Municipality implements MunicipalityInterface {
  "id": number;
  "city_id": number;
  "city_name": string;
  "name": string;
  "status": number;
  "created_at": number;
  "updated_at": number;
  constructor(data?: MunicipalityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Municipality`.
   */
  public static getModelName() {
    return "Municipality";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Municipality for dynamic purposes.
  **/
  public static factory(data: MunicipalityInterface): Municipality{
    return new Municipality(data);
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
      name: 'Municipality',
      plural: 'Municipalities',
      path: 'Municipalities',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "city_id": {
          name: 'city_id',
          type: 'number'
        },
        "city_name": {
          name: 'city_name',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "created_at": {
          name: 'created_at',
          type: 'number'
        },
        "updated_at": {
          name: 'updated_at',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
