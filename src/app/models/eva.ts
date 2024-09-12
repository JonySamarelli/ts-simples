export class Eva {
    email: string ;
    profileName: string;
    programId: number;
    programName: string;
    actorId: number;
    userId: number;
    userLogin: string;

    constructor(email: string, profileName: string, programId: number, programName: string, actorId: number, userId: number, userLogin: string) {
        this.email = email;
        this.profileName = profileName;
        this.programId = programId;
        this.programName = programName;
        this.actorId = actorId;
        this.userId = userId;
        this.userLogin = userLogin;
    }
}