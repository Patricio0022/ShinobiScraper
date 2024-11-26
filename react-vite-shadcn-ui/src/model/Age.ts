export class Age {

    private partI: string
    private partII: string
    private academyGraduate: string;


    public getPartI(): string {
        return this.partI;
    }

    public setPartI(partI: string): void {
        this.partI = partI;
    }

    public getPartII(): string {
        return this.partII;
    }

    public setPartII(partII: string): void {
        this.partII = partII;
    }

    public getAcademyGraduate(): string {
        return this.academyGraduate;
    }

    public setAcademyGraduate(academyGraduate: string): void {
        this.academyGraduate = academyGraduate;
    }


    
}