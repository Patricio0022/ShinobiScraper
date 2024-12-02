import { ninjaRank } from "./ninjaRank";

export class Rank{

private ninjaRank: ninjaRank;
private ninjaRegistration: string;


    public getNinjaRank(): ninjaRank {
        return this.ninjaRank;
    }

    public setNinjaRank(ninjaRank: ninjaRank): void {
        this.ninjaRank = ninjaRank;
    }

    public getNinjaRegistration(): string {
        return this.ninjaRegistration;
    }

    public setNinjaRegistration(ninjaRegistration: string): void {
        this.ninjaRegistration = ninjaRegistration;
    }


}