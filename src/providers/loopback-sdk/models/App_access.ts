/* tslint:disable */

declare var Object: any;
export interface App_accessInterface {
  "id"?: number;
  "app_id"?: number;
  "contractor_id"?: number;
  "access_code"?: number;
  "imei_number"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class App_access implements App_accessInterface {
  "id": number;
  "app_id": number;
  "contractor_id": number;
  "access_code": number;
  "imei_number": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: App_accessInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `App_access`.
   */
  public static getModelName() {
    return "App_access";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of App_access for dynamic purposes.
  **/
  public static factory(data: App_accessInterface): App_access{
    return new App_access(data);
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
      name: 'App_access',
      plural: 'App_accesses',
      path: 'App_accesses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "app_id": {
          name: 'app_id',
          type: 'number'
        },
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
        "access_code": {
          name: 'access_code',
          type: 'number'
        },
        "imei_number": {
          name: 'imei_number',
          type: 'string'
        },
        "created_date": {
          name: 'created_date',
          type: 'number'
        },
        "updated_date": {
          name: 'updated_date',
          type: 'number'
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
