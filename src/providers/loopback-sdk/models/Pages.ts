/* tslint:disable */

declare var Object: any;
export interface PagesInterface {
  "id"?: number;
  "page_heading"?: string;
  "chapter_id"?: number;
  "content"?: string;
  "status"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "priority"?: number;
}

export class Pages implements PagesInterface {
  "id": number;
  "page_heading": string;
  "chapter_id": number;
  "content": string;
  "status": number;
  "created_at": Date;
  "updated_at": Date;
  "priority": number;
  constructor(data?: PagesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pages`.
   */
  public static getModelName() {
    return "Pages";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pages for dynamic purposes.
  **/
  public static factory(data: PagesInterface): Pages{
    return new Pages(data);
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
      name: 'Pages',
      plural: 'Pages',
      path: 'Pages',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "page_heading": {
          name: 'page_heading',
          type: 'string'
        },
        "chapter_id": {
          name: 'chapter_id',
          type: 'number'
        },
        "content": {
          name: 'content',
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
      },
      relations: {
      }
    }
  }
}
