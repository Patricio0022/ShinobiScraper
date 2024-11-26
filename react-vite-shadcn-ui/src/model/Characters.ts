import { Personal } from './Personal';

export class Characters {

private id: number;
private name: string;
private images: string[];
private debut: string;
private family: string; 
private jutsu: string[];
private natureType: string[];

private personal: Personal;

    public getId(): number {
        return this.id;
    }


    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getImages(): string[] {
        return this.images;
    }

    public setImages(images: string[]): void {
        this.images = images;
    }

    public getDebut(): string {
        return this.debut;
    }

    public setDebut(debut: string): void {
        this.debut = debut;
    }

    public getFamily(): string {
        return this.family;
    }

    public setFamily(family: string): void {
        this.family = family;
    }

    public getJutsu(): string[] {
        return this.jutsu;
    }

    public setJutsu(jutsu: string[]): void {
        this.jutsu = jutsu;
    }

    public getNatureType(): string[] {
        return this.natureType;
    }

    public setNatureType(natureType: string[]): void {
        this.natureType = natureType;
    }

    public getPersonal(): Personal {
        return this.personal;
    }

    public setPersonal(personal: Personal): void {
        this.personal = personal;
    }


    constructor (id: number, 
        name: string,
        images: string[],
        debut: string,
        family: string, 
        jutsu: string[], 
        natureType: string[], 
        ) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.debut = debut;
        this.family = family;
        this.jutsu = jutsu;
        this.natureType = natureType;
        
        }

   



}