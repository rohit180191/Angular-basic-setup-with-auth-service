/* tslint:disable */

declare var Object: any;
export interface Contractor_specialization_mappingInterface {
  "id"?: number;
  "specialization_id"?: number;
  "contractor_id"?: number;
  "others"?: string;
}

export class Contractor_specialization_mapping implements Contractor_specialization_mappingInterface {
  "id": number;
  "specialization_id": number;
  "contractor_id": number;
  "others": string;
  constructor(data?: Contractor_specialization_mappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contractor_specialization_mapping`.
   */
  public static getModelName() {
    return "Contractor_specialization_mapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contractor_specialization_mapping for dynamic purposes.
  **/
  public static factory(data: Contractor_specialization_mappingInterface): Contractor_specialization_mapping{
    return new Contractor_specialization_mapping(data);
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
      name: 'Contractor_specialization_mapping',
      plural: 'Contractor_specialization_mappings',
      path: 'Contractor_specialization_mappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "specialization_id": {
          name: 'specialization_id',
          type: 'number'
        },
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
        "others": {
          name: 'others',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
