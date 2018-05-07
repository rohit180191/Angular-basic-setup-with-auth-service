/* tslint:disable */

declare var Object: any;
export interface Equipments_masterInterface {
  "equipment_id"?: number;
  "equipment_name"?: string;
  "created_date"?: Date;
  "updated_date"?: Date;
  "status"?: boolean;
}

export class Equipments_master implements Equipments_masterInterface {
  "equipment_id": number;
  "equipment_name": string;
  "created_date": Date;
  "updated_date": Date;
  "status": boolean;
  constructor(data?: Equipments_masterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Equipments_master`.
   */
  public static getModelName() {
    return "Equipments_master";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Equipments_master for dynamic purposes.
  **/
  public static factory(data: Equipments_masterInterface): Equipments_master{
    return new Equipments_master(data);
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
      name: 'Equipments_master',
      plural: 'Equipments_masters',
      path: 'Equipments_masters',
      idName: 'equipment_id',
      properties: {
        "equipment_id": {
          name: 'equipment_id',
          type: 'number'
        },
        "equipment_name": {
          name: 'equipment_name',
          type: 'string'
        },
        "created_date": {
          name: 'created_date',
          type: 'Date'
        },
        "updated_date": {
          name: 'updated_date',
          type: 'Date'
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
