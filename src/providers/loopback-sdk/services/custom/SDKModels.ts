/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { App_access } from '../../models/App_access';
import { App_details } from '../../models/App_details';
import { City } from '../../models/City';
import { Contractor_affiliation_master } from '../../models/Contractor_affiliation_master';
import { Contractor_affiliation_mapping } from '../../models/Contractor_affiliation_mapping';
import { Contractor_profile } from '../../models/Contractor_profile';
import { Contractor_specialization_master } from '../../models/Contractor_specialization_master';
import { Equipments_mapping } from '../../models/Equipments_mapping';
import { Equipments_master } from '../../models/Equipments_master';
import { Project_photos } from '../../models/Project_photos';
import { Projects } from '../../models/Projects';
import { Type_of_housing_master } from '../../models/Type_of_housing_master';
import { Work_group } from '../../models/Work_group';
import { Container } from '../../models/Container';
import { Type_of_housing_mapping } from '../../models/Type_of_housing_mapping';
import { Contractor_specialization_mapping } from '../../models/Contractor_specialization_mapping';
import { Accredited_supplies } from '../../models/Accredited_supplies';
import { Construction_stage_master } from '../../models/Construction_stage_master';
import { Construction_stage_mapping } from '../../models/Construction_stage_mapping';
import { Email } from '../../models/Email';
import { Books } from '../../models/Books';
import { Pages } from '../../models/Pages';
import { Chapters } from '../../models/Chapters';
import { Videos } from '../../models/Videos';
import { Municipality } from '../../models/Municipality';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    App_access: App_access,
    App_details: App_details,
    City: City,
    Contractor_affiliation_master: Contractor_affiliation_master,
    Contractor_affiliation_mapping: Contractor_affiliation_mapping,
    Contractor_profile: Contractor_profile,
    Contractor_specialization_master: Contractor_specialization_master,
    Equipments_mapping: Equipments_mapping,
    Equipments_master: Equipments_master,
    Project_photos: Project_photos,
    Projects: Projects,
    Type_of_housing_master: Type_of_housing_master,
    Work_group: Work_group,
    Container: Container,
    Type_of_housing_mapping: Type_of_housing_mapping,
    Contractor_specialization_mapping: Contractor_specialization_mapping,
    Accredited_supplies: Accredited_supplies,
    Construction_stage_master: Construction_stage_master,
    Construction_stage_mapping: Construction_stage_mapping,
    Email: Email,
    Books: Books,
    Pages: Pages,
    Chapters: Chapters,
    Videos: Videos,
    Municipality: Municipality,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
