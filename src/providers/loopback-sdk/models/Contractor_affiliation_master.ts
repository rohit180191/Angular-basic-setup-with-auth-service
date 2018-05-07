/* tslint:disable */

declare var Object: any;
export interface Contractor_affiliation_masterInterface {
  "certificate_id"?: number;
  "certificate_name"?: string;
  "certificate_image_source"?: string;
  "Description"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class Contractor_affiliation_master implements Contractor_affiliation_masterInterface {
  "certificate_id": number;
  "certificate_name": string;
  "certificate_image_source": string;
  "Description": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: Contractor_affiliation_masterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contractor_affiliation_master`.
   */
  public static getModelName() {
    return "Contractor_affiliation_master";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contractor_affiliation_master for dynamic purposes.
  **/
  public static factory(data: Contractor_affiliation_masterInterface): Contractor_affiliation_master{
    return new Contractor_affiliation_master(data);
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
      name: 'Contractor_affiliation_master',
      plural: 'Contractor_affiliation_masters',
      path: 'Contractor_affiliation_masters',
      idName: 'certificate_id',
      properties: {
        "certificate_id": {
          name: 'certificate_id',
          type: 'number'
        },
        "certificate_name": {
          name: 'certificate_name',
          type: 'string'
        },
        "certificate_image_source": {
          name: 'certificate_image_source',
          type: 'string'
        },
        "Description": {
          name: 'Description',
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
