/* tslint:disable */

declare var Object: any;
export interface ProjectsInterface {
  "project_id"?: number;
  "contractor_id"?: number;
  "project_name"?: string;
  "project_type"?: string;
  "project_cover_photo"?: string;
  "project_location"?: string;
  "city_id"?: number;
  "zip"?: number;
  "contact_reference_mobile"?: string;
  "contact_reference_landline"?: string;
  "construction_area"?: number;
  "measurement_unit"?: string;
  "project_cost"?: number;
  "project_start_date"?: number;
  "project_completion_date"?: number;
  "project_duration_months"?: number;
  "project_duration_years"?: number;
  "project_bookmark"?: boolean;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
  "project_status"?: string;
  "municipality_id"?: number;
}

export class Projects implements ProjectsInterface {
  "project_id": number;
  "contractor_id": number;
  "project_name": string;
  "project_type": string;
  "project_cover_photo": string;
  "project_location": string;
  "city_id": number;
  "zip": number;
  "contact_reference_mobile": string;
  "contact_reference_landline": string;
  "construction_area": number;
  "measurement_unit": string;
  "project_cost": number;
  "project_start_date": number;
  "project_completion_date": number;
  "project_duration_months": number;
  "project_duration_years": number;
  "project_bookmark": boolean;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  "project_status": string;
  "municipality_id": number;
  constructor(data?: ProjectsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Projects`.
   */
  public static getModelName() {
    return "Projects";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Projects for dynamic purposes.
  **/
  public static factory(data: ProjectsInterface): Projects{
    return new Projects(data);
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
      name: 'Projects',
      plural: 'Projects',
      path: 'Projects',
      idName: 'project_id',
      properties: {
        "project_id": {
          name: 'project_id',
          type: 'number'
        },
        "contractor_id": {
          name: 'contractor_id',
          type: 'number'
        },
        "project_name": {
          name: 'project_name',
          type: 'string'
        },
        "project_type": {
          name: 'project_type',
          type: 'string'
        },
        "project_cover_photo": {
          name: 'project_cover_photo',
          type: 'string'
        },
        "project_location": {
          name: 'project_location',
          type: 'string'
        },
        "city_id": {
          name: 'city_id',
          type: 'number'
        },
        "zip": {
          name: 'zip',
          type: 'number'
        },
        "contact_reference_mobile": {
          name: 'contact_reference_mobile',
          type: 'string'
        },
        "contact_reference_landline": {
          name: 'contact_reference_landline',
          type: 'string'
        },
        "construction_area": {
          name: 'construction_area',
          type: 'number'
        },
        "measurement_unit": {
          name: 'measurement_unit',
          type: 'string'
        },
        "project_cost": {
          name: 'project_cost',
          type: 'number'
        },
        "project_start_date": {
          name: 'project_start_date',
          type: 'number'
        },
        "project_completion_date": {
          name: 'project_completion_date',
          type: 'number'
        },
        "project_duration_months": {
          name: 'project_duration_months',
          type: 'number'
        },
        "project_duration_years": {
          name: 'project_duration_years',
          type: 'number'
        },
        "project_bookmark": {
          name: 'project_bookmark',
          type: 'boolean'
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
        "municipality_id": {
          name: 'municipality_id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
