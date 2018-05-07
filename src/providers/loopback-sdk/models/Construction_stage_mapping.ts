/* tslint:disable */

declare var Object: any;
export interface Construction_stage_mappingInterface {
  "id"?: number;
  "construction_stage_id"?: number;
  "project_id"?: number;
  "others"?: string;
}

export class Construction_stage_mapping implements Construction_stage_mappingInterface {
  "id": number;
  "construction_stage_id": number;
  "project_id": number;
  "others": string;
  constructor(data?: Construction_stage_mappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Construction_stage_mapping`.
   */
  public static getModelName() {
    return "Construction_stage_mapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Construction_stage_mapping for dynamic purposes.
  **/
  public static factory(data: Construction_stage_mappingInterface): Construction_stage_mapping{
    return new Construction_stage_mapping(data);
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
      name: 'Construction_stage_mapping',
      plural: 'Construction_stage_mappings',
      path: 'Construction_stage_mappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "construction_stage_id": {
          name: 'construction_stage_id',
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
