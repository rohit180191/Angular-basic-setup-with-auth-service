/* tslint:disable */

declare var Object: any;
export interface Contractor_profileInterface {
  "contractor_id"?: number;
  "app_id"?: number;
  "contractor_email_id"?: string;
  "name_of_contractor"?: string;
  "contractor_photo"?: string;
  "contractor_cover_photo"?: string;
  "company_name"?: string;
  "address"?: string;
  "city_id"?: number;
  "zip"?: number;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
  "municipality_id"?: number;
}

export class Contractor_profile implements Contractor_profileInterface {
  "contractor_id": number;
  "app_id": number;
  "contractor_email_id": string;
  "name_of_contractor": string;
  "contractor_photo": string;
  "contractor_cover_photo": string;
  "company_name": string;
  "address": string;
  "city_id": number;
  "zip": number;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  "municipality_id": number;
  constructor(data?: Contractor_profileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contractor_profile`.
   */
  public static getModelName() {
    return "Contractor_profile";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contractor_profile for dynamic purposes.
  **/
  public static factory(data: Contractor_profileInterface): Contractor_profile{
    return new Contractor_profile(data);
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
      name: 'Contractor_profile',
      plural: 'Contractor_profiles',
      path: 'Contractor_profiles',
      idName: 'contractor_id',
      properties: {
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
        "app_id": {
          name: 'app_id',
          type: 'number'
        },
        "contractor_email_id": {
          name: 'contractor_email_id',
          type: 'string'
        },
        "name_of_contractor": {
          name: 'name_of_contractor',
          type: 'string'
        },
        "contractor_photo": {
          name: 'contractor_photo',
          type: 'string'
        },
        "contractor_cover_photo": {
          name: 'contractor_cover_photo',
          type: 'string'
        },
        "company_name": {
          name: 'company_name',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "city_id": {
          name: 'city_id',
          type: 'number'
        },
        "zip": {
          name: 'zip',
          type: 'number'
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
        "municipality_id": {
          name: 'municipality_id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
