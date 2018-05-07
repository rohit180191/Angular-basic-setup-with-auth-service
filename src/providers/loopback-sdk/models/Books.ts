/* tslint:disable */

declare var Object: any;
export interface BooksInterface {
  "id"?: number;
  "name"?: string;
  "description"?: string;
  "logo_image"?: string;
  "status"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "priority"?: number;
}

export class Books implements BooksInterface {
  "id": number;
  "name": string;
  "description": string;
  "logo_image": string;
  "status": number;
  "created_at": Date;
  "updated_at": Date;
  "priority": number;
  constructor(data?: BooksInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Books`.
   */
  public static getModelName() {
    return "Books";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Books for dynamic purposes.
  **/
  public static factory(data: BooksInterface): Books{
    return new Books(data);
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
      name: 'Books',
      plural: 'Books',
      path: 'Books',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "logo_image": {
          name: 'logo_image',
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
