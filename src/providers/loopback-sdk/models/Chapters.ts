/* tslint:disable */

declare var Object: any;
export interface ChaptersInterface {
  "id"?: number;
  "name"?: string;
  "book_id"?: number;
  "status"?: number;
  "created_at"?: Date;
  "updated_at"?: Date;
  "priority"?: number;
}

export class Chapters implements ChaptersInterface {
  "id": number;
  "name": string;
  "book_id": number;
  "status": number;
  "created_at": Date;
  "updated_at": Date;
  "priority": number;
  constructor(data?: ChaptersInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Chapters`.
   */
  public static getModelName() {
    return "Chapters";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Chapters for dynamic purposes.
  **/
  public static factory(data: ChaptersInterface): Chapters{
    return new Chapters(data);
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
      name: 'Chapters',
      plural: 'Chapters',
      path: 'Chapters',
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
        "book_id": {
          name: 'book_id',
          type: 'number'
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
