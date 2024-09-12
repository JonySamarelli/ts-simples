import { Eva } from "./eva";
import { sempre } from "./sempre";
import { sgp } from "./sgp";

export class ApplicationResponse {
    email: string;
    actorId?: number;
    sempre?: sempre[];
    eva?: Eva[];
    sgp?: sgp[];

    constructor(email: string, actorId: number, sempre: sempre[], eva: Eva[], sgp: sgp[]) {
        this.email = email;
        this.actorId = actorId;
        this.sempre = sempre;
        this.eva = eva;
        this.sgp = sgp;
    }
}