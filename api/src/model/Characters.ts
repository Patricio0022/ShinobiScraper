import { Personal } from './Personal';

export class Characters {

    private id?: number;
    private  name?: string;
    private images?: string[];
    private debut?: string;
    private family?: string;
    private jutsu?: string[];
    private natureType?: string[];
    private personal?: Personal | undefined;

    

    constructor({
        id,
        name,
        images,
        debut,
        family,
        jutsu,
        natureType,
        personal,
      }: {
        id?: number;
        name?: string;
        images?: string[];
        debut?: string;
        family?: string;
        jutsu?: string[];
        natureType?: string[];
        personal?: Personal;
      } = {}) {
        this.id = id;
        this.name = name;
        this.images = images ?? [];
        this.debut = debut ?? "Unknown";
        this.family = family ?? "Unknown";
        this.jutsu = jutsu ?? [];
        this.natureType = natureType ?? [];
        this.personal = personal;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string | undefined {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getImages(): string[] | undefined {
        return this.images;
    }

    public setImages(images: string[]): void {
        this.images = images;
    }

    public getDebut(): string | undefined {
        return this.debut;
    }

    public setDebut(debut: string): void {
        this.debut = debut;
    }

    public getFamily(): string | undefined {
        return this.family;
    }

    public setFamily(family: string): void {
        this.family = family;
    }

    public getJutsu(): string[] | undefined {
        return this.jutsu;
    }

    public setJutsu(jutsu: string[]): void {
        this.jutsu = jutsu;
    }

    public getNatureType(): string[] | undefined {
        return this.natureType;
    }

    public setNatureType(natureType: string[]): void {
        this.natureType = natureType;
    }

    public getPersonal(): Personal | undefined {
        return this.personal;
    }

    public setPersonal(personal: Personal): void {
        this.personal = personal;
    }
}
