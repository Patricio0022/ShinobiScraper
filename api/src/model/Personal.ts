import { Age } from './Age';
import { Height } from './Height';
import { Weight } from './Weight';
import { VoiceActors } from './VoiceActors';

export class Personal {
  private birthdate: string;
  private sex: string;
  private age: Age | null;
  private height: Height | null;
  private weight: Weight | null;
  private bloodType: string;
  private kekkeiGenkai: string[];
  private classification: string[];
  private tailedBeast: string;
  private occupation: string[];
  private affiliation: string[];
  private team: string[];
  private clan: string;
  private titles: string[];
  private rank: string;
  private tools: string[];
  private voiceActors: VoiceActors | null;

  constructor(
    birthdate: string,
    sex: string,
    age: Age | null,
    height: Height | null,
    weight: Weight | null,
    bloodType: string,
    kekkeiGenkai: string[],
    classification: string[],
    tailedBeast: string,
    occupation: string[],
    affiliation: string[],
    team: string[],
    clan: string,
    titles: string[],
    rank: string,
    tools: string[],
    voiceActors: VoiceActors | null
  ) {
    this.birthdate = birthdate;
    this.sex = sex;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.bloodType = bloodType;
    this.kekkeiGenkai = kekkeiGenkai;
    this.classification = classification;
    this.tailedBeast = tailedBeast;
    this.occupation = occupation;
    this.affiliation = affiliation;
    this.team = team;
    this.clan = clan;
    this.titles = titles;
    this.rank = rank;
    this.tools = tools;
    this.voiceActors = voiceActors;
  }

  // Getters para acessar os dados
  public getBirthdate(): string {
    return this.birthdate;
  }

  public getSex(): string {
    return this.sex;
  }

  public getAge(): Age | null {
    return this.age;
  }

  public getHeight(): Height | null {
    return this.height;
  }

  public getWeight(): Weight | null {
    return this.weight;
  }

  public getBloodType(): string {
    return this.bloodType;
  }

  public getKekkeiGenkai(): string[] {
    return this.kekkeiGenkai;
  }

  public getClassification(): string[] {
    return this.classification;
  }

  public getTailedBeast(): string {
    return this.tailedBeast;
  }

  public getOccupation(): string[] {
    return this.occupation;
  }

  public getAffiliation(): string[] {
    return this.affiliation;
  }

  public getTeam(): string[] {
    return this.team;
  }

  public getClan(): string {
    return this.clan;
  }

  public getTitles(): string[] {
    return this.titles;
  }

  public getRank(): string {
    return this.rank;
  }

  public getTools(): string[] {
    return this.tools;
  }

  public getVoiceActors(): VoiceActors | null {
    return this.voiceActors;
  }
}
