/* tslint:disable */

declare var Object: any;
export interface Work_groupInterface {
  "work_group_id"?: number;
  "contractor_id"?: number;
  "project_id"?: number;
  "member_name"?: string;
  "member_type"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class Work_group implements Work_groupInterface {
  "work_group_id": number;
  "contractor_id": number;
  "project_id": number;
  "member_name": string;
  "member_type": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: Work_groupInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Work_group`.
   */
  public static getModelName() {
    return "Work_group";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Work_group for dynamic purposes.
  **/
  public static factory(data: Work_groupInterface): Work_group{
    return new Work_group(data);
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
      name: 'Work_group',
      plural: 'Work_groups',
      path: 'Work_groups',
      idName: 'work_group_id',
      properties: {
        "work_group_id": {
          name: 'work_group_id',
          type: 'number'
        },
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
        "project_id": {
          name: 'project_id',
          type: 'number'
        },
        "member_name": {
          name: 'member_name',
          type: 'string'
        },
        "member_type": {
          name: 'member_type',
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
