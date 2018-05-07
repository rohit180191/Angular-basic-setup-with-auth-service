/* tslint:disable */

declare var Object: any;
export interface Type_of_housing_mappingInterface {
  "id"?: number;
  "type_of_housing_id"?: number;
  "project_id"?: number;
  "others"?: string;
}

export class Type_of_housing_mapping implements Type_of_housing_mappingInterface {
  "id": number;
  "type_of_housing_id": number;
  "project_id": number;
  "others": string;
  constructor(data?: Type_of_housing_mappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Type_of_housing_mapping`.
   */
  public static getModelName() {
    return "Type_of_housing_mapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Type_of_housing_mapping for dynamic purposes.
  **/
  public static factory(data: Type_of_housing_mappingInterface): Type_of_housing_mapping{
    return new Type_of_housing_mapping(data);
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
      name: 'Type_of_housing_mapping',
      plural: 'Type_of_housing_mappings',
      path: 'Type_of_housing_mappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "type_of_housing_id": {
          name: 'type_of_housing_id',
          type: 'number'
        },
        "project_id": {
          name: 'project_id',
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
