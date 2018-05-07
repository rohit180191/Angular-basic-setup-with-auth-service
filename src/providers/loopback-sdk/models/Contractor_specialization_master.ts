/* tslint:disable */

declare var Object: any;
export interface Contractor_specialization_masterInterface {
  "specialization_id"?: number;
  "specialization_name"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class Contractor_specialization_master implements Contractor_specialization_masterInterface {
  "specialization_id": number;
  "specialization_name": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: Contractor_specialization_masterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contractor_specialization_master`.
   */
  public static getModelName() {
    return "Contractor_specialization_master";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contractor_specialization_master for dynamic purposes.
  **/
  public static factory(data: Contractor_specialization_masterInterface): Contractor_specialization_master{
    return new Contractor_specialization_master(data);
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
      name: 'Contractor_specialization_master',
      plural: 'Contractor_specialization_masters',
      path: 'Contractor_specialization_masters',
      idName: 'specialization_id',
      properties: {
        "specialization_id": {
          name: 'specialization_id',
          type: 'number'
        },
        "specialization_name": {
          name: 'specialization_name',
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
