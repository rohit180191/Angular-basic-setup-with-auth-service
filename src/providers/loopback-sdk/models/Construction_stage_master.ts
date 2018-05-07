/* tslint:disable */

declare var Object: any;
export interface Construction_stage_masterInterface {
  "construction_stage_id"?: number;
  "construction_stage_name"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
  "project_status"?: string;
}

export class Construction_stage_master implements Construction_stage_masterInterface {
  "construction_stage_id": number;
  "construction_stage_name": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  "project_status": string;
  constructor(data?: Construction_stage_masterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Construction_stage_master`.
   */
  public static getModelName() {
    return "Construction_stage_master";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Construction_stage_master for dynamic purposes.
  **/
  public static factory(data: Construction_stage_masterInterface): Construction_stage_master{
    return new Construction_stage_master(data);
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
      name: 'Construction_stage_master',
      plural: 'Construction_stage_masters',
      path: 'Construction_stage_masters',
      idName: 'construction_stage_id',
      properties: {
        "construction_stage_id": {
          name: 'construction_stage_id',
          type: 'number'
        },
        "construction_stage_name": {
          name: 'construction_stage_name',
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
        "project_status": {
          name: 'project_status',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
