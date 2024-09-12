export class sgp {
    programId: number; 
    nomeProduto: string;
    actorId: number; 
    actorName: string; 
    character: string; 
    cadastradoEva: boolean = false;

    constructor(programId: number, nomeProduto: string, actorId: number, actorName: string, character: string) {
        this.programId = programId;
        this.nomeProduto = nomeProduto
        this.actorId = actorId;
        this.actorName = actorName;
        this.character = character;
    }
}