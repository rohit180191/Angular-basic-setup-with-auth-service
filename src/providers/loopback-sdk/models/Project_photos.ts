/* tslint:disable */

declare var Object: any;
export interface Project_photosInterface {
  "photo_id"?: number;
  "project_id"?: number;
  "project_photo_source"?: string;
  "created_date"?: number;
  "updated_date"?: number;
  "status"?: boolean;
}

export class Project_photos implements Project_photosInterface {
  "photo_id": number;
  "project_id": number;
  "project_photo_source": string;
  "created_date": number;
  "updated_date": number;
  "status": boolean;
  constructor(data?: Project_photosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Project_photos`.
   */
  public static getModelName() {
    return "Project_photos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Project_photos for dynamic purposes.
  **/
  public static factory(data: Project_photosInterface): Project_photos{
    return new Project_photos(data);
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
      name: 'Project_photos',
      plural: 'Project_photos',
      path: 'Project_photos',
      idName: 'photo_id',
      properties: {
        "photo_id": {
          name: 'photo_id',
          type: 'number'
        },
        "project_id": {
          name: 'project_id',
          type: 'number'
        },
        "project_photo_source": {
          name: 'project_photo_source',
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
