import {Rank} from "./Rank";
import {VoiceActors} from "./VoiceActors";
import {Age} from "./Age";
import {Height} from "./Height";
import {Weight} from "./Weight";

export class Personal{

private birthdate: string;
private sex: string;
private age: Age;
private height: Height;
private weight: Weight;
private bloodType: string;
private kekkeiGenkai: Array<string>;
private classification: Array<string>;
private tailedBeast: string;
private occupation: Array<string>;
private affiliation: Array<string>;
private team: Array<string>;
private clan: string;
private titles: Array<string>;

private rank: Rank;

private tools: Array<string>;

private voiceActors: VoiceActors;



    public getBirthdate(): string {
        return this.birthdate;
    }

    public setBirthdate(birthdate: string): void {
        this.birthdate = birthdate;
    }

    public getSex(): string {
        return this.sex;
    }

    public setSex(sex: string): void {
        this.sex = sex;
    }

    public getAge(): Age {
        return this.age;
    }

    public setAge(age: Age): void {
        this.age = age;
    }

    public getHeight(): Height {
        return this.height;
    }

    public setHeight(height: Height): void {
        this.height = height;
    }

    public getWeight(): Weight {
        return this.weight;
    }

    public setWeight(weight: Weight): void {
        this.weight = weight;
    }

    public getBloodType(): string {
        return this.bloodType;
    }

    public setBloodType(bloodType: string): void {
        this.bloodType = bloodType;
    }

    public getKekkeiGenkai(): Array<string> {
        return this.kekkeiGenkai;
    }

    public setKekkeiGenkai(kekkeiGenkai: Array<string>): void {
        this.kekkeiGenkai = kekkeiGenkai;
    }

    public getClassification(): Array<string> {
        return this.classification;
    }

    public setClassification(classification: Array<string>): void {
        this.classification = classification;
    }

    public getTailedBeast(): string {
        return this.tailedBeast;
    }

    public setTailedBeast(tailedBeast: string): void {
        this.tailedBeast = tailedBeast;
    }

    public getOccupation(): Array<string> {
        return this.occupation;
    }

    public setOccupation(occupation: Array<string>): void {
        this.occupation = occupation;
    }

    public getAffiliation(): Array<string> {
        return this.affiliation;
    }

    public setAffiliation(affiliation: Array<string>): void {
        this.affiliation = affiliation;
    }

    public getTeam(): Array<string> {
        return this.team;
    }

    public setTeam(team: Array<string>): void {
        this.team = team;
    }

    public getClan(): string {
        return this.clan;
    }

    public setClan(clan: string): void {
        this.clan = clan;
    }

    public getTitles(): Array<string> {
        return this.titles;
    }

    public setTitles(titles: Array<string>): void {
        this.titles = titles;
    }

    public getRank(): Rank {
        return this.rank;
    }

    public setRank(rank: Rank): void {
        this.rank = rank;
    }

    public getTools(): Array<string> {
        return this.tools;
    }

    public setTools(tools: Array<string>): void {
        this.tools = tools;
    }

    public getVoiceActors(): VoiceActors {
        return this.voiceActors;
    }

    public setVoiceActors(voiceActors: VoiceActors): void {
        this.voiceActors = voiceActors;
    }



}