/* tslint:disable */

declare var Object: any;
export interface App_detailsInterface {
  "app_id"?: number;
  "app_name"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class App_details implements App_detailsInterface {
  "app_id": number;
  "app_name": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: App_detailsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `App_details`.
   */
  public static getModelName() {
    return "App_details";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of App_details for dynamic purposes.
  **/
  public static factory(data: App_detailsInterface): App_details{
    return new App_details(data);
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
      name: 'App_details',
      plural: 'App_details',
      path: 'App_details',
      idName: 'app_id',
      properties: {
        "app_id": {
          name: 'app_id',
          type: 'number'
        },
        "app_name": {
          name: 'app_name',
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
