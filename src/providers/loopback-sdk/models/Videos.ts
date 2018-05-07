/* tslint:disable */

declare var Object: any;
export interface VideosInterface {
  "id"?: number;
  "video_url"?: string;
  "status"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "priority"?: number;
  "logo_image"?: string;
  "title"?: string;
}

export class Videos implements VideosInterface {
  "id": number;
  "video_url": string;
  "status": number;
  "created_at": Date;
  "updated_at": Date;
  "priority": number;
  "logo_image": string;
  "title": string;
  constructor(data?: VideosInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Videos`.
   */
  public static getModelName() {
    return "Videos";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Videos for dynamic purposes.
  **/
  public static factory(data: VideosInterface): Videos{
    return new Videos(data);
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
      name: 'Videos',
      plural: 'Videos',
      path: 'Videos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "video_url": {
          name: 'video_url',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'number'
        },
        "created_at": {
          name: 'created_at',
          type: 'Date'
        },
        "updated_at": {
          name: 'updated_at',
          type: 'Date'
        },
        "priority": {
          name: 'priority',
          type: 'number'
        },
        "logo_image": {
          name: 'logo_image',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
