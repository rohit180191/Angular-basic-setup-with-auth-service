/* tslint:disable */

declare var Object: any;
export interface Equipments_mappingInterface {
  "id"?: number;
  "equipment_id"?: number;
  "contractor_id"?: number;
}

export class Equipments_mapping implements Equipments_mappingInterface {
  "id": number;
  "equipment_id": number;
  "contractor_id": number;
  constructor(data?: Equipments_mappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Equipments_mapping`.
   */
  public static getModelName() {
    return "Equipments_mapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Equipments_mapping for dynamic purposes.
  **/
  public static factory(data: Equipments_mappingInterface): Equipments_mapping{
    return new Equipments_mapping(data);
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
      name: 'Equipments_mapping',
      plural: 'Equipments_mappings',
      path: 'Equipments_mappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "equipment_id": {
          name: 'equipment_id',
          type: 'number'
        },
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
