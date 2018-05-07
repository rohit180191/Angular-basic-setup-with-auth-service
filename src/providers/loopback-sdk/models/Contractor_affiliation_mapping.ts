/* tslint:disable */

declare var Object: any;
export interface Contractor_affiliation_mappingInterface {
  "id"?: number;
  "certificate_id"?: number;
  "contractor_id"?: number;
  "others"?: string;
}

export class Contractor_affiliation_mapping implements Contractor_affiliation_mappingInterface {
  "id": number;
  "certificate_id": number;
  "contractor_id": number;
  "others": string;
  constructor(data?: Contractor_affiliation_mappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contractor_affiliation_mapping`.
   */
  public static getModelName() {
    return "Contractor_affiliation_mapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contractor_affiliation_mapping for dynamic purposes.
  **/
  public static factory(data: Contractor_affiliation_mappingInterface): Contractor_affiliation_mapping{
    return new Contractor_affiliation_mapping(data);
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
      name: 'Contractor_affiliation_mapping',
      plural: 'Contractor_affiliation_mappings',
      path: 'Contractor_affiliation_mappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "certificate_id": {
          name: 'certificate_id',
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
