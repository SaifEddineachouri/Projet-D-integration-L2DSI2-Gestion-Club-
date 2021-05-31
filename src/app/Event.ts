export class Event {

    public id: number;
    public titre: string;
    public Capacity : string = "";
    public Lieu: string = "";
    public Date: string ="";

    constructor(id: number, titre: string,  Capacity: string, Lieu:string , DateE:string) {
        this.id = id;
        this.titre = titre;
        this.Capacity=Capacity;
        this.Lieu=Lieu;
        this.Date= DateE;
    }

}