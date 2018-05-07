/* tslint:disable */

declare var Object: any;
export interface Accredited_suppliesInterface {
  "supplier_id"?: number;
  "contractor_id"?: number;
  "supplier_name"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class Accredited_supplies implements Accredited_suppliesInterface {
  "supplier_id": number;
  "contractor_id": number;
  "supplier_name": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: Accredited_suppliesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Accredited_supplies`.
   */
  public static getModelName() {
    return "Accredited_supplies";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Accredited_supplies for dynamic purposes.
  **/
  public static factory(data: Accredited_suppliesInterface): Accredited_supplies{
    return new Accredited_supplies(data);
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
      name: 'Accredited_supplies',
      plural: 'Accredited_supplies',
      path: 'Accredited_supplies',
      idName: 'supplier_id',
      properties: {
        "supplier_id": {
          name: 'supplier_id',
          type: 'number'
        },
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
        "supplier_name": {
          name: 'supplier_name',
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
