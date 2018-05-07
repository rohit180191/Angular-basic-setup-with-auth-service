/* tslint:disable */

declare var Object: any;
export interface Type_of_housing_masterInterface {
  "id"?: number;
  "type_of_housing"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class Type_of_housing_master implements Type_of_housing_masterInterface {
  "id": number;
  "type_of_housing": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: Type_of_housing_masterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Type_of_housing_master`.
   */
  public static getModelName() {
    return "Type_of_housing_master";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Type_of_housing_master for dynamic purposes.
  **/
  public static factory(data: Type_of_housing_masterInterface): Type_of_housing_master{
    return new Type_of_housing_master(data);
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
      name: 'Type_of_housing_master',
      plural: 'Type_of_housing_masters',
      path: 'Type_of_housing_masters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "type_of_housing": {
          name: 'type_of_housing',
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
